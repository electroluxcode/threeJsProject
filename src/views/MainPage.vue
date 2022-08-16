<template>
  <div class="edu-container-new">
    <div class="edu-content-new">
      <div class="lf">
        <div class="edu-map-new">
          <div class="layui-carousel" id="swiper">
            <div class="logo-area-new">
              <!-- <img src="/public/assets/images/logo.png" alt="" /> -->
              <img
                class="icon_img"
                src="https://www.sbznck.com/bitbug_favicon.ico"
                alt=""
              />
              <p class="title">世泊科技公司系统</p>
            </div>
            <div>
              <img
                src="/static/assets/images/swiper2x.png"
                class="title_img"
                style="width: 320px; height: 320px"
              />
            </div>
          </div>
        </div>
      </div>

      <form id="loginForm" name="loginForm" method="post">
        <input type="hidden" name="loginMethod" value="LoginToXk" />
        <div class="rt login-form-new">
          <h2>用户登录</h2>

          <p style="margin-bottom: 12px">&nbsp;&nbsp;</p>

          <div class="form-item-new">
            <span for="">账号</span>
            <input
              type="text"
              id="userAccount"
              name="userAccount"
              placeholder="请输入账号"
              v-model="username"
            />
          </div>
          <div class="form-item-new">
            <span for="">密码</span>
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              placeholder="请输入密码"
              v-model="password"
            />
          </div>

          <div class="form-item-new" style="margin-top: 5%">
            <span for="">验证码</span>
            <input
              type="text"
              id="code_input"
              value=""
              placeholder="请输入验证码"
              style="width: 60%; float: left"
            />
            <div
              id="v_container"
              style="
                width: 30%;
                float: right;
                height: 6%;
                margin-right: 30px;
                height: 30px;
              "
            >
              <vue-image @getIdentifyCode="getIdentifyCodes" />
            </div>
          </div>

          <div style="margin-top: 20%">
            <a
              class="password-text rt"
              href="view/findpwd/enteraccount.htmlx.htm"
              tppabs="http://125.216.100.10:2888/jsxsd/view/findpwd/enteraccount.htmlx"
              target="_blank"
              >忘记密码</a
            >
          </div>

          <a class="btn-login-new" id="my_button" @click="login()">登录</a>
          <div class="form-item"></div>
          <p class="login-cr">Copyright ©世泊科技公司</p>
          <input name="encoded" id="encoded" type="hidden" value="" />
        </div>
      </form>
      <!-- <button class="button-secondary pure-button" style="margin-top: 5%" onclick="day()">
        白天模式
      </button>
      <button class="button-success pure-button" style="margin-top: 5%" onclick="night()">
        黑夜模式
      </button> -->

      <!-- <button id="my_button">验证</button> -->
    </div>
  </div>
</template>

<script>
import VueImage from "@/components/verify/vueImageVerify.vue";
export default {
  name: "MainPage",

  data() {
    return {
      username: "",
      password: "",
      regUsername: "",
      regPassword: "",
      ensurePassword: "",
    };
  },
  components: { VueImage },
  mounted() {
    this.$i18n.locale = "zh-Tibetan";
    localStorage.setItem("languageSet", this.$i18n.locale);
    if(document.body.clientWidth<700){
      this.$router.push({path:'/login'})
    }
    // $('select').change(function(){
    //     $(this).css('color','#272727');
    //     $(this).css('font-weight','400');
    // });
  },
  methods: {
    login() {
      console.log(this.username, this.password);
      this.$confirm("是否登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "登录成功!",
          });
          this.$router.push({ path: "backstageManage/buildlist" });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "登录失败",
          });
        });
    },
    toCity() {
      this.userInfoMed();
      // this.$router.push("/apartmentArea");
    },
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
};
</script>

