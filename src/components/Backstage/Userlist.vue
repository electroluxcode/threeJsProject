<template>
  <div class="Userlist">
    <el-input
      :placeholder="$t('Userlist.inputContent')"
      v-model="input2"
      style="width: 350px"
      @change="searchUserInfoMed"
    >
      <template slot="append">
        <el-button slot="append" icon="el-icon-search"></el-button
      ></template>
    </el-input>
    <el-button type="text" @click="dialogVisible = true" class="dialog_btn"
      >{{$t('Userlist.addUser')}}</el-button
    >

    <el-dialog
      :title="$t('Userlist.newUser')"
      :visible.sync="dialogVisible"
      width="50%"
      :show-close="false"
      :close-on-click-modal="false"
      @close="closeDialog"
    >
      <el-input v-model="iptUsername" :placeholder="$t('Userlist.inputUser')"></el-input>
      <el-input
        v-model="password"
        :placeholder="$t('Userlist.inputPassword')"
        type="password"
        style="margin: 20px 0 20px 0"
      ></el-input>
      <el-input
        v-model="again_password"
        :placeholder="$t('Userlist.ensurePassword')"
        type="password"
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">{{$t('Userlist.cancel')}}</el-button>
        <el-button type="primary" @click="registerUserMed">{{$t('Userlist.ensureBtn')}} </el-button>
      </span>
    </el-dialog>
    <el-table :data="tableData" style="padding-top: 30px" v-show="!notFound">
      <el-table-column prop="id" label="Id"> </el-table-column>
      <el-table-column prop="username" :label="$t('Userlist.name')"> </el-table-column>
      <el-table-column prop="password" :label="$t('Userlist.password')"> </el-table-column>
      <el-table-column prop="type" :label="$t('Userlist.role')"></el-table-column>
      <el-table-column align="left" prop="operate" :label="$t('Userlist.operate')">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-table :data="[]" style="padding-top: 30px" v-show="notFound">
 <el-table-column prop="id" label="Id"> </el-table-column>
      <el-table-column prop="username" :label="$t('Userlist.name')"> </el-table-column>
      <el-table-column prop="password" :label="$t('Userlist.password')"> </el-table-column>
      <el-table-column prop="type" :label="$t('Userlist.role')"></el-table-column>
      <el-table-column align="left" prop="operate" :label="$t('Userlist.operate')">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  getUserInfo,
  registerUser,
  deleteUser,
  searchUserInfo,
} from "@/requestApi/mainPage";
export default {
  data() {
    return {
      input2: "",
      iptUsername: "",
      password: "",
      again_password: "",
      dialogVisible: false,
      tableData: [],
      notFound: false,
    };
  },
  mounted() {
    this.getUserInfoMed();
  },
  methods: {
    closeDialog() {
      this.iptUsername = "";
      this.password = "";
      this.again_password = "";
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteUser(row.id).then((res) => {
            if (res.data.errorno == 0) {
              this.$message("删除成功");
              this.getUserInfoMed();
            }
          });
        })
        .catch(() => {});
    },
    getUserInfoMed() {
      getUserInfo().then((res) => {
        let option = [];
        option = res.data.userinfo;
        option.forEach((res) => {
          if (res.type == 1) {
            res.type = this.$t('Userlist.admin');
          } else {
            res.type = this.$t('Userlist.user');
          }
          res.password = res.password.substring(0, 1) + "********";
        });
        this.tableData = option;
      });
    },
    registerUserMed() {
      if (
        this.iptUsername &&
        this.password === this.again_password &&
        this.password &&
        this.again_password
      ) {
        let options = {
          username: this.iptUsername,
          password: this.again_password,
        };
        registerUser(options).then((res) => {
          if (res.data.errorno === 0) {
            this.$message("添加用户成功");
            this.dialogVisible = false;
            this.getUserInfoMed();
          }
        });
      } else {
        this.$message({
          message: "输入用户名密码不能为空且确保两次输入的密码一致",
          type: "warning",
        });
      }
    },
    deleteUserMed() {},
    searchUserInfoMed() {
      let option = {
        username: this.input2,
      };
      searchUserInfo(option).then((res) => {
        if (res.data.userinfo.length > 0) {
          let option = [];
          option = res.data.userinfo;
          option.forEach((res) => {
            if (res.type == 1) {
              res.type = "超级管理员";
            } else {
              res.type = "普通用户";
            }
            res.password = res.password.substring(0, 1) + "********";
          });
          this.tableData = option;
          this.notFound = false;
        } else {
          this.notFound = true;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.Userlist {
  .dialog_btn {
    width: 90px;
    height: 40px;
    display: inline-block;
    color: white;
    font-size: 15px;
    background-color: rgb(80, 99, 160);
    text-align: center;
    margin-left: 40px;
  }
}
</style>
