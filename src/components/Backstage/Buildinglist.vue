<template>
  <div class="Carlist">
    <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        :label="item.label"
        :name="item.name"
        v-for="item in paneList"
        :key="item.id"
      >
        <el-table
          :data="tableData"
          style="padding-top: 30px"
          :default-sort="{ prop: 'id' }"
        >
          <el-table-column
            :prop="item.prop"
            :label="item.name"
            v-for="item in Column"
            :key="item.id"
          >
          </el-table-column>
          <el-table-column align="left" prop="operate" :label="$t('BuildStatus.operate')">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >Edit</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      title="信息修改"
      :visible.sync="dialogVisible"
      width="50%"
      :close-on-click-modal="false"
      @close="closeDialog"
    >
      <div v-show="index == 0">
        <el-input
          v-model="buildingOptions.name"
          placeholder="请输入用户名"
          :disabled="true"
        ></el-input>
        <el-input
          v-model="buildingOptions.livecount"
          style="margin: 20px 0 20px 0"
        ></el-input>
        <el-input
          v-model="buildingOptions.floorcount"
          style="margin: 0px 0 20px 0"
        ></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editInfoMed">确 定</el-button>
        </span>
      </div>
      <div v-show="index == 1">
        <el-input
          v-model="basketballground.name"
          placeholder="请输入用户名"
          :disabled="true"
        ></el-input>
        <el-input
          v-model="basketballground.isempty"
          style="margin: 20px 0 20px 0"
        ></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editInfoMed">确 定</el-button>
        </span>
      </div>
      <div v-show="index == 2">
        <el-input
          v-model="parkingground.name"
          placeholder="请输入用户名"
          :disabled="true"
        ></el-input>
        <el-input
          v-model="parkingground.surplus"
          style="margin: 20px 0 20px 0"
        ></el-input>
        <el-input
          v-model="parkingground.status"
          style="margin: 0px 0 20px 0"
        ></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editInfoMed">确 定</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { citylist } from "@/requestApi/city";
import {
  alterBuilding,
  alterBasketabll,
  alterParking,
} from "@/requestApi/backManage";
export default {
  data() {
    return {
      activeName: "building",
      paneList: [
        { label: "测试", name: "building" },
        { label: "测试", name: "basketballGround" },
        { label: "测试", name: "parking" },
      ],
      Column: [],
      buildingColumn: [
        { prop: "id", name: "Id" },
        { prop: "name", name: "名称" },
        { prop: "livecount", name: "楼层" },
        { prop: "livecount", name: "状态" },
        { prop: "livecount", name: "入库时间" },
       
      ],
      basketballGroundColumn: [
        { prop: "id", name: "Id" },
        { prop: "name", name: this.$t('Buildinglist.basketball') },
        { prop: "isempty", name:this.$t('Buildinglist.isempty')},
      ],
      parkingColumn: [
        { prop: "id", name: "Id" },
        { prop: "name", name:  this.$t('Buildinglist.carpark') },
        { prop: "surpluscount", name:  this.$t('Buildinglist.surpluscount') },
        { prop: "status", name: this.$t('Buildinglist.status') },
      ],
      tableData: [],
      buildingArr: [],
      basketballArr: [],
      parkingArr: [],
      dialogVisible: false,
      index: "0",
      buildingOptions: {
        name: "",
        livecount: 0,
        floorcount: 0,
      },
      basketballground: {
        name: "",
        isempty: "是",
      },
      parkingground: {
        name: "",
        surplus: 0,
        status: "开启",
      },
      iptvalue: "",
      objectId: 0,
    };
  },
  mounted() {
    this.citylistMed();
  },
  methods: {
    initInfoMed() {
      citylist().then((res) => {
        console.log(res);
        this.buildingArr = res.data.objectlist[0].Buildings;
        this.basketballArr = res.data.objectlist[0].Basketballgrounds;
        this.parkingArr = res.data.objectlist[0].Parkings;
        if (this.index == 0) {
          this.tableData = this.buildingArr;
        } else if (this.index == 1) {
          this.tableData = this.basketballArr;
        } else {
          this.tableData = this.parkingArr;
        }
      });
    },
    citylistMed() {
      citylist().then((res) => {
        console.log(res);
        this.buildingArr = res.data.objectlist[0].Buildings;
        this.basketballArr = res.data.objectlist[0].Basketballgrounds;
        this.parkingArr = res.data.objectlist[0].Parkings;
        this.tableData = this.buildingArr;
        this.Column = this.buildingColumn;
      });
    },
    handleClick(tab) {
      this.index = tab._data.index;
      if (this.index == 0) {
        this.tableData = this.buildingArr;
        this.Column = this.buildingColumn;
      } else if (this.index == 1) {
        this.tableData = this.basketballArr;
        this.Column = this.basketballGroundColumn;
      } else {
        this.tableData = this.parkingArr;
        this.Column = this.parkingColumn;
      }
    },
    handleEdit(index, data) {
      console.log(data);
      this.dialogVisible = true;
      if (this.index == 0) {
        this.objectId = data.id;
        this.buildingOptions.name = data.name;
        this.buildingOptions.livecount = data.livecount;
        this.buildingOptions.floorcount = data.floorcount;
      } else if (this.index == 1) {
        this.objectId = data.id;
        this.basketballground.name = data.name;
        this.basketballground.isempty = data.isempty;
      } else {
        this.objectId = data.id;
        this.parkingground.name = data.name;
        this.parkingground.surplus = data.surpluscount;
        this.parkingground.status = data.status;
      }
    },
    closeDialog() {
      this.iptUsername = "";
      this.password = "";
      this.again_password = "";
    },
    editInfoMed() {
      if (this.index == 0) {
        let options = {
          id: this.objectId,
          livecount: this.buildingOptions.livecount,
          floorcount: this.buildingOptions.floorcount,
        };
        alterBuilding(options).then((res) => {
          if (res.data.errorno == 0) {
            this.$message("修改成功");
            this.dialogVisible = false;
            this.citylistMed();
          }
        });
      } else if (this.index == 1) {
        let options = {
          id: this.objectId,
          isempty: this.basketballground.isempty,
        };
        alterBasketabll(options).then((res) => {
          if (res.data.errorno == 0) {
            this.$message("修改成功");
            this.dialogVisible = false;
            this.initInfoMed();
          }
        });
      } else {
        let options = {
          id: this.objectId,
          surpluscount: this.parkingground.surplus,
          status: this.parkingground.status,
        };
        alterParking(options).then((res) => {
          if (res.data.errorno == 0) {
            this.$message("修改成功");
            this.dialogVisible = false;
            this.initInfoMed();
          }
        });
      }
    },
  },
};
</script>

<style></style>
