import { ApiClient, ReportsApi, FilesApi, BodyCreateMagicReport, ContentCreate, Person, ReportCreate, MainContentSender } from 'ugc-guard-api';
import crypto from 'crypto';

/**
 * The UGC Guard client for reporting content.
 * 
 * First, you need to initialize the client with your organization ID and the base URL of the UGC Guard API.
 * Then you can use it to report content.
 */
class GuardClient {
  /**
   * @param {string} baseUrl - The base url where the UGC Guard api is available.
   * @param {string} organizationId - Your organization ID.
   */
  constructor({ organizationId, baseUrl = "https://api.ugc-guard.com/" }) {
    this.baseUrl = baseUrl;
    this.organizationId = organizationId;
    const apiClient = new ApiClient(baseUrl);
    this.reportsApi = new ReportsApi(apiClient);
    this.filesApi = new FilesApi(apiClient);
  }

  /**
   * Reports content to the UGC Guard API.
   * 
   * @param {string} moduleId - Module ID
   * @param {string} moduleSecret - Module secret
   * @param {string} typeId - Type ID
   * @param {ContentWrapper} mainContent - Main content to report
   * @param {ReportPerson} reporter - Person reporting the content
   * @param {Object} options - Additional options
   * @param {string} [options.description] - Description of the report
   * @param {string} [options.reportCategory="other"] - Report category
   * @param {string} [options.userMessage=""] - User message
   * @param {ContentWrapper[]} [options.context=[]] - Context content
   * @param {Function} [options.onProgress] - Progress callback
   * @param {string[]} [options.channels=[]] - Channels
   * @returns {Promise<ReportDB|null>} The created report or null if failed
   */
  async report(
    moduleId,
    moduleSecret,
    typeId,
    mainContent,
    reporter,
    {
      description = "",
      reportCategory = "other",
      userMessage = "",
      context = [],
      onProgress,
      channels = []
    } = {}
  ) {
    try {
      const totalSteps = context.length + 2;
      // Prepare the main report
      const mainContentCreate = await this.convertContentToContentCreate(
        mainContent,
        moduleId,
        moduleSecret
      );
      onProgress?.(1, totalSteps);
      const mainContentSender = this.convertPersonToPersonDB(
        mainContent.creator,
        moduleId
      );
      // Prepare the report context
      const reportContext = [];
      const reportContextPersons = [];
      let i = 2;
      for (const contentWrapper of context) {
        const contentCreate = await this.convertContentToContentCreate(
          contentWrapper,
          moduleId,
          moduleSecret
        );
        onProgress?.(i, totalSteps);
        reportContext.push(contentCreate);
        reportContextPersons.push(
          this.convertPersonToPersonDB(contentWrapper.creator, moduleId)
        );
        i++;
      }
      // Prepare the reporter
      const reporterPerson = this.convertPersonToPersonDB(reporter, moduleId);
      const reporterPersonDB = { ...reporterPerson }; // Replace Reporter constructor with a plain object

      const tmp = new Person(moduleId);
      Object.assign(tmp, mainContentSender);
      const mainContentSenderDB = { ...tmp }; // Replace MainContentSender constructor with a plain object

      // Prepare the report
      const report = new ReportCreate(moduleId, typeId);
      report.description = description;

      // Prepare the request body using OpenAPI model
      const requestBody = new BodyCreateMagicReport(
        report,
        reporterPersonDB,
        mainContentCreate,
        mainContentSenderDB,
        reportContext,
        reportContextPersons
      );
      requestBody.channels = channels;
      // Use OpenAPI ReportsApi
      return await new Promise((resolve, reject) => {
        this.reportsApi.createMagicReport(
          reportCategory,
          moduleSecret,
          requestBody,
          { customMessage: userMessage },
          (error, data) => {
            onProgress?.(totalSteps, totalSteps);
            if (error) return reject(error);
            resolve(data);
          }
        );
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Converts a ReportPerson to a PersonDB.
   * @param {ReportPerson} person - Person to convert
   * @param {string} moduleId - Module ID
   * @returns {PersonDB} Converted person
   */
  convertPersonToPersonDB(person, moduleId) {
    // Use OpenAPI Person model
    const p = new Person(moduleId);
    p.unique_partner_id = person.unique_partner_id;
    p.name = person.name;
    p.phone = person.phone;
    p.email = person.email;
    p.extra_data = person.additionalData;
    return p;
  }

  /**
   * Converts a ContentWrapper to a ContentCreate.
   * @param {ContentWrapper} contentWrapper - Content wrapper to convert
   * @param {string} moduleId - Module ID
   * @param {string} moduleSecret - Module secret
   * @returns {Promise<ContentCreate>} Converted content
   */
  async convertContentToContentCreate(contentWrapper, moduleId, moduleSecret) {
    const reportContent = contentWrapper.content;
    const body = reportContent.body;
    const type = body.contentType;
    if (type === "other" || type === "text") {
      const content = new ContentCreate(contentWrapper.creator.unique_partner_id);
      content.body = body.body;
      content.body_type = type;
      content.created_at = reportContent.createdAt;
      content.extra_data = reportContent.additionalData;
      content.ip = reportContent.ip;
      content.unique_partner_id = reportContent.unique_partner_id;
      return content;
    } else {
      // We need to upload the file first
      const files = await this.uploadFiles(moduleId, moduleSecret, contentWrapper);
      if (!files) {
        throw new Error('Failed to upload files.');
      }
      const content = new ContentCreate(contentWrapper.creator.unique_partner_id);
      content.body = reportContent.body.body;
      content.body_type = type;
      content.created_at = reportContent.createdAt;
      content.extra_data = reportContent.additionalData;
      content.ip = reportContent.ip;
      content.unique_partner_id = reportContent.unique_partner_id;
      content.media_identifiers = files.map(f => f.id).filter(id => id);
      return content;
    }
  }

  /**
   * Uploads files to the UGC Guard API.
   * @param {string} moduleId - Module ID
   * @param {string} moduleSecret - Module secret
   * @param {ContentWrapper} content - Content wrapper
   * @returns {Promise<File[]|null>} Uploaded files or null
   */
  async uploadFiles(moduleId, moduleSecret, content) {
    if (content.content.body.contentType === "other" || 
        content.content.body.contentType === "text") {
      throw new Error(
        'Content must be of type MultiMediaBody to upload a file.'
      );
    }
    if (!this.isMultiMediaBody(content.content.body) && 
        !this.isMultiMultiMediaBody(content.content.body)) {
      throw new Error(
        'Content must be of type MultiMediaBody to upload a file.'
      );
    }
    if (this.isMultiMediaBody(content.content.body)) {
      try {
        const file = await this._actualUpload(moduleId, moduleSecret, content.content.body);
        return [file];
      } catch (error) {
        throw error;
      }
    } else if (this.isMultiMultiMediaBody(content.content.body)) {
      const results = [];
      for (const multiMediaBody of content.content.body.media) {
        try {
          const file = await this._actualUpload(moduleId, moduleSecret, multiMediaBody);
          results.push(file);
        } catch (error) {
          throw error;
        }
      }
      return results;
    }
    return [];
  }

  /**
   * Uploads a single file to the UGC Guard API.
   * @param {string} moduleId - Module ID
   * @param {string} moduleSecret - Module secret
   * @param {MultiMediaBody} multiMediaBody - Media body to upload
   * @returns {Promise<File>} Uploaded file
   */
  async _actualUpload(moduleId, moduleSecret, multiMediaBody) {
    // Use Buffer for Node.js file upload
    const buffer = Buffer.from(multiMediaBody.bytes);
    // Attach filename and mimetype for form-data
    buffer.path = multiMediaBody.filename;
    buffer.type = multiMediaBody.mimeType;
    return await new Promise((resolve, reject) => {
      this.filesApi.uploadFile(
        moduleId,
        buffer,
        { secret: moduleSecret },
        (error, data) => {
          if (error) return reject(error);
          resolve(data);
        }
      );
    });
  }

  /**
   * Helper method to check if body is MultiMediaBody
   * @param {any} body - Body to check
   * @returns {boolean} True if MultiMediaBody
   */
  isMultiMediaBody(body) {
    return body && typeof body === 'object' && 'bytes' in body && 'mimeType' in body;
  }

  /**
   * Helper method to check if body is MultiMultiMediaBody
   * @param {any} body - Body to check
   * @returns {boolean} True if MultiMultiMediaBody
   */
  isMultiMultiMediaBody(body) {
    return body && typeof body === 'object' && 'media' in body && Array.isArray(body.media);
  }

  /**
   * Verifies the signature of a payload.
   * @param {Object} payloadBody - Original request body to verify.
   * @param {string} secretToken - UGC Guard webhook token.
   * @param {string} signatureHeader - Header received from UGC Guard.
   * @returns {boolean} True if the signature is valid, else false.
   */
  static verifySignature(payloadBody, secretToken, signatureHeader) {
    if (!signatureHeader) {
      return false;
    }
    const hash = crypto.createHmac('sha256', secretToken)
      .update(JSON.stringify(payloadBody, Object.keys(payloadBody).sort()))
      .digest('hex');
    const expectedSignature = `sha256=${hash}`;
    return crypto.timingSafeEqual(Buffer.from(expectedSignature), Buffer.from(signatureHeader));
  }
}

// Export for use in other modules
export { GuardClient };

// Usage example:
// const client = new GuardClient({ organizationId: 'your-org-id' });
