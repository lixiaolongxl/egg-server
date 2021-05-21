// app/model/user.js

module.exports = app => {
    // egg-sequelize插件会将Sequelize类绑定到app上线，从里面可以取到各种静态类型
    
    const { STRING, INTEGER ,BOOLEAN,DATE} = app.Sequelize;

    const User = app.model.define('users', {
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
    return User;
            
};