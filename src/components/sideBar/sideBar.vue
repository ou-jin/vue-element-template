<template>
  <div class="side-bar-wrapper">
    <el-aside class="index-aside" :width="$store.state.sideBarShow?'64px':'250px'">
      <el-menu
        class="aside-menu"
        :collapse="$store.state.sideBarShow"
        ref="sideBar"
        :default-active="onRoutes"
        text-color="#666666"
        active-text-color="#17B3A3"
        background-color="#ffffff"
        unique-opened
        router
        menu-trigger="click"
        :collapse-transition="collapseTransition"
        @select='menuChange'
      >
        <template v-for="(item) in menuList">
            <el-menu-item
              v-if="item.title"
              :index="item.route"
              :key="item.route"
              style="height:80px"
            >
              <!-- <i class="nav-icon h-icon" :class="item.icon"></i> -->
              <icon-svg :icon-class="item.icon" />
              <!-- <icon-svg icon-class="bianji" /> -->
              <span class="title" style="margin-left:30px">{{item.title}}</span>
            </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script src="./sideBar.js"></script>

<style lang="less">
@import url("./sideBar.css");
</style>