<template>
  <div id="login">
    <div class="ms-login">
      <div class="ms-title">危化品后台管理系统</div>
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="userName">
          <el-input v-model="param.userName" placeholder="请输入用户名">
            <template #prepend>
              <!-- <el-button icon="el-icon-user"></el-button> -->
              <el-icon><avatar /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="param.password"
            @keyup.enter="submitForm()"
          >
            <template #prepend>
              <!-- <el-button icon="el-icon-lock"></el-button> -->
              <el-icon><lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <!-- <p class="login-tips">Tips : 用户名和密码随便填。</p> -->
      </el-form>
    </div>
  </div>
</template>
<script>
import API from "../../api/api_user";
export default {
  data() {
    return {
      param: {
        // userName: "",
        // password: "",
        userName: "",
        password: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  created() {},
  methods: {
    submitForm() {
      this.$refs.login.validate((val) => {
        if (!val) {
          return this.$message.error("请填写");
        } else {
          var loginFrom = new FormData();
          loginFrom.append("userName", this.param.userName.trim());
          loginFrom.append("password", this.param.password.trim());
          API.login(loginFrom).then((res) => {
            console.log(res);
          });
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
#login {
  position: relative;
  height: 100vh;
  background: url(../../assets/img/login-bg.jpg) no-repeat;
  background-size: 100% 100%;
  .ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    height: 250px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    margin: -190px 0 0 -175px;
    .ms-title {
      width: 100%;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      color: #fff;
      border-bottom: 1px solid #ddd;
    }
  }
  .ms-content {
    padding: 30px 30px;
  }
  .login-btn {
    text-align: center;
  }
  .login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
  }
  .el-button--primary {
    background-color: #384355 !important;
    border-color: #384355 !important;
  }
}
</style>
