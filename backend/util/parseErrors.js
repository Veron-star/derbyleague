const _ = require("lodash");

function errors() 
{ const result = {};
  _.forEach(errors, (val, key) => {result[key] = val.message;});
  return result;
}