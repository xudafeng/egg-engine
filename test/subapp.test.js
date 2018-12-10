'use strict';

const mock = require('egg-mock');
const assert = require('assert');

describe('test/subapp.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/subapp',
    });
    return app.ready();
  });

  after(() => {
    app.close();
  });

  afterEach(mock.restore);

  describe('service', () => {
    it('should ctx.subAppService.findUser work', () => {
      return app;
    });
  });

});
