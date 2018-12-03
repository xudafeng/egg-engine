'use strict';

const path = require('path');

module.exports = appInfo => {
  const exports = {};

  exports.subApp = {
    appsMap: {
    },
  };

  exports.view = {
    root: path.join(appInfo.baseDir, 'app'),
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  return exports;
};
