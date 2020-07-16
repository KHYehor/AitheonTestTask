'use strict';

import initInstances from "./instances";
import Repositories from "./repositories";

initInstances()
  .then(() => console.log('DB instances inited...'))
  .catch(console.error);

export default Repositories;
