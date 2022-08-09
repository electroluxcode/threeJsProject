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
        <el-form-item :label="$t('PieList.name')">
          <el-input v-model="formLabelAlign.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item :label="$t('PieList.height')">
          <el-input v-model="formLabelAlign.height"></el-input>
        </el-form-item>
        <el-form-item :label="$t('PieList.floor')">
          <el-input v-model="formLabelAlign.floor"></el-input>
        </el-form-item>
        <el-form-item :label="$t('PieList.square')">
          <el-input v-model="formLabelAlign.square"></el-input>
        </el-form-item>
        <el-form-item :label="$t('PieList.maleCount')">
          <el-input v-model="formLabelAlign.malecount"></el-input>
        </el-form-item>
        <el-form-item :label="$t('PieList.femaleCount')">
          <el-input v-model="formLabelAlign.femalecount"></el-input>
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
      <el-table-column align="left" prop="operate" :label="$t('PieList.operate')">
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
import { buildingDetail } from "@/requestApi/city";
import { alterPie } from "@/requestApi/backManage";
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
        { prop: "name", name: this.$t('PieList.name') },
        { prop: "height", name: this.$t('PieList.height') },
        { prop: "floor", name:this.$t('PieList.floor') },
        { prop: "square", name: this.$t('PieList.square') },
        { prop: "malecount", name: this.$t('PieList.maleCount') },
        { prop: "femalecount", name: this.$t('PieList.femaleCount') },
      ],
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        height: "",
        floor: 0,
        square: "",
        malecount: 0,
        femalecount: 0,
      },
    };
  },
  mounted() {
    this.funnelchartlistMed();
  },
  methods: {
    funnelchartlistMed() {
      buildingDetail().then((res) => {
        console.log(res);
        this.tableData = res.data.detail;
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
      alterPie(options).then((res) => {
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
