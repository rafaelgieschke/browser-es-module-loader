window.babel = require('babel-core');
window.babelPlugins = [
  require('babel-plugin-transform-es2015-modules-systemjs'),
  require('babel-plugin-syntax-dynamic-import'),
  require('babel-plugin-syntax-async-generators'),
];
