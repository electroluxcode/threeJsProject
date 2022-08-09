<template>
  <div class="Userlist">
    <el-dialog
      title="信息修改"
      :visible.sync="dialogVisible"
      width="50%"
      :show-close="false"
      :close-on-click-modal="false"
      @close="closeDialog"
    >
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item label="时刻">
          <el-input v-model="formLabelAlign.date" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="AQI">
          <el-input v-model="formLabelAlign.aqi"></el-input>
        </el-form-item>
        <el-form-item label="PM2.5">
          <el-input v-model="formLabelAlign.pm2"></el-input>
        </el-form-item>
        <el-form-item label="PM10">
          <el-input v-model="formLabelAlign.pm10"></el-input>
        </el-form-item>
        <el-form-item label="CO">
          <el-input v-model="formLabelAlign.co"></el-input>
        </el-form-item>
        <el-form-item label="NO2">
          <el-input v-model="formLabelAlign.no2"></el-input>
        </el-form-item>
        <el-form-item label="SO2">
          <el-input v-model="formLabelAlign.so2"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="ensureMed">确 定</el-button>
      </span>
    </el-dialog>
    <el-table :data="tableData" style="padding-top: 30px">
      <el-table-column
        :prop="item.prop"
        :label="item.name"
        v-for="item in rayColumn"
        :key="item.id"
      >
      </el-table-column>
      <el-table-column align="left" prop="operate" label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { raychartlist } from "@/requestApi/city";
import { alterRay } from "@/requestApi/backManage";
export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [],
      rayColumn: [
        { prop: "id", name: "Id" },
        { prop: "date", name: "时刻" },
        { prop: "aqi", name: "AQI" },
        { prop: "pm2", name: "PM2.5" },
        { prop: "pm10", name: "PM10" },
        { prop: "co", name: "CO" },
        { prop: "no2", name: "NO2" },
        { prop: "so2", name: "SO2" },
      ],
      labelPosition: "right",
      formLabelAlign: {
        date: "",
        aqi: 0,
        pm2: 0,
        pm10: 0,
        co: 0,
        no2: 0,
        so2: 0,
      },
      objectId: 0,
    };
  },
  mounted() {
    this.raychartlistMed();
  },
  methods: {
    raychartlistMed() {
      raychartlist().then((res) => {
        console.log(res);
        this.tableData = res.data.ray;
      });
    },
    closeDialog() {
      this.iptUsername = "";
      this.password = "";
      this.again_password = "";
    },
    handleEdit(index, row) {
      this.dialogVisible = true;
      this.objectId = row.id;
      this.formLabelAlign = { ...this.tableData[index] };
    },
    ensureMed() {
      let options = {
        id: this.objectId,
        ...this.formLabelAlign,
      };
      alterRay(options).then((res) => {
        if (res.data.errorno == 0) {
          this.$message("修改成功");
          this.dialogVisible = false;
          this.raychartlistMed();
        }
      });
    },
  },
};
</script>

<style lang="scss"></style>
