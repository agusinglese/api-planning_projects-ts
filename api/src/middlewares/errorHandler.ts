import { Request, Response, NextFunction } from "express";

function errorHandler(
  err: { status: number; message: string },
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
}

export = errorHandler;
