module.exports = {
    success:function({res=null,msg='请求成功'}) {
        // this是helper对象，在其中可以调用其他的helper方法
        // this.ctx =>context对象
        // this.app =>application对象
        this.ctx.body = {
            code:200,
            data:res,
            msg
        }
        this.ctx.status = 200;
    }
}
