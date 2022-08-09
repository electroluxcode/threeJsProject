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
          <el-table-column align="left" prop="operate" :label="$t('Carlist.operate')">
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
      :show-close="false"
      :close-on-click-modal="false"
      @close="closeDialog"
    >
      <el-input
        v-model="carname"
        placeholder="请输入用户名"
        :disabled="true"
      ></el-input>
      <el-input v-model="iptvalue" style="margin: 20px 0 20px 0"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editInfoMed">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { citylist } from "@/requestApi/city";
import { alterTruck, alterCar, alterBus } from "@/requestApi/backManage";
export default {
  data() {
    return {
      activeName: "truck",
      paneList: [
        { label: this.$t('Carlist.truck'), name: "truck" },
        { label: this.$t('Carlist.car'), name: "car" },
        { label: this.$t('Carlist.bus'), name: "bus" },
      ],
      Column: [],
      truckColumn: [
        { prop: "id", name: "Id" },
        { prop: "name", name: this.$t('Carlist.carCount') },
        { prop: "kilmeters", name: "公里数(KM)" },
        { prop: "kilmeters", name: "车牌" },
        { prop: "kilmeters", name: "任务类型" },
         { prop: "kilmeters", name: "时间" },
         { prop: "kilmeters", name: "目标楼层" },
          { prop: "kilmeters", name: "目标车位" },
         { prop: "kilmeters", name: "状态" },
      ],
      carColumn: [
        { prop: "id", name: "Id" },
        { prop: "name", name:  this.$t('Carlist.carCount') },
        { prop: "license", name:  this.$t('Carlist.license') },
      ],
      busColumn: [
        { prop: "id", name: "Id" },
        { prop: "name", name:  this.$t('Carlist.carCount') },
        { prop: "starttime", name:this.$t('Carlist.startTime') },
      ],
      tableData: [],
      carArr: [],
      truckArr: [],
      busArr: [],
      dialogVisible: false,
      index: "0",
      carname: "",
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
        this.carArr = res.data.objectlist[0].Cars;
        this.truckArr = res.data.objectlist[0].Trucks;
        this.busArr = res.data.objectlist[0].Buses;
        if (this.index == 0) {
          this.tableData = this.truckArr;
        } else if (this.index == 1) {
          this.tableData = this.carArr;
        } else {
          this.tableData = this.busArr;
        }
      });
    },
    citylistMed() {
      citylist().then((res) => {
        this.carArr = res.data.objectlist[0].Cars;
        this.truckArr = res.data.objectlist[0].Trucks;
        this.busArr = res.data.objectlist[0].Buses;
        this.tableData = this.truckArr;
        this.Column = this.truckColumn;
      });
    },
    handleClick(tab) {
      this.index = tab._data.index;
      if (this.index == 0) {
        this.tableData = this.truckArr;
        this.Column = this.truckColumn;
      } else if (this.index == 1) {
        this.tableData = this.carArr;
        this.Column = this.carColumn;
      } else {
        this.tableData = this.busArr;
        this.Column = this.busColumn;
      }
    },
    handleEdit(index, data) {
      this.dialogVisible = true;
      this.carname = data.name;
      if (this.index == 0) {
        this.iptvalue = data.kilmeters;
        this.objectId = data.id;
      } else if (this.index == 1) {
        this.iptvalue = data.license;
        this.objectId = data.id;
      } else {
        this.iptvalue = data.starttime;
        this.objectId = data.id;
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
          kilmeters: this.iptvalue,
        };
        alterTruck(options).then((res) => {
          if (res.data.errorno == 0) {
            this.$message("修改成功");
            this.dialogVisible = false;
            this.citylistMed();
          }
        });
      } else if (this.index == 1) {
        let options = {
          id: this.objectId,
          license: this.iptvalue,
        };
        alterCar(options).then((res) => {
          if (res.data.errorno == 0) {
            this.$message("修改成功");
            this.dialogVisible = false;
            this.initInfoMed();
          }
        });
      } else {
        let options = {
          id: this.objectId,
          starttime: this.iptvalue,
        };
        alterBus(options).then((res) => {
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
