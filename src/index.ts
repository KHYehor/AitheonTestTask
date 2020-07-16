'use strict';

/**
 * Importing dev package
 */
import express from 'express';
import bodyParser from 'body-parser';

/**
 * Importing setters
 */
import setMiddlewares from './middlewares';
import setAppRoutes from './routes';

// @ts-ignore
const PORT: number = process.env.PORT;
// @ts-ignore
const HOST: string = process.env.HOST;


/**
 * Init app
 */
const App = express();

/**
 * Setting enpoints, middlewares
 */
App.use(bodyParser.json())
setAppRoutes(App);
setMiddlewares(App);

/**
 * Start listening app
 */
App
  .listen(PORT, HOST, () => {
    console.log(`Listening server: ${HOST}:${PORT}...`);
  });
