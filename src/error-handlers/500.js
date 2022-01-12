'use strict';

module.exports = function(err, req, res, next) {
  if(err !== '404 NotFound') {
    res.status(500);
  } else {
    console.log(err);
  }
  res.send(err);
};