'use strict';

import initMongoInstance from "./mongodb";

const initInstances = async () => {
  await initMongoInstance();
};

export default initInstances;