<style lang="scss" scoped>
.edu-container-new {
  background-color: #b0c4de;
}
.button-success,
.button-error,
.button-warning,
.button-secondary {
  color: white;
  border-radius: 4px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

.button-success {
  background: rgb(28, 184, 65); /* this is a green */
}

.button-error {
  background: rgb(202, 60, 60); /* this is a maroon */
}

.button-warning {
  background: rgb(223, 117, 20); /* this is an orange */
}

.button-secondary {
  background: rgb(66, 184, 221); /* this is a light blue */
}
.title_img {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 50px;
  margin-top: 90px;
}
.title {
  margin-top: -180px;
}
.icon_img {
  // 提高图片清晰度
  image-rendering: -moz-crisp-edges; /* Firefox */
  image-rendering: -o-crisp-edges; /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */

  position: relative;
  top: -80px;
  height: 30px;
  width: 30px;
}

//login的样式
@import url("http://at.alicdn.com/t/font_1437979_ce58zkmm23q.css");
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, Sans-serif, Verdana, Tahoma;
}
.lf {
  float: left;
}
.rt {
  float: right;
}
.edu-container {
  position: relative;
  width: 100%;
  height: 100vh;
}
.edu-container-new {
  position: relative;
  width: 100%;
  height: 100vh;
}

/*  ���ϿƼ���ѧ�����ϿƼ���ѧ����ѧԺ����ͼƬ�滻  */
.edu-container-new_hnkjdx {
  position: relative;
  width: 100%;
  height: 100vh;

  background-size: 100% 100%;
}

.edu-container-new_hnkjdxxxxy {
  position: relative;
  width: 100%;
  height: 100vh;

  background-size: 100% 100%;
}

.edu-content {
  position: relative;
  top: 50%;
  left: 50%;
  width: 1163px;
  height: 665px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.38);
  border-radius: 5px;
  transform: translate(-50%, -50%);
  padding: 69px 75px 102px 77px;
}
.edu-content-new {
  position: relative;
  top: 100px;
  left: 50%;
  width: 832px;
  height: 507px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-left: -416px;
}
.copyright {
  bottom: 75px;
  position: absolute;
  text-align: center;
  width: 100%;
  color: #272727;
  font-size: 14px;
}
.edu-logo {
  width: 182px;
  height: 54px;
  margin-bottom: 16px;
}
.edu-map {
  width: 358px;
  height: 320px;
}
.edu-map-new {
  width: 415px;
  height: 417px;
  border-radius: 8px 0 0 8px;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 29, 255, 0.19) 100%
  );
}

.edu-map-new .layui-carousel,
.edu-map-new .layui-carousel > div {
  border-radius: 8px 0 0 8px;
}

.login-form {
  width: 320px;
}
.login-form-new {
  width: 416px;
  height: 100%;
  padding: 24px 48px;
  box-sizing: border-box;
  position: relative;
}
.login-form > h2 {
  height: 45px;
  font-size: 32px;
  font-weight: 500;
  color: rgba(39, 39, 39, 1);
  line-height: 45px;
  margin-bottom: 12px;
}
.login-form-new > h2 {
  line-height: 36px;
  font-size: 24px;
  color: #272727;
  margin-bottom: 24px;
  font-weight: 600;
}
.login-form > p {
  height: 24px;
  font-size: 17px;
  font-weight: 500;
  color: rgba(93, 74, 106, 1);
  line-height: 24px;
  margin-bottom: 47px;
}
.form-item {
  margin-bottom: 32px;
}
.form-item > span {
  height: 18px;
  display: block;
  font-size: 14px;
  color: rgba(136, 136, 136, 1);
  line-height: 18px;
  margin-bottom: 10px;
}
.form-item > input[type="text"],
.form-item > input[type="password"] {
  width: 320px;
  height: 48px;
  background: rgba(239, 240, 244, 1);
  border-radius: 5px;
  color: #4f5362;
  font-size: 14px;
  outline: none;
  padding: 0 18px;
  border: 1px solid rgba(239, 240, 244, 1);
}
.form-item > input[type="text"]:focus,
.form-item > input[type="password"]:focus {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 9px 18px 0px rgba(168, 172, 185, 0.62);
  border-color: #fff;
}

