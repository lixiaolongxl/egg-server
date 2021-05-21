'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/home', controller.home.index);
  router.post('/home/update', controller.home.update);
  router.get('/home/list', controller.home.list);
  router.delete('/home/delete/',controller.home.delete)
};
