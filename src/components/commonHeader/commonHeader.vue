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

<script >
export default {
    name: "commonHeader",
    created(){
        
    },
    data(){
        return{
            roleList:[
                '退出'
            ],
            userRole:''
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

<style lang="less">
.common-header-wrapper {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #EAEAEA;
  box-shadow: 0px 1px 10px 1px #EAEAEA;
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
.user_icon{
  height: 40px;width: 40px;margin-right: 15px
}
.info-banner{
  width:200px;height:100%
}
.info-banner-left{
  position: relative;
  width:250px;
  height:100%;
  border-right:1px solid #EAEAEA;
}
.sys-icon{
  position: absolute;
  width: 50px;
  height: 50px;
  left: 100px;
  top:15px;
}
.l-icon{
  position: absolute;
  width: 25px;
  height: 35px;
  right: 15px;
  top:25px;
}
</style>