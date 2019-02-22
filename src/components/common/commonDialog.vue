<template>
  <el-dialog
    class="common_dialog"
    :top="obj.top"
    :title="obj.title"
    :visible.sync="obj.show"
    :width="obj.width"
    :before-close="()=>{$emit('close')}"
  >
    <CommonForm v-on="$listeners" v-bind="$attrs" :opt="obj.formObj"></CommonForm>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  props: {
    opt: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {},
  computed: {
    obj() {
      // 将父组件的数据过渡到子组件
      return this.opt;
    }
  }
};
</script>
<style  lang="scss" rel="stylesheet/scss" >
// 重写element ->dialog属性
.common_dialog {
  .el-dialog {
    .el-dialog__body {
      max-height: 800px;
      overflow-y: auto;
      padding: 30px 15%;
    }
  }
}
</style>