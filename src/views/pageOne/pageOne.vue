<template>
  <div>
    <div style="width:1000px">
      <BasicTable :opt="obt"></BasicTable>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log('protoApi===')
    console.log(this.api)
  },
  data() {
    return {
      obt: {
        pd: [
          {
            label: "字典1",
            prop: "item1",
            sort: true,
            fix: true,
            width: "200"
          },
          {
            label: "字典2",
            prop: "item2",
            sort: false,
            fix: "right",
            width: "200",
            type: "butGroup",
            butList: [
              { text: "提交", fcn: "submit" },
              { text: "取消", type: "danger", fcn: "cancel" }
            ]
          },
          { label: "字典3", prop: "item3", sort: true, width: "100" },
          {
            label: "字典4",
            prop: "item4",
            type: "switch",
            width: "100",
            fcn: "switchFcn"
          },
          {
            label: "字典5",
            prop: "item5",
            type: "button",
            width: "200",
            fcn: "clickFcn"
          },
          {
            label: "字典6",
            prop: "item6",
            type: "input",
            width: "100",
            fcn: "inputFcn"
          },
          {
            label: "字典7",
            prop: "item7",
            type: "checkbox",
            width: "100",
            fcn: "checkFcn"
          }
        ],
        data: [
          {
            item1: "123",
            item2: "123",
            item3: "123",
            item4: true,
            item5: "123",
            item6: "123",
            item7: true
          },
          {
            item1: "123",
            item2: "123",
            item3: "123",
            item4: false,
            item5: "123",
            item6: "123",
            item7: false
          },
          {
            item1: "123",
            item2: "123",
            item3: "123",
            item4: true,
            item5: "123",
            item6: "123",
            item7: true
          },
          {
            item1: "123",
            item2: "123",
            item3: "123",
            item4: false,
            item5: "123",
            item6: "123",
            item7: false
          },
          {
            item1: "123",
            item2: "123",
            item3: "123",
            item4: true,
            item5: "123",
            item6: "123",
            item7: true
          }
        ]
      }
    };
  },
  methods: {
    event(s, type) {
      this.$message("哇,你竟然触发了" + type + "事件");
      console.log(type);
      console.log(s);
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