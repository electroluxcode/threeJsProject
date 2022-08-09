<template>
  <div class="Userlist">
    <el-dialog
      title="信息修改"
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
        <el-form-item :label="$t('FunnelList.buildId')">
          <el-input v-model="formLabelAlign.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item :label="$t('FunnelList.age')">
          <el-input v-model="formLabelAlign.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item :label="$t('FunnelList.count')">
          <el-input v-model="formLabelAlign.value"></el-input>
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
      <el-table-column align="left" prop="operate" :label="$t('FunnelList.operate')">
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
import { funnelchartlist } from "@/requestApi/city";
import { alterFunnel } from "@/requestApi/backManage";
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
        { prop: "buildingdetailId", name: this.$t('FunnelList.buildId') },
        { prop: "name", name: this.$t('FunnelList.age') },
        { prop: "value", name: this.$t('FunnelList.count') },
      ],
      labelPosition: "right",
      formLabelAlign: {
        id: 0,
        name: 0,
        value: 0,
      },
    };
  },
  mounted() {
    this.funnelchartlistMed();
  },
  methods: {
    funnelchartlistMed() {
      funnelchartlist().then((res) => {
        console.log(res);
        this.tableData = res.data.funnel;
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogVisible = true;
      this.objectId = row.id;
      this.formLabelAlign = { ...this.tableData[index] };
    },
    ensureMed() {
      let options = {
        id: this.objectId,
        ...this.formLabelAlign,
      };
      alterFunnel(options).then((res) => {
        if (res.data.errorno == 0) {
          this.$message("修改成功");
          this.dialogVisible = false;
          this.funnelchartlistMed();
        }
      });
    },
  },
};
</script>

<style lang="scss"></style>
