// 该对象用于通用模板渲染之组件的方法模板类
// 类的方法内部如果含有this，它默认指向类的实例,通过强绑定转移其this作用域
// convertToCamelCase方法用于拼接出不同表格或表单名
class fcnTemplate {
    // 获取数据，需要分页
    async getData(obt) {
        // 请求接口拿到数据
        const d = await this.http[obt.fcn](obt.obj)
        // 表格赋值
        this[this.fcn.convertToCamelCase(obt.type, 'tableOpt')].tableData = d.resultValue.items
        // 给分页信息赋值
        let pageination = Object.assign({}, d.resultValue)
        delete pageination.items
        this[this.fcn.convertToCamelCase(obt.type, 'tableOpt')].paginationOpt = pageination
    }
    // 获取数据，不需要分页
    async getDataNopagina(obt) {
        const d = await this.http[obt.fcn](obt.obj)
        this[this.fcn.convertToCamelCase(obt.type, 'tableOpt')].tableData = d.resultValue
    }
    //编辑打开
    edit(obt) {
        this[this.fcn.convertToCamelCase(obt.type, 'formOpt')].formObj.formParam = Object.assign({}, this[this.fcn.convertToCamelCase(obt.type, 'tableOpt')].tableData[obt.index])
        Object.assign(this[this.fcn.convertToCamelCase(obt.type, 'formOpt')], { "status": 'edit', "index": obt.index, "show": true })
    }
    //新增打开
    add(type) {
        console.log(this.fcn.convertToCamelCase(type, 'formOpt'))
        this[this.fcn.convertToCamelCase(type, 'formOpt')].formObj.formParam = {}
        Object.assign(this[this.fcn.convertToCamelCase(type, 'formOpt')], { 'show': true, 'status': 'add' })
    }
    //提交表单
    async submit(obt) {
        let execute = obt.addfcn
        let pd = this[this.fcn.convertToCamelCase(obt.type, 'formOpt')].formObj.formParam
        if (obt.obj !== undefined) pd = Object.assign(pd, obt.obj)
        if (this[this.fcn.convertToCamelCase(obt.type, 'formOpt')].status === 'edit') execute = obt.editfcn
        const d = await this.http[execute](pd)
        if (d.isSuccess){
            if(obt.type==='second'){
                this.getDataNopagina(obt.obj)
            }else{
                this.getData()
            }
        }
        this.$message(d.message);
        this[this.fcn.convertToCamelCase(obt.type, 'formOpt')].show = false
    }
    //删除
    async del(obt) {
        console.log(this.fcn.convertToCamelCase(obt.type, 'tableOpt'))
        let pd = this[this.fcn.convertToCamelCase(obt.type, 'tableOpt')].tableData[obt.index]
        if (obt.obj !== undefined) pd = Object.assign(pd, obt.obj)
        const d = await this.http[obt.fcn](pd)
        if (d.isSuccess) this['getData']
        this.$message(d.message);
    }
    //事件执行 （主要用于触发后台事件并刷新页面）
    async event(obt) {
        let pd = this[this.fcn.convertToCamelCase(obt.type, 'tableOpt')].tableData[obt.index]
        if (obt.obj !== undefined) pd = Object.assign(pd, obt.obj)
        const d = await this.http[obt.fcn](pd)
        if (d.isSuccess) this[obt.callback](obt.obj)
        this.$message(d.message);
    }
}
export default fcnTemplate