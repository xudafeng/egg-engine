'use strict';

const path = require('path');

module.exports = {
  loadSubapps(app) {
    const subApps = new Map();
    for (const name in app.config.subApp.appsMap) {
      subApps.set(name, {
        name,
        baseDir: path.dirname(app.config.subApp.appsMap[name].baseDir),
      });
    }
    return subApps;
  },
};
