  import fs from 'fs/promises';
  import path from 'path';
  import mime from 'mime-types';

/**
 * Represents content that is being reported or that is context of a report (so surrounding the main content).
 */
class ReportContent {
  /**
   * @param {string} unique_partner_id - The unique identifier for the content (e.g., primary key of post/comment in your database)
   * @param {Body} body - The body of this content (use either TextBody or MultiMediaBody)
   * @param {Object} [options] - Additional options
   * @param {Object} [options.additionalData] - Additional data that can be sent with the report
   * @param {string} [options.ip] - The IP address of the user who created this content
   * @param {Date} [options.createdAt] - The date and time when this content was created (NOT when the report was created)
   */
  constructor(unique_partner_id, body, { additionalData, ip, createdAt } = {}) {
    this.unique_partner_id = unique_partner_id;
    this.body = body;
    this.additionalData = additionalData;
    this.ip = ip;
    this.createdAt = createdAt;
  }
}

/**
 * Represents the person object. A person is either the creator of a content object or the person who is reporting it.
 */
class ReportPerson {
  /**
   * @param {string} unique_partner_id - The unique identifier for the person (e.g., primary key of user in your database)
   * @param {Object} [options] - Additional options
   * @param {string} [options.name] - The name of the person
   * @param {string} [options.email] - The email address of the person
   * @param {string} [options.phone] - The phone number of the person
   * @param {Object} [options.additionalData] - Additional data that can be sent with the report
   */
  constructor(unique_partner_id, { name, email, phone, additionalData } = {}) {
    this.unique_partner_id = unique_partner_id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.additionalData = additionalData;
  }
}

/**
 * Wraps the ReportContent with the information on the person that created it.
 */
class ContentWrapper {
  /**
   * @param {ReportContent} content - The content that is being reported
   * @param {ReportPerson} creator - The person who CREATED the content (not the person who is reporting it)
   */
  constructor(content, creator) {
    this.content = content;
    this.creator = creator;
  }
}

/**
 * Content types enum
 */
const ContentType = {
  TEXT: 'text',
  IMAGE: 'image',
  VIDEO: 'video',
  AUDIO: 'audio',
  FILE: 'file',
  OTHER: 'other'
};

/**
 * Abstract base class for body content
 */
class Body {
  /**
   * @param {string} contentType - The content type
   * @param {any} body - The body content
   */
  constructor({ contentType, body }) {
    if (this.constructor === Body) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.contentType = contentType;
    this.body = body;
  }
}

/**
 * A body that only contains text. Like a chat message or a comment.
 */
class TextBody extends Body {
  /**
   * @param {string} text - The text content
   */
  constructor({ text }) {
    super({ contentType: ContentType.TEXT, body: text });
    this.text = text;
  }
}

/**
 * A body that contains multimedia content, such as images, videos, or audio files.
 */
class MultiMediaBody extends Body {
  /**
   * @param {Uint8Array|ArrayBuffer} bytes - The file bytes
   * @param {string} filename - The filename
   * @param {string} mimeType - The MIME type
   * @param {string} [contentType] - The content type (auto-detected if not provided)
   * @param {string} [body=""] - Optional body text
   */
  constructor({ bytes, filename, mimeType, contentType, body = "" }) {
    // Auto-detect content type if not provided
    if (!contentType) {
      contentType = MultiMediaBody._detectContentType(mimeType);
    }
    console.log("🚀 ~ MultiMediaBody ~ constructor ~ contentType:", contentType)
    
    super({ contentType, body });
    this.bytes = new Uint8Array(bytes);
    this.filename = filename;
    this.mimeType = mimeType;
  }

  /**
   * Create MultiMediaBody from a File object (browser)
   * @param {File} file - The File object
   * @returns {Promise<MultiMediaBody>} Promise resolving to MultiMediaBody
   */
  static async fromFile(file) {
    const bytes = await file.arrayBuffer();
    const filename = file.name;
    const mimeType = file.type || 'application/octet-stream';
    const contentType = MultiMediaBody._detectContentType(mimeType);

    return new MultiMediaBody({
      bytes,
      filename,
      mimeType,
      contentType
    });
  }

