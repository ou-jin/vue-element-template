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
        menu-trigger="click"
        :collapse-transition="collapseTransition"
        @select="menuChange"
      >
        <template v-for="(item) in menuList">
          <el-menu-item
            v-if="item.title&&!item.list"
            :index="item.route"
            :key="item.route"
            style="height:80px"
            @click="barHref(item.route)"
          >
            <!-- <i class="nav-icon h-icon" :class="item.icon"></i> -->
            <icon-svg :icon-class="item.icon"/>
            <!-- <icon-svg icon-class="bianji" /> -->
            <span class="title" style="margin-left:30px">{{item.title}}</span>
          </el-menu-item>

          <el-submenu   v-if="item.title&&item.list" :index="item.route" :key="item.route" :show-timeout="0" :hide-timeout="0">
            <template slot="title">
              <icon-svg :icon-class="item.icon"/>
              <span slot="title" style="margin-left:30px">{{item.title}}</span>
            </template>
            <el-menu-item
              v-for="(subItem,i) in item.list"
              :key="i"
              :index="subItem.route"
              @click="barHref(subItem.route)"
            >
              <icon-svg :icon-class="subItem.icon"/>
              <span slot="title" style="margin-left:30px">{{ subItem.title }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
        <!-- <template v-if="item.subs && item.subs.length">
          <el-submenu :index="item.index" :key="item.index" :show-timeout="0" :hide-timeout="0">
            <template slot="title">
              <i class="nav-icon h-icon" :class="item.icon"></i>
              <span slot="title">&nbsp;{{item.title}}</span>
            </template>
            <el-menu-item
              v-for="(subItem,i) in item.subs"
              :key="i"
              :index="subItem.index"
            >{{ subItem.title }}</el-menu-item>
          </el-submenu>
        </template>-->
      </el-menu>
    </el-aside>
  </div>
</template>

<script src="./sideBar.js"></script>

<style lang="less">
@import url("./sideBar.css");
</style>