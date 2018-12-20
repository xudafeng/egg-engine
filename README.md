# egg-engine

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-engine.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-engine
[travis-image]: https://img.shields.io/travis/xudafeng/egg-engine.svg?style=flat-square
[travis-url]: https://travis-ci.org/xudafeng/egg-engine
[codecov-image]: https://img.shields.io/codecov/c/github/xudafeng/egg-engine.svg?style=flat-square
[codecov-url]: https://codecov.io/github/xudafeng/egg-engine?branch=master
[david-image]: https://img.shields.io/david/xudafeng/egg-engine.svg?style=flat-square
[david-url]: https://david-dm.org/xudafeng/egg-engine
[snyk-image]: https://snyk.io/test/npm/egg-engine/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-engine
[download-image]: https://img.shields.io/npm/dm/egg-engine.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-engine

help you create multi-site applications quickly and easily

## 安装

```bash
npm i egg-engine --save
```

## 开启插件

```js
// config/plugin.js
exports.subapp = {
  enable: true,
  package: 'egg-engine',
};
```

> 各个站点的环境是隔离的，每个站点里定义的controller、middleware、service仅能被本站点的使用。

## 详细配置

```javascript
// config/config.default.js
exports.subApp = {
  appsMap: {
  },
};
```

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## License

[MIT](LICENSE)
