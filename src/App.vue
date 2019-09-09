<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang='less'>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
// 下拉框重写
.el-dropdown-menu__item {
  min-width: 100px;
}
.el-dropdown{
  color:#ffffff;
}
.el-dropdown-menu {
  background: #202020 !important;
  border: #202020 !important;
}
.el-dropdown-menu__item {
  color: rgba(144, 161, 172, 1);
}
.el-dropdown-menu__item:hover {
  background: #21a0a6 !important;
  color: #ffffff !important;
}
.el-select-dropdown__item.selected {
  color: #ffffff !important;
}
.el-popper[x-placement^="bottom"] .popper__arrow {
  border-bottom-color: #202020;
}
.popper__arrow::after {
  // top:0px !important;
  border-bottom-color: #202020 !important;
  border-top-color: #202020 !important;
}
</style>
