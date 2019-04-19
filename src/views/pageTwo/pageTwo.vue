<template>
<div>
  <el-card>
  <el-form :inline="true"  class="row-flex-start">
  <el-form-item label="存入innerdb">
    <el-input v-model="saveStr" placeholder="存入innerdb"></el-input>
  </el-form-item>
    <el-form-item >
    <el-button @click="saveDb">存入</el-button>
  </el-form-item>
  </el-form>

   <el-form :inline="true"  class="row-flex-start">

    <el-form-item >
    <el-button @click="getDb">取出</el-button>
  </el-form-item>
   <el-form-item >
    {{dbStr}}
  </el-form-item>
  </el-form>
  </el-card>
</div>
</template>
<script>
export default {
  created() {
  },
  data(){
    return{
      saveStr:'',
      dbStr:'',
    }
  },
  methods: {
    getData(obt) {
      this.tep.getData.call(this, { type: "", fcn: "", obj: obt });
    },
    async saveDb() {
      const result = await this.db.pd.put({
        flagStr: "test1",
        testStr: this.saveStr
      });
    },
     async getDb() {
       const r = await this.db.pd.get("test1");
      this.dbStr = r.testStr
    },
    edit(obt) {
      this.tep.edit.call(this, obt);
    },
    submit(obt) {
      this.tep.submit.call(this, Object.assign(obt));
    }
  }
};
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