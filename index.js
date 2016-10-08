'use strict';

var autoprefixer = require('autoprefixer');
var postcss = require('postcss');

module.exports = function(content, file, conf){
  return postcss([autoprefixer(conf)]).process(content).css;
};