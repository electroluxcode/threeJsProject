<template>
  <el-container style="height: 100%" class="manage">
    <el-aside width="180">
      <el-menu
        background-color="rgb(0,21,41)"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="height: 100%"
        default-active="1_1"
        default-openeds="['1_1','2_1','3_1']"
        :router="true"
        @select="handleSelect"
      >
        <div class="user_box">
          <div class="username">{{ $t("menuTitle.title") }}</div>
          <div></div>
        </div>
        <el-submenu :index="item.id" v-for="item in menuList" :key="item.index">
          <template slot="title"
            ><i :class="item.icon"></i>{{ item.title }}</template
          >
          <el-menu-item
            :index="ele.index"
            v-for="ele in item.childrenlist"
            :key="ele.index"
            :route="ele.route"
          >
            <i :class="ele.inner_icon"></i>{{ ele.text }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
          <el-breadcrumb-item>{{ $t("menuTitle.index") }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ manage_name }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ list_name }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="lang_change">
          <div @click="changeLanguage('zh-Chinese')">
            {{ $t("language.zh") }}
          </div>
          <div @click="changeLanguage('zh-Tibetan')">
            {{ $t("language.en") }}
          </div>
        </div>
        <i
          class="el-icon-setting"
          style="font-size: 17px; position: absolute; right: 74px; top: 22px"
        ></i>
        <span
          style="font-size: 17px"
          class="usertext"
          @click="$router.push('/apartmentArea')"
          >{{ username }}</span
        >
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      username: "admin",
      manage_name: this.$t("menuTitle.userManage"),
      list_name: this.$t("menuTitle.userlist"),
      menuList: [
        {
          id: "1",
          title: this.$t("menuTitle.userManage"),
          icon: "el-icon-s-custom",
          childrenlist: [
            {
              index: "1_1",
              route: "/backstageManage/userlist",
              text: this.$t("menuTitle.userlist"),
              inner_icon: "el-icon-menu",
            },
          ],
        },
        {
          id: "2",
          title: this.$t("menuTitle.cityManage"),
          icon: "el-icon-location",
          childrenlist: [
            {
              index: "2_1",
              route: "/backstageManage/carlist",
              text: this.$t("menuList.carList"),
              inner_icon: "el-icon-truck",
            },
            {
              index: "2_2",
              route: "/backstageManage/carstay",
              text: this.$t("menuList.carTime"),
              inner_icon: "el-icon-monitor",
            },
            {
              index: "2_3",
              route: "/backstageManage/buildlist",
              text: this.$t("menuList.buildingList"),
              inner_icon: "el-icon-office-building",
            },
            {
              index: "2_4",
              route: "/backstageManage/buildstatus",
              text: this.$t("menuList.buildingStatus"),
              inner_icon: "el-icon-picture-outline-round",
            },
          ],
        },
        // {
        //   id: "3",
        //   title: this.$t("menuTitle.iconManage"),
        //   icon: "el-icon-s-custom",
        //   childrenlist: [
        //     {
        //       index: "3_1",
        //       route: "/backstageManage/raylist",
        //       text: this.$t("chartsList.rayChart"),
        //       inner_icon: "el-icon-view",
        //     },
        //     {
        //       index: "3_2",
        //       route: "/backstageManage/barlist",
        //       text: this.$t("chartsList.barChart"),
        //       inner_icon: "el-icon-pie-chart",
        //     },
        //     {
        //       index: "3_3",
        //       route: "/backstageManage/funnellist",
        //       text: this.$t("chartsList.funnelChart"),
        //       inner_icon: "el-icon-tickets",
        //     },
        //     {
        //       index: "3_4",
        //       route: "/backstageManage/pielist",
        //       text: this.$t("chartsList.pieChart"),
        //       inner_icon: "el-icon-data-board",
        //     },
        //   ],
        // },
      ],
    };
  },
  mounted() {},
  methods: {
    handleSelect(index) {
      this.menu_idx = index.substring(0, 1);
      this.menuList.forEach((res) => {
        if (res.id == this.menu_idx) {
          this.manage_name = res.title;
          res.childrenlist.forEach((ele) => {
            if (index == ele.index) {
              this.list_name = ele.text;
            }
          });
        }
      });
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("languageSet", this.$i18n.locale);
      location.reload();
    },
  },
};
</script>

<style lang="scss">
.manage {
  .el-header {
    background-color: rgb(0, 21, 41);
    color: rgb(255, 255, 255);
    line-height: 60px;
    height: 60px;
    display: flex;
    justify-content: space-between;
  }
  .el-aside {
    color: rgb(255, 255, 255);
  }
  .user_box .username:hover {
    color: #ffbbaa;
  }
  .user_box .username {
    color: rgb(226, 226, 226);
    padding: 20px;
    font-size: 25px;
    cursor: pointer;
  }
  .breadcrumb {
    line-height: 60px;
    .el-breadcrumb__inner.is-link {
      color: white;
    }
    .el-breadcrumb__inner {
      color: white;
    }
  }
  .usertext:hover {
    color: #ffbbaa;
    cursor: pointer;
  }
  .lang_change {
    display: flex;
    position: absolute;
    right: 100px;
    div {
      padding-right: 10px;
      font-size: 20px;
      cursor: pointer;
    }
    div:hover {
      color: #ffbbaa;
    }
  }
}
</style>
