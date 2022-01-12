'use strict';

function validator(request, response, next) {
  const { name } = request.query;
  if (name) {
    request.name = name;
    next();
  } else {
    next('Error');
  }
}

module.exports = validator;