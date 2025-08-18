class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Indicates if the error is operational or programming error
  }
}

export const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Log the error details for debugging
  console.error(`Error: ${message}, Status Code: ${statusCode}`);

  // Send the error response
  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }) // Include stack trace in development mode
  });
}

export default ErrorHandler;