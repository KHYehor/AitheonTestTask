'use strict';

import mongoose from 'mongoose';

// @ts-ignore
const MONGODBURI: string = process.env.MONGODBURI;

const initMongoInstance = async () => {
  // Connection init
  await mongoose.connect(MONGODBURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true
  });
  console.log('MongodbCluster connected...');
  // Event handlers
  mongoose.connection.on('error', console.error);
};

export default initMongoInstance;
