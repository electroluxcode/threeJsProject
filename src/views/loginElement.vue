<template>
  <div class="center">
    <el-form
      :model="form"
      status-icon
      :rules="rules"
      ref="form"
      label-width="100px"
      class="login-container"
    >
      <h3 class="login_title" style="margin-left: 30px">系统登陆</h3>
      <el-form-item label="用户名" label-width="80px" prop="username" class="username">
        <el-input
          type="input"
          v-model="form.username"
          auto-complete="off"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" label-width="80px" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          auto-complete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item class="login_submit">
        <el-button type="primary" @click="login" class="login_submit">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import Mock from 'mockjs'
// import {getMenu} from '../../api/data'

export default {
  name: "login_vue",
  mounted() {
    // setTimeout(() => {
    //    document.querySelector('.el-message-box').style.cssText="width:80% "
    //    document.querySelector('.el-message').style.cssText="display: fixed  ;position: absolute ;top: calc(30vh) ;width: 100px ;min-width: 300px ;"
    // }, 900);
    // this.$nextTick(()=>{
    //   document.querySelector('.el-message-box').style.cssText="width:80% "
    //    document.querySelector('.el-message').style.cssText="display: fixed  ;position: absolute ;top: calc(30vh) ;width: 100px ;min-width: 300px ;"
    // })
  },
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            message: "用户名长度不能小于3位",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      console.log(this.form);
      setTimeout(() => {
        document.querySelector(".el-message-box").style.cssText = "width:80%";
      }, 10);

      // document.querySelector('.el-message').style.cssText="display: fixed  ;position: absolute ;top: calc(30vh) ;width: 100px ;min-width: 300px ;"
      this.$confirm("登录？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 点击确定后我们请求login接口进行登录
          setTimeout(() => {
            document.querySelector(".el-message").style.cssText =
              "display: fixed  ;position: absolute ;top: calc(30vh) ;width: 100px ;min-width: 300px ;";
          }, 10);
          this.$message({
            type: "success",
            message: "登录成功",
          });
          this.$router.push({path:'./backstageManage/buildlist'})
        })
        .catch(() => {
          setTimeout(() => {
            document.querySelector(".el-message").style.cssText =
              "display: fixed  ;position: absolute ;top: calc(30vh) ;width: 100px ;min-width: 300px ;";
          }, 10);
          this.$message({
            type: "info",
            message: "已取消登录",
          });
        });
      // getMenu(this.form).then(({data:res})=>{
      //     console.log(res,'res')
      //     if(res.code===20000){
      //         this.$store.commit('clearMenu')
      //         this.$store.commit('setMenu',res.data.menu)
      //         this.$store.commit('setToken',res.data.token)
      //         this.$store.commit('addMenu',this.$router)
      //         this.$router.push({name:'home'})

      //     }else{
      //         this.$message.warning(res.data.message)
      //     }
      // })

      // const token =Mock.random.guid()
      // this.$store.commit('setToken',token)
      // this.$router.push({name:'home'})
    },
  },
};
</script>
<style lang="scss" scoped>
.login_title {
  padding: 10px;
}

.username {
  margin-bottom: 15px;
}

.username-line {
  display: inline;
  margin-left: 15%;
  margin-right: 10%;
  font-size: 14px;
  vertical-align: middle;
  line-height: 40px;
}

.center {
  position: absolute;
  left: 50%;
  top: 46%;
  transform: translate(-50%, -50%);
}
.login_submit {
  margin-left: -25px;
}
.login-container {
  border-radius: 15px;

  display: flex;

  flex-direction: column;
  margin-left: -10%;
  width: calc(98%);
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.username {
  margin-bottom: 15px;
}
::v-deep .el-button {
  background-color: red;
}
::v-deep .el-message-box {
  width: 80% !important;
}

::v-deep .el-message {
  display: fixed !important;
  position: absolute !important ;
  top: calc(30vh) !important;
  width: 100px !important;
  min-width: 300px !important;
}

.login-container {
  border-radius: 15px;
  background-clip: padding-box;

  width: calc(100%-10px);
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.center {
  position: none;
}
</style>
