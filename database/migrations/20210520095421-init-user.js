'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 user 表
  up: async (queryInterface, Sequelize) => {
    const { STRING, INTEGER ,BOOLEAN,DATE} = Sequelize;

    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: {
          type:STRING,
          defaultValue:''
      },
      password: {
          type: STRING,
          defaultValue:''
      },
      age: {
          type:INTEGER,
          defaultValue:0,
      },
      sex:{
          type:BOOLEAN,
          defaultValue:true,
      },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
