<template>
  <div>
    <CommonTable
      :opt="mainTableOpt"
      @topSearch="()=>{this.getData(this.mainTableOpt.tableSearch.formParam)}"
      @nextPage="(s)=>{this.getData(Object.assign(this.mainTableOpt.paginationOpt),{'pageIndex':s})}"
      @prevPage="(s)=>{this.getData(Object.assign(this.mainTableOpt.paginationOpt,{'pageIndex':s}))}"
      @currentChange="(s)=>{this.getData(Object.assign(this.mainTableOpt.paginationOpt,{'pageIndex':s}))}"
      @sizeChange="(s)=>{this.getData(Object.assign(this.mainTableOpt.paginationOpt,{'pageSize':s}))}"
      @itemClick="itemClick"
    ></CommonTable>
    <CommonTable
      @add="add('second')"
      @edit="(index)=>{this.edit({'type':'second','index':index})}"
      @det="(i)=>{this.del({'index':i,'fcn':'deletedic','type':'second','callback':'getDataNopagina'})}"
      :opt="secondTableOpt"
      @bottomSearch="secondSearch"
    ></CommonTable>
    <CommonDialog
      @close="()=>{this.secondFormOpt.show = false}"
      @submit="submit({'type':'second','addfcn':'createdic','editfcn':'editdic'})"
      :opt="secondFormOpt"
    ></CommonDialog>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less">
@import url("./index.css");
</style>