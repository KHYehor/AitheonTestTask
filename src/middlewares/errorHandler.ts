'use strict';

import type { Request, Response } from 'express';

const errorHandler = (err: Error, req: Request, res: Response) => {
  console.error(err);
  res.status(500).json(err);
};

export default errorHandler;
