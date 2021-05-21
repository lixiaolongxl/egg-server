module.exports = app => {
    return {
      schedule: app.config.cacheTick,
      async task(ctx) {
        console.log("任务执行 : " + new Date().toString());
      },
    }
};
  