input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  border: 1px solid #3b82ff;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  background: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: sub;
}
input[type="checkbox"]:after {
  content: "\2713";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(0, 168, 248, 1);
  color: #fff;
  text-align: center;
  line-height: 20px;
  -webkit-transition: all ease-in-out 300ms;
  -moz-transition: all ease-in-out 300ms;
  transition: all ease-in-out 300ms;
  opacity: 0;
}
input[type="checkbox"]:checked:after {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  opacity: 1;
}
#rememberPassword {
  margin-right: 10px;
}
.password-text {
  height: 18px;
  font-size: 14px;
  color: rgba(117, 117, 117, 1);
  line-height: 18px;
  position: relative;
  top: -2px;
  cursor: default;
}
p.login-cr {
  color: #c8c8c8;
  font-size: 14px;
  position: absolute;
  width: 100%;
  left: 0;
  text-align: center;
  bottom: 24px;
}
.btn-login {
  display: inline-block;
  width: 320px;
  height: 50px;
  margin-top: 22px;
  background: linear-gradient(96deg, rgba(0, 167, 247, 1) 0%, rgba(59, 130, 255, 1) 100%);
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
.btn-login-new {
  display: inline-block;
  width: 320px;
  height: 44px;
  margin-top: 22px;
  background: #3b82ff;
  border-radius: 2px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  line-height: 44px;
  cursor: pointer;
}
.edu-language {
  position: absolute;
  width: 100px;
  height: 48px;
  background: #e0eef7;
  border-radius: 0px 5px 0px 5px;
  top: 0;
  right: 0;
  color: #00abf9;
  font-size: 14px;
  line-height: 48px;
  text-align: center;
}
.edu-language > i {
  font-size: 10px;
  margin-left: 13px;
}
.edu-map-new .layui-carousel-ind ul {
  background-color: transparent;
}
.edu-map-new .layui-carousel-ind li {
  width: 16px;
  height: 6px;
  border-radius: 4px;
}
.form-item-new {
  position: relative;
}
.form-item-new > span {
  display: block;
  color: #272727;
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 6px;
  font-weight: 600;
  font-family: Source Han Sans CN Medium;
}
.form-item-new > input[type="text"],
.form-item-new > input[type="password"] {
  width: 320px;
  height: 40px;
  border-radius: 2px;
  border: 1px solid rgba(229, 229, 229, 1);
  padding: 0 10px;
  outline: none;
  margin-bottom: 12px;
}
.form-item-new > input[type="text"]:focus,
.form-item-new > input[type="password"]:focus {
  border-color: #3b82ff;
}
.form-item-new > input::placeholder {
  color: #c8c8c8;
}

.logo-area {
  position: absolute;
  top: 30px;
  left: 22%;
  color: #595757;
  text-align: center;
  margin-left: -50px;
}

.form-item-new > select {
  width: 320px;
  height: 40px;
  border-radius: 2px;
  border: 1px solid rgba(229, 229, 229, 1);
  font-family: SourceHanSansCN-Regular, SourceHanSansCN;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  padding: 0 10px;
  font-weight: 400;

  background-size: 12px 12px;
  margin-bottom: 12px;
}
.form-item-new > select:focus {
  border-color: #3b82ff;
}
.form-item-new input[type="checkbox"] {
  width: 15px;
  height: 15px;
}

.form-item-new .password-text {
  top: 2px;
  color: #272727;
}
.form-item-new .password-text.rt {
  color: #3b82ff;
}
.edu-map-new > .layui-carousel > div[carousel-item] {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 29, 255, 0.19) 100%
  );
}

.logo-area-new {
  position: absolute;
  z-index: 99;
  color: #595757;
  font-weight: 500;
}
.logo-area-new {
  padding: 30px 40px;
  width: 100%;
}

.logo-area-new > p {
  display: inline-block;
  vertical-align: middle;
  margin-left: 8px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 600;
}

</style>
