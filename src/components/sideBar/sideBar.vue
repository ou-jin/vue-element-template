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
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
import page from '@/configFile/pageConfig'
export default {
    name: "sideBar",
    created(){
        this.menuList=this.creatMenu(page)
        console.log(this.fcn)
    },
    data() {
        return {
            isCollapse: false,
            collapseTransition: false,
            menuList: []
        }
    },
    methods: {
        showSideBar() {
            this.isCollapse = !this.isCollapse
        },
        menuChange(index) {
        },
        creatMenu(list){
            var menuList = []
            list.forEach((s)=>{
                let menu = {
                    'title':s.meta.title,
                    icon: s.url.replace('/', ''),
                    index: s.url.replace('/', ''),
                    route: s.url,
                    list: s.children?this.creatMenu(s.children):undefined
                }
                menuList.push(menu)
            })
            return menuList
        },
        barHref(s){
           if( this.fcn.isURL(s)){
            this.$router.push({name:'web',params:{'outSideUrl':s}})
           }else{
               this.$router.push({path:s})
           }
        }
    },
    computed: {
        onRoutes() {
            this.$store.dispatch('updateCurrentRoute', this.$route.meta.title)
            return this.$route.path;
        },
    }
}
</script>

<style>
.side-bar-wrapper {
  height: 100%;
}
.side-bar-wrapper .index-aside {
  height: 100%;
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