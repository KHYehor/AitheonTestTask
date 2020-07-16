'use strict';

import type { Express } from 'express';

import errorHandler from "./errorHandler";

const setMidllewares = (app: Express) => {
  app.use(errorHandler);
};

export default setMidllewares;
