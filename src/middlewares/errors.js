const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server Error";
  if (process.env.NODE_ENV == "DEVELOPMENT") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errMessage: err.message,
      stack: err.stack,
    });
  } else {
    let error = { ...err };
    error.message = err.message;
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      error = new ErrorHandler(message, 400);
    }
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((values) => values.message);
      error = new ErrorHandler(message, 400);
    }
    // Handling duplicate email address error
    if (err.code === 11000) {
      const message = `The entered ${Object.keys(err.keyValue)} already exist.`;
      error = new ErrorHandler(message, 400);
    }

    // Handling wrong JWT error
    if (err.name === "JsonWebTokenError") {
      const message = "JSON Web Token is Invalid. Try again";
      error = new ErrorHandler(message, 400);
    }
    // Handling expired JWT Token error
    if (err.name === "TokenExpiredError") {
      const message = "JSON Web Token is expired. Try again";
      error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode).json({
      success: false,
      message: error.message || "Product not found",
    });
  }
};
