'use strict';

const { loadSubapps } = require('./lib/util');

module.exports = app => {
  app.config.coreMiddleware.push('subApp');

  app.subApps = loadSubapps(app);

  process.nextTick(() => {

    require('./lib/render')(app);

    require('./lib/service')(app);

    require('./lib/controller')(app);

    require('./lib/middleware')(app);

    require('./lib/router')(app);
  });
};

