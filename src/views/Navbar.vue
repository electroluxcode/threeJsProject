<template>
  <div class="navbar  "  @click="toggle()">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container "
      @toggleClick="toggleSideBar"
    />

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <template v-if="device !== 'mobile'">
        <search id="header-search" class="right-menu-item" />

        <error-log class="errLog-container right-menu-item hover-effect" />

        <screenfull id="screenfull" class="right-menu-item hover-effect" />

        <el-tooltip content="Global Size" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip>
      </template>

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/apartmentArea">
            <el-dropdown-item>去到3d界面</el-dropdown-item>
          </router-link>
          <router-link to="/backstageManage/buildlist">
            <el-dropdown-item>去到2d界面</el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a
            target="_blank"
            href="https://panjiachen.github.io/vue-element-admin-site/#/"
          >
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- <button @click="consoleMsg">sidebar11111111111111</button> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";
import ErrorLog from "@/components/ErrorLog";
import Screenfull from "@/components/Screenfull";
import SizeSelect from "@/components/SizeSelect";
import Search from "@/components/HeaderSearch";

export default {
  data() {
    return {
      // sidebar:'',
      // avatar:'',
      // device:''
    };
  },
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    SizeSelect,
    Search,
  },
  mounted() {
    //   this.sidebar={
    //     "opened": true,
    //     "withoutAnimation": false
    //   }
    // this.avatar="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
    // this.device="desktop"
  },
  computed: {
    ...mapGetters(["sidebar", "avatar", "device"]),
  },
  methods: {
    consoleMsg() {
      console.log(this.sidebar, "sidebar");
      console.log(this.avatar, "avatar");
      console.log(this.device, "device");
    },
    toggle(){
      if(window.innerWidth<700){
        var sidebarEl = document.querySelector(".sidebarThree");
        sidebarEl.classList.toggle("move_right");
      }

      
    },
    toggleSideBar() {
      
    
        
        // document.querySelector(".sidebarThree").style.cssText="height:100% !important"
        // sidebarEl.style.top = "0px";
        // sidebarEl.style.left = "-100px !important";
        // document.querySelector(".sidebar").style.cssText =
        //   "display:block;position:fixed;height:100vh !important";
      if(window.innerWidth<700){
        console.log(window.innerWidth)
        this.$store.dispatch("app/toggleSideBar");
        console.log(this.$store.state.app.sidebar)
        var sidebarEl = document.querySelector(".sidebarThree");
         sidebarEl.classList.toggle("move_right");
         
      }
     
      
   
    },
    async logout() {
      // await this.$store.dispatch("user/logout");
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
// @-webkit-keyframes move_right {
//   from {
//     opacity: 0;
//     margin-left:-140px
//   }
//   to {
//     opacity: 1;
//     // -webkit-transform: translateX(10px);
//     // transform: translateX(10px);
//     margin-left:0px
//   }
// }
// @keyframes move_right {
//   from {
//     opacity: 0;
//     margin-left:-140px
//   }
//   to {
//     opacity: 1;
//     // -webkit-transform: translateX(160px);
//     // transform: translateX(160px);
//     margin-left:-0px
//   }
// }

// .move_right {
//   -webkit-animation-name: move_right;
//   animation-name: move_right;
//   -webkit-animation-duration: 1s;
//   animation-duration: 1 s;
//   -webkit-animation-iteration-count: 1;
//   animation-iteration-count: 1;
//   -webkit-animation-fill-mode: forwards;
//   animation-fill-mode: forwards;
// }

.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  display: block !important;
  padding-top: 0rem !important;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          margin-bottom: 20px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
