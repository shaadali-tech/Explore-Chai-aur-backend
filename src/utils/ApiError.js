class ApiError extends Error {
  constructor(
    statusCode,
    message = 'Something went wrong',
    Stack = '',
    error = []
  ) {
    super(message);
    this.statusCode = statusCode;
    this.stack = Stack;
    this.error = error;
    this.data = null;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
