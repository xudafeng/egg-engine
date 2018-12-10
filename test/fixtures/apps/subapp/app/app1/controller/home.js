'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async findUser() {
    const { ctx } = this;
    ctx.body = await ctx.subAppService.user.findUser();
  }
}

module.exports = HomeController;