  /**
   * Create MultiMediaBody from a file path (Node.js)
   * @param {string} filePath - The file path
   * @returns {Promise<MultiMediaBody>} Promise resolving to MultiMediaBody
   */
  static async fromFilePath(filePath) {
    if (typeof window !== 'undefined') {
      throw new Error('fromFilePath is only available in Node.js environment');
    }


    const bytes = await fs.readFile(filePath);
    const filename = path.basename(filePath);
    const mimeType = mime.lookup(filename) || 'application/octet-stream';
    const contentType = MultiMediaBody._detectContentType(mimeType);
    console.log("🚀 ~ MultiMediaBody ~ fromFilePath ~ contentType:", contentType)

    return new MultiMediaBody({
      bytes,
      filename,
      mimeType,
      contentType
    });
  }

  /**
   * Detect content type from MIME type
   * @private
   * @param {string} mimeType - The MIME type
   * @returns {string} The detected content type
   */
  static _detectContentType(mimeType) {
    if (mimeType.startsWith('image/')) {
      return ContentType.IMAGE;
    } else if (mimeType.startsWith('video/')) {
      return ContentType.VIDEO;
    } else if (mimeType.startsWith('audio/')) {
      return ContentType.AUDIO;
    }
    return ContentType.FILE;
  }
}

/**
 * A body that contains multiple multimedia bodies, such as a gallery of images or a collection of videos.
 * ALL MEDIA SHOULD HAVE THE SAME CONTENT TYPE.
 */
class MultiMultiMediaBody extends Body {
  /**
   * @param {MultiMediaBody[]} media - Array of MultiMediaBody objects
   * @param {string} [contentType=ContentType.IMAGE] - The content type
   */
  constructor({ media, contentType = ContentType.IMAGE }) {
    super({ contentType, body: media });
    this.media = media;
  }

  /**
   * Create MultiMultiMediaBody from an array of File objects (browser)
   * @param {File[]} files - Array of File objects
   * @returns {Promise<MultiMultiMediaBody>} Promise resolving to MultiMultiMediaBody
   */
  static async fromFiles(files) {
    const mediaPromises = files.map(file => MultiMediaBody.fromFile(file));
    const media = await Promise.all(mediaPromises);
    
    return new MultiMultiMediaBody({ media });
  }

  /**
   * Create MultiMultiMediaBody from an array of file paths (Node.js)
   * @param {string[]} filePaths - Array of file paths
   * @returns {Promise<MultiMultiMediaBody>} Promise resolving to MultiMultiMediaBody
   */
  static async fromFilePaths(filePaths) {
    const mediaPromises = filePaths.map(path => MultiMediaBody.fromFilePath(path));
    const media = await Promise.all(mediaPromises);
    
    return new MultiMultiMediaBody({ media });
  }
}

// Export all classes and constants
export {
  ReportContent,
  ReportPerson,
  ContentWrapper,
  Body,
  TextBody,
  MultiMediaBody,
  MultiMultiMediaBody,
  ContentType
};

// Usage examples:

// Text content example:
// const textBody = new TextBody({ text: "This is a harmful message" });
// const content = new ReportContent("content-123", textBody, {
//   ip: "192.168.1.1",
//   createdAt: new Date()
// });

// Image content example (browser):
// const fileInput = document.querySelector('input[type="file"]');
// const file = fileInput.files[0];
// const mediaBody = await MultiMediaBody.fromFile(file);
// const content = new ReportContent("content-456", mediaBody);

// Multiple images example (browser):
// const files = Array.from(fileInput.files);
// const multiMediaBody = await MultiMultiMediaBody.fromFiles(files);
// const content = new ReportContent("content-789", multiMediaBody);

// Person example:
// const reporter = new ReportPerson("user-123", {
//   name: "John Doe",
//   email: "john@example.com"
// });

// Content wrapper example:
// const creator = new ReportPerson("user-456", { name: "Jane Doe" });
// const wrapper = new ContentWrapper(content, creator);
