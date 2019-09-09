<template>
  <div class="common-header-wrapper row-space-between">
    <div class="info-banner-left row-flex-start">
      <img :src="logo" class="sys-icon">
      <span>vue通用脚手架</span>
    </div>
    <div class="row-flex-start info-banner">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          你好,{{userRole}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item,i) in roleList"
            :key="i"
            @click.native="roleChange(item)"
          >{{item}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import logo from '../../../static/image/vuejs.png'
import user_img from '../../../static/image/user_img.png'
import expant from '../../../static/image/list_side_bar.svg'
export default {
    name: "commonHeader",
    created(){
        
    },
    data(){
        return{
            logo:logo,
            expant:expant,
            user_img:user_img,
            roleList:[
                '退出'
            ],
            userRole:'超级管理员'
        }
    },
    methods: {
        Logout() {
            localStorage.clear();
            sessionStorage.clear();
            this.$router.push({path: '/login'})
        },
        showSideBar(){
            this.$store.dispatch('updateSideBarShow',!this.$store.state.sideBarShow)
        },
        roleChange(s){
            this.$router.push({path: '/login'})
        }
    }
}
</script>

<style>
.common-header-wrapper {
  width: 100%;
  height: 50px;
  background: #414549;
  color: #ffffff;
}
.common-header-wrapper .logo {
  width: 60px;
  height: 60px;
  vertical-align: middle;
  padding: 10px;
}
.common-header-wrapper .title {
  display: inline-block;
  vertical-align: middle;
  color: #666;
  line-height: 60px;
}
.common-header-wrapper .logout {
  font-size: 16px;
  color: #666666;
  line-height: 60px;
  margin-right: 20px;
}
.common-header-wrapper .logout-icon {
  width: 20px;
  height: 20px;
  background: url("/static/image/logout.svg") no-repeat center center;
  -webkit-background-size: contain;
  background-size: contain;
}
.user_icon {
  height: 40px;
  width: 40px;
  margin-right: 15px;
}
.info-banner {
  width: 200px;
  height: 100%;
}
.info-banner-left {
  width: 220px;
  height: 100%;
  font-size: 14px;
  margin-left: 10px;
  font-family: PingFangSC-Regular;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.sys-icon {
  width: 31px;
  height: 29px;
  margin-right: 10px;
}
.expand_icon{
  width:16px;
  height:14px;
  left: 240px;
  position: absolute;
}
.l-icon {
  position: absolute;
  width: 25px;
  height: 35px;
  right: 15px;
  top: 25px;
}
</style>