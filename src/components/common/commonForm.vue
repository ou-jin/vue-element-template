<template>
  <el-form
    :model="obj.formParam"
    :rules="obj.formRule"
    ref="commonForm"
    :label-width="obj.labelWidth"
    :inline="obj.inline"
    class="demo-form-inline"
    label-position='left'
  >
    <el-form-item :class="obj.inline?'inline':''" v-for="(item,i) in obj.formPage" :key="i" :label="item.label" :prop="item.prop">
      <el-input v-model="obj.formParam[item.prop]" v-if="item.type==='input'" :disabled="item.disabled" @input="submitEvent(item.fcn)"></el-input>
      <el-input v-model="obj.formParam[item.prop]" v-if="item.type==='textarea'" type="textarea" :disabled="item.disabled"></el-input>
      <el-select v-model="obj.formParam[item.prop]" placeholder="请选择" v-if="item.type==='select'" @change="submitEvent(item.fcn)" clearable>
        <el-option v-for="(it,i) in item.opt" :key="i" :label="it.label" :value="it.value"></el-option>
      </el-select>
      <el-checkbox-group v-model="obj.formParam[item.prop]" v-if="item.type==='checkbox'">
        <el-checkbox v-for="it in item.opt" :key="it.value" :label="it.value"></el-checkbox>
      </el-checkbox-group>
      <el-date-picker v-model="obj.formParam[item.prop]" type="date" placeholder="选择日期" v-if="item.type==='date'"></el-date-picker>
      <el-time-picker v-model="obj.formParam[item.prop]"  placeholder="选择时间" v-if="item.type==='time'"></el-time-picker>
    </el-form-item>
    <el-form-item v-if="obj.edit" :class="obj.inline?'inline':''">
        <el-button type="primary" v-for="(item,i) in obj.editOpt" :key='i' 
          @click="submitEvent(item.fcn)">{{item.text}}</el-button>
  </el-form-item>
  </el-form>
</template>
<script>
export default {
  created() {
  },
  props: {
    opt: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    obj() {
      // 将父组件的数据过渡到子组件
      return this.opt;
    }
  },
  data() {
    return {
    };
  },
  methods: {
    submitEvent(fcn){
      if(this.fcn.checkNull(fcn))this.$emit(fcn)
    }
  }
};
</script>
<style scope>
.inline{
    margin-top:10px;
}
</style>