import d from '../../../static/pageConfig/pageOne'
export default {
    data:()=>{
        return d
    },
    created() {
    },
    methods: {
        getData(obt) {
            this.tep.getData.call(this,  {'type':'','fcn':'','obj':obt})
        },
        edit(obt) {
            this.tep.edit.call(this, obt)
        },
        submit(obt){
            this.tep.submit.call(this, Object.assign(obt))
        }
    }
}