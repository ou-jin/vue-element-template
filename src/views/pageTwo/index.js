import d from '../../../static/pageConfig/pageTwo'
export default {
    data: () => {
        return d
    },
    created() {
    },
    methods: {
        getData(obt) {
            this.tep.getData.call(this, { 'type': 'main', 'fcn': 'getdictypelist', 'obj': obt })
            // console.log(this.mainTableOpt.paginationOpt)
        },
        getDataNopagina(obt) {
            this.tep.getDataNopagina.call(this, { 'type': 'second', 'fcn': 'getdicitemlist', 'obj': obt })
        },
        // 上部表格行点击
        itemClick(i) {
            this.selectedOpt = i
            this.getDataNopagina(i)
        },
        secondSearch() {
            if (!this.selectedOpt.typeCode) {
                this.$message('请先选择字典项')
                return
            }
            this.getDataNopagina(Object.assign(this.selectedOpt, this.secondTableOpt.tableSearch.formParam))
        },
        add(str) {
            if (!this.selectedOpt.typeCode) {
                this.$message('请先选择字典项')
                return
            }
            this.tep.add.call(this, str)
        },
        edit(obt) {
            this.tep.edit.call(this, obt)
        },
        submit(obt) {
            this.tep.submit.call(this, Object.assign(obt, {'obj': {'typeCode': this.selectedOpt.typeCode}}))
        },
        del(obt) {
            this.tep.event.call(this, Object.assign(obt, { 'obj': {'typeCode': this.selectedOpt.typeCode}}))
        }
    }
}