window.babel = require('@babel/core');
window.babelPlugins = [
  require('@babel/plugin-transform-modules-systemjs'),
  require('@babel/plugin-syntax-dynamic-import'),
  require('@babel/plugin-syntax-async-generators'),
  require('@babel/plugin-syntax-object-rest-spread'),
];
