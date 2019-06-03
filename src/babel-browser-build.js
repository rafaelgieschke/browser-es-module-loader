window.babel = require('@babel/core');
window.babelPlugins = [
  require('@babel/plugin-syntax-dynamic-import'),
  require('@babel/plugin-syntax-import-meta'),
  require('@babel/plugin-transform-modules-systemjs'),
];
