export class clientError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.status = statusCode; // 406
  }
}

export class serverError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.status = statusCode; // 500
  }
}
