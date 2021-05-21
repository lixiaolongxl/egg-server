'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
   async index(){
        const ctx = this.ctx;
        const {name,password,age,sex} = ctx.request.body;
        const user = await ctx.model.Users.create({ name,password,age,sex});
        ctx.status = 200;
        ctx.body = user;
        return {
            user
        }
   }
   async update(){
        const ctx = this.ctx;
        const payLoad = ctx.request.body;
        const id = Number(payLoad.id);
        const user = await ctx.model.Users.findByPk(id);
        if (!user) {
            throw new Error('用户不存在');
        }
        const { name, password } = ctx.request.body;
        await user.update({ name, password });
        ctx.body = user;
        return {
            user
        }
   }
   async list(){
        const ctx = this.ctx;
        const user = await ctx.model.Users.findAll();
        return {
            user
        }
   }
   async delete(){
        const ctx = this.ctx;
        const { id } = ctx.request.body;
        const user =  await ctx.model.Users.findByPk(id)
        if (!user) {
            throw new Error('用户不存在');
        }
        await user.destroy();
        ctx.status = 200;
        return {
            user
        }
   }
}

module.exports = HomeService;
