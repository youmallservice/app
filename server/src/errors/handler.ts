import { ErrorRequestHandler, Request, Response } from 'express';
import { ValidationError } from 'yup';

type IValidationErrors = Record<string, Array<string> | string | undefined>;

const errorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response
) => {
  if (error instanceof ValidationError) {
    const description: IValidationErrors = {
      path: error.path,
      errors: error.errors,
    };

    return res.status(400).json({ error: 'Validation fails.', description });
  }

  return res
    .status(500)
    .json({ error: 'Internal Server Error', description: error });
};

export default errorHandler;
