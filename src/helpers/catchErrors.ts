import { InternalServerError, HttpError } from "restify-errors";

function catchErrors(callback) {
  return async function errorHandler(req, res, next) {
    try {
      await callback(req, res, next);
    } catch (err) {
      if (!(err instanceof HttpError)) err = new InternalServerError();
      next(err);
    }
  };
}
