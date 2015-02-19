"use strict"

var merge = require('deepmerge'),
    util  = require('bin/utilities');

function attrParser(req, res, next){

  var reqBody = req.body,
      body    = {},
      attr ;

  for (attr in reqBody) {
    var array = util.convertToArray(attr);
    var hash = util.converToHash(array, reqBody[attr]);

    body = merge(body, hash);

  };

  req.body   = body;

  next();
}

module.exports = attrParser;