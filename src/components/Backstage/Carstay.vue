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
        <el-form-item label="Id">
          <el-input v-model="formLabelAlign.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="name">
          <el-input v-model="formLabelAlign.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="Status">
          <el-input v-model="formLabelAlign.staytime"></el-input>
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
      <el-table-column align="center" prop="operate" :label="$t('Carstay.operate')">
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
import { carPark } from "@/requestApi/city";
import { alterCarpark } from "@/requestApi/backManage";
export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [],
      rayColumn: [
        { prop: "id", name: "Id" },
        { prop: "name", name:this.$t('Carstay.building') },
        { prop: "staytime", name: this.$t('Carstay.stayTime') },
      ],
      labelPosition: "right",
      formLabelAlign: {
        id: 0,
        name: "",
        staytime: 0,
      },
      objectId: 0,
    };
  },
  mounted() {
    this.raychartlistMed();
  },
  methods: {
    raychartlistMed() {
      carPark().then((res) => {
        this.tableData = res.data.park;
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
      alterCarpark(options).then((res) => {
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
