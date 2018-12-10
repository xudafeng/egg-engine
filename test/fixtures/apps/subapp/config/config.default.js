'use strict';

const path = require('path');

exports.keys = '123456';

exports.subApp = {
  appsMap: {
    app1: {
      hostname: 'app1.local',
      baseDir: path.join(__dirname, '..', 'app', 'app1'),
    },
  },
};

exports.globalMw = {
  header: 'x-response-time',
  ignore: /indexAsync/i,
};

exports.disabledMw = {
  enable: false,
};

exports.notfound = {
  pageUrl: 'http://demo.subapp.com/404.html',
};
