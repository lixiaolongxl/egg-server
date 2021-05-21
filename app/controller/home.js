'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	constructor(props){
		super(props);
		//校验
		this.UserCreateRule = {
			name: {
			  type: 'string',
			  required: true,
			//   allowEmpty: false,
			  // 用户名必须是3-10位之间的字母、下划线、@、. 并且不能以数字开头
			//   format: /^[A-Za-z_@.]{3,10}/
			},
			password: {
			  type: 'password',
			  require: true,
			  min: 6
			},
			age:{
				type: 'number',
				required: false,
			},
			sex:{
				type: 'boolean',
				required: false,
			}
		}
	}
	async index() {
		const { ctx,service } = this;
		ctx.validate(this.UserCreateRule);
		let res = await service.home.index()

		this.ctx.helper.success({
			res
		});
		
	}
	async update(){
		const { ctx,service } = this;
		let res = await service.home.update()
		ctx.body = res;
	}
	async list(){
		const { ctx,service } = this;
		let res = await service.home.list()
		this.ctx.helper.success({
			res
		});
	}
	async delete(){
		const { ctx,service } = this;
		let res = await service.home.delete()
		ctx.body = res;
	}
}

module.exports = HomeController;
