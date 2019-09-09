<template>
  <div class="side-bar-wrapper" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <el-aside class="index-aside" :width="isSideBarExpand?'65px':'150px'">
      <el-menu
        class="aside-menu"
        :collapse="isSideBarExpand"
        ref="sideBar"
        :default-active="onRoutes"
        text-color="#a5a5a5"
        active-text-color="#00c1de"
        background-color="#414549"
        unique-opened
        menu-trigger="click"
        :collapse-transition="collapseTransition"
      >
        <template v-for="(item) in menuList">
          <el-menu-item
            v-if="item.title&&!item.list"
            :index="item.route"
            :key="item.route"
            @click="barHref(item.route)"
          >
            <icon-svg :icon-class="onRoutes===item.route?item.icon+'_active':item.icon"/>
            <span class="title" style="margin-left:3px;margin-bottom:10px">{{item.title}}</span>
          </el-menu-item>
          <el-submenu
            v-if="item.title&&item.list"
            :index="item.route"
            :key="item.route"
            :show-timeout="0"
            :hide-timeout="0"
          >
            <template slot="title">
              <div>
                <icon-svg :icon-class="item.list.includes(onRoutes)?item.icon+'_active':item.icon"/>
                <span slot="title" style="margin-left:3px">{{item.title}}</span>
              </div>
            </template>
            <el-menu-item
              v-for="(subItem,i) in item.list"
              :key="i"
              :index="subItem.route"
              @click="barHref(subItem.route)"
            >
              <icon-svg :icon-class="subItem.icon"/>
              <span slot="title" style="margin-left:3px">{{ subItem.title }}</span>
            </el-menu-item>
          </el-submenu>
        </template>
 
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
import page from "@/configFile/pageConfig";
 
export default {
  name: "sideBar",
  created() {
    this.getCachePage();
  },
  data() {
    return {
      isCollapse: false,
      isSideBarExpand: true,
      collapseTransition: false,
      menuList: []
    };
  },
  methods: {
    async getCachePage() {
      this.menuList = this.creatMenu(page);
    },
    /* 
    保存被打开的侧边栏的状态
    */
    onMouseEnter() {
      this.isSideBarExpand = false;
      let menuRoute = "";
      this.menuList.forEach(x => {
        if (x.list && x.list.length > 0) {
          if (
            x.list.find(y => {
              return y.route === this.onRoutes;
            })
          ) {
            menuRoute = x.route;
          }
        }
      });
      if (menuRoute) this.$refs.sideBar.open(menuRoute);
    },
    onMouseLeave() {
      this.isSideBarExpand = true;
    },
    showSideBar() {
      this.isCollapse = !this.isCollapse;
    },
   
    creatMenu(list) {
      var menuList = [];
      list.forEach(s => {
        let menu = {
          title: s.meta.title,
          icon: s.url.replace("/", ""),
          index: s.url.replace("/", ""),
          route: s.url,
          list:
            s.children && s.children.length > 0
              ? this.creatMenu(s.children)
              : undefined
        };
        menuList.push(menu);
      });
      return menuList;
    },
    barHref(s) {
      this.$router.push({ path: s });
    }
  },
  computed: {
    onRoutes() {
      this.$store.dispatch("updateCurrentRoute", this.$route.meta.title);
      return this.$route.path;
    },
    
  }
};
</script>

<style lang="less">
.side-bar-wrapper {
  height: 100%;
  z-index: 20;
}

.side-bar-wrapper .index-aside {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 20;
  // padding-top: 20px;
  background: #414549;
  -webkit-transition: width 0.3s;
  transition: width 0.3s;
  .el-menu {
    border-right: none;
    .el-menu-item {
      padding-left: 20px !important;
    }
  }
}
.side-bar-wrapper .index-aside .aside-menu {
  height: 100%;
}
.side-bar-wrapper .index-aside .aside-menu .nav-icon {
  width: 20px;
  height: 20px;
}
.side-bar-wrapper .index-aside .aside-menu .home-icon {
  background: url("/static/image/home.svg") no-repeat center center;
  -webkit-background-size: contain;
  background-size: contain;
}
.side-bar-wrapper .index-aside .aside-menu .list-icon {
  background: url("/static/image/list.svg") no-repeat center center;
  -webkit-background-size: contain;
  background-size: contain;
}
.side-bar-wrapper .index-aside .aside-menu .setting-icon {
  background: url("/static/image/setting.svg") no-repeat center center;
  -webkit-background-size: contain;
  background-size: contain;
}
.side-bar-wrapper .index-aside .aside-menu .is-active .home-icon {
  background: url("/static/image/home_ac.svg") no-repeat center center;
  -webkit-background-size: contain;
  background-size: contain;
}
.side-bar-wrapper .index-aside .aside-menu .is-active .setting-icon {
  background: url("/static/image/setting_ac.svg") no-repeat center center;
  -webkit-background-size: contain;
  background-size: contain;
}
.side-bar-wrapper .index-aside .el-menu {
  overflow: hidden;
}
</style>