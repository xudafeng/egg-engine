'use strict';

module.exports = app => {
  const { router, controller, middleware } = app;
  router.get('/findUser.json', controller.home.findUser);
};
