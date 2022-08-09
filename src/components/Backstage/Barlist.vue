<template>
  <div class="Userlist">
    <el-dialog
      title="新增用户"
      :visible.sync="dialogVisible"
      width="50%"
      :show-close="false"
      :close-on-click-modal="false"
    >
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item :label="$t('Barlist.moment')">
          <el-input v-model="formLabelAlign.date" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item :label="$t('Barlist.forecastLive')">
          <el-input v-model="formLabelAlign.forecastcount"></el-input>
        </el-form-item>
        <el-form-item :label="$t('Barlist.realLive')">
          <el-input v-model="formLabelAlign.realcount"></el-input>
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
      <el-table-column align="left" prop="operate" :label="$t('Barlist.operate')">
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
import { barchartlist } from "@/requestApi/city";
import { alterBar } from "@/requestApi/backManage";
export default {
  data() {
    return {
      input2: "",
      iptUsername: "",
      password: "",
      again_password: "",
      dialogVisible: false,
      tableData: [],
      rayColumn: [
        { prop: "id", name: "Id" },
        { prop: "date", name: this.$t('Barlist.moment') },
        { prop: "forecastcount", name: this.$t('Barlist.forecastLive') },
        { prop: "realcount", name: this.$t('Barlist.realLive') },
      ],
      labelPosition: "right",
      formLabelAlign: {
        date: "",
        forecastcount: 0,
        realcount: 0,
      },
      objectId: 0,
    };
  },
  mounted() {
    this.barchartlistMed();
  },
  methods: {
    barchartlistMed() {
      barchartlist().then((res) => {
        this.tableData = res.data.bar;
      });
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
      alterBar(options).then((res) => {
        if (res.data.errorno == 0) {
          this.$message("修改成功");
          this.dialogVisible = false;
          this.barchartlistMed();
        }
      });
    },
  },
};
</script>

<style lang="scss"></style>
