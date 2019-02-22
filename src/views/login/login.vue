<template>
  <div class="login-wrapper">
    <el-card class="card-wrap" shadow="hover" :body-style="{padding: '40px'}">
      <div class="login-title">登 录</div>
      <el-form
        ref="loginForm"
        :model="formData"
        :rules="formRule"
        label-position="left"
        label-width="70px"
      >
        <el-form-item label="机构" prop="OrganizationID">
          <el-select v-model="formData.OrganizationID" @change='select' placeholder="请选择">
            <el-option
              v-for="item in org"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="账 号" prop="account">
          <el-input type="text" v-model="formData.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密 码" prop="password">
          <el-input type="password" v-model="formData.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="login-btn-wrp">
          <el-button class="login-btn" type="primary" @click="Login" >登 录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script src="./login.js"></script>

<style lang="less">
@import url("./login.css");
</style>