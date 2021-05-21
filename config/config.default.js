/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1621496247663_3410';
  config.security ={
    csrf: {
      enable: false, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
  }
  // add your middleware config here
  config.middleware = ['errorHandler'];
  config.sequelize={
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'zion-cli',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '152123',
    underscored: true,
    // 时区，sequelize有很多自动时间的方法，都是和时区相关的，记得设置成东8区（+08:00）
    timezone: '+08:00',
  }
  config.cacheTick = {
    interval: '5s', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
    immediate: true, //配置了该参数为 true 时，这个定时任务会在应用启动并 ready 后立刻执行一次这个定时任务
    // disable: true, //为true表示定时任务不会被启动
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
