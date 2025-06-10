import axios from 'axios';

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
  constructor(baseUrl, organizationId) {
    this.baseUrl = baseUrl;
    this.organizationId = organizationId;
    
    // Initialize axios client
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: 20000, // 20 seconds receive timeout
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  static _instance = null;

  /**
   * Singleton instance of the GuardClient.
   * @returns {GuardClient} The singleton instance
   */
  static get instance() {
    if (!GuardClient._instance) {
      throw new Error(
        'GuardClient has not been initialized. Call GuardClient.init() first.'
      );
    }
    return GuardClient._instance;
  }

  /**
   * Initializes the GuardClient.
   * @param {Object} options - Initialization options
   * @param {string} options.organizationId - Your organization ID
   * @param {string} [options.baseUrl="https://api.ugc-guard.com/"] - The base URL
   */
  static init({ organizationId, baseUrl = "https://api.ugc-guard.com/" }) {
    if (!GuardClient._instance) {
      GuardClient._instance = new GuardClient(baseUrl, organizationId);
    }
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

      // Prepare the report
      const report = {
        "module_id": moduleId,
        "type_id": typeId,
        "description": description
      };

      const requestBody = {
        "report": report,
        "reporter": reporterPerson,
        "main_content": mainContentCreate,
        "main_content_sender": mainContentSender,
        "report_context": reportContext,
        "report_context_persons": reportContextPersons,
        "channels": channels
      };

      const response = await this.client.post('/reports/magic', requestBody, {
        params: {
          "report_category": reportCategory,
          "secret": moduleSecret,
          "custom_message": userMessage
        }
      });

      onProgress?.(totalSteps, totalSteps);
      return response.data;
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
    return {
      "unique_partner_id": person.unique_partner_id,
      "name": person.name,
      "phone": person.phone,
      "email": person.email,
      "extra_data": person.additionalData,
      "module_id": moduleId
    };
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
      return {
        "creator_id": contentWrapper.creator.unique_partner_id,
        "body": body.body,
        "body_type": type,
        "created_at": reportContent.createdAt,
        "extra_data": reportContent.additionalData,
        "ip": reportContent.ip,
        "unique_partner_id": reportContent.unique_partner_id
      };
    } else {
      // We need to upload the file first
      const files = await this.uploadFiles(moduleId, moduleSecret, contentWrapper);
      if (!files) {
        throw new Error('Failed to upload files.');
      }
      return {
        "creator_id": contentWrapper.creator.unique_partner_id,
        "body": reportContent.body.body,
        "body_type": type,
        "created_at": reportContent.createdAt,
        "extra_data": reportContent.additionalData,
        "ip": reportContent.ip,
        "unique_partner_id": reportContent.unique_partner_id,
        "media_identifiers": files.map(f => f.id).filter(id => id)
      };
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
2
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
    const formData = new FormData();
    
    // Convert bytes to Blob if needed
    const blob = new Blob([multiMediaBody.bytes], { type: multiMediaBody.mimeType });
    formData.append('upload_file', blob, multiMediaBody.filename);

    const response = await this.client.post('/files/upload', formData, {
      params: {
        "module_id": moduleId,
        secret: moduleSecret
      },
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return response.data;
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
}

// Export for use in other modules
// export default GuardClient;
export { GuardClient };

// Usage example:
// GuardClient.init({ organizationId: 'your-org-id' });
// const client = GuardClient.instance;
