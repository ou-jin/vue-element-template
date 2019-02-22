<template>
  <div class="common-header-wrapper row-space-between">
    <div class='info-banner-left'>
      <img src="/static/image/titleIcon.svg" class="sys-icon">
      <img src="/static/image/list_side_bar.svg" class="l-icon" @click="showSideBar">
    </div>

     <div  class="row-flex-start info-banner">
      <img src="/static/image/user_img.png" class='user_icon' >
      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        {{userRole}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" >
        <el-dropdown-item v-for="(item,i) in roleList" :key=i  @click.native="roleChange(item)">{{item}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  </div>
</template>

<script src="./commonHeader.js"></script>

<style lang="less">
@import url("./commonHeader.css");
</style>