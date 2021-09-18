import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { ValidationError } from 'yup';

type IValidationErrors = Record<string, Array<string> | string | undefined>;

const errorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ValidationError) {
    const description: IValidationErrors = {
      path: error.path,
      errors: error.errors,
    };

    return res.status(400).json({ error: 'Validation fails.', description });
  }

  if (error) {
    return res
      .status(500)
      .json({ error: 'Internal Server Error', description: error });
  }

  return next();
};

export default errorHandler;
