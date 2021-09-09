interface GeneralError {
  errorStatus: number;
  errorMessage: ErrorMessage;
}

interface ErrorMessage {
  status: string;
  message: string;
}

function errorHandler(message: string): ErrorMessage {
  return {
    status: "error",
    message,
  };
}

function generalError(httpsStatus: number): (s: string) => GeneralError {
  return function (message: string): GeneralError {
    return {
      errorStatus: httpsStatus,
      errorMessage: errorHandler(message),
    };
  };
}

const badRequestError: (string: string) => GeneralError = generalError(400);
const unauthorizedError: (string: string) => GeneralError = generalError(401);
const forbiddenError: (string: string) => GeneralError = generalError(403);
const notFoundError: (string: string) => GeneralError = generalError(404);
const notAcceptableError: (string: string) => GeneralError = generalError(406);
const conflictError: (string: string) => GeneralError = generalError(409);
const internalServerError: (string: string) => GeneralError = generalError(500);

export const errorService = {
  badRequestError,
  unauthorizedError,
  forbiddenError,
  notFoundError,
  notAcceptableError,
  conflictError,
  internalServerError,
};
