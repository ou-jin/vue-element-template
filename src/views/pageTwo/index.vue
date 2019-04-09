<template>
  <div>
  页面2
  </div>
</template>
<script>
export default {
  
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
</script>
<style lang="scss">
.index-wrapper {
  height: 100%;
}
.index-wrapper .el-header {
  padding: 0;
}
.index-wrapper .main-container {
  height: 100%;
}

</style>