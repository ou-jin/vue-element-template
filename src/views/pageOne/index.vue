<template>
  <div>
    <CommonTable
      :opt="tableOpt"
      @search="()=>{this.getData(this.tableOpt.tableSearch.formParam)}"
      @nextPage="(s)=>{this.getData(Object.assign(this.tableOpt.paginationOpt),{'pageIndex':s})}"
      @prevPage="(s)=>{this.getData(Object.assign(this.tableOpt.paginationOpt,{'pageIndex':s}))}"
      @currentChange="(s)=>{this.getData(Object.assign(this.tableOpt.paginationOpt,{'pageIndex':s}))}"
      @sizeChange="(s)=>{this.getData(Object.assign(this.tableOpt.paginationOpt,{'pageSize':s}))}"
      @edit="(index)=>{this.edit({'type':'','index':index})}"
    ></CommonTable>
    <CommonDialog :opt="formOpt"  @submit="submit({'type':'','addfcn':'','editfcn':'editsysparameter'})" @close="()=>{this.formOpt.show = false}"></CommonDialog>
  </div>
</template>
<script src="./index.js"></script>
<style lang="less">
@import url("./index.css");
</style>