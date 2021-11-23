<template>
  <el-form ref="form" :model="form" :rules="rules">
    <el-row>
      <el-col :span="8">
        <el-form-item label="是否纳入负面行为" prop="ifPunish">
          <el-select
            size="medium"
            v-model="form.ifPunish"
            placeholder="请选择"
            @change="handleChange"
            :disabled="disabled"
          >
            <el-option
              v-for="item in ifPunishOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8" v-if="form.ifPunish == '是'">
        <el-form-item label="负面行为认定" prop="confirmationBehavior">
          <el-select
            size="medium"
            v-model="form.confirmationBehavior"
            @change="handleChange"
            placeholder="请选择"
            :disabled="disabled"
          >
            <el-option
              v-for="item in confirmationBehaviorOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8" v-if="form.ifPunish == '是'">
        <el-form-item label="是否上报集团" prop="ifReportGroup">
          <el-select
            size="medium"
            v-model="form.ifReportGroup"
            placeholder="请选择"
            :disabled="disabled"
          >
            <el-option
              v-for="item in ifReportGroupOption"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-table :data="tableData" height="330" v-loading="loading">
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column
        property="punishT"
        label="处罚措施"
        width="150"
      ></el-table-column>
      <el-table-column
        property="policyGist"
        label="处罚依据"
        width="200"
      ></el-table-column>
      <el-table-column label="是否执行" width="100">
        <template slot-scope="scope">
          <el-checkbox
            v-model="scope.row.ifPolicy"
            :checked="scope.row.ifPolicy == 'true'"
            :disabled="disabled"
            @change="handleCheckbox(scope.row)"
          ></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column property="policyDetail" label="处罚明细" width="300">
        <template slot-scope="{ row, row: { detailFlag } }">
          <template v-if="detailFlag == 1">
            <div class="detail-box">
              <span class="detail-prefix">扣</span>
              <el-input
                type="number"
                size="mini"
                :disabled="!row.ifPolicy || disabled"
                v-model="row.policy"
              ></el-input>
              <span class="detail-text">分</span>
            </div>
          </template>
          <template v-if="detailFlag == 2">
            <el-select
              :disabled="!row.ifPolicy || disabled"
              size="mini"
              v-model="row.policy"
              placeholder="请选择"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template>
          <template v-if="detailFlag == 3">
            <div class="detail-box">
              <el-select
                :disabled="!row.ifPolicy || disabled"
                size="mini"
                v-model="row.policy"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in yearOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <span class="detail-middle">年内 扣</span>
              <el-input
                :disabled="!row.ifPolicy || disabled"
                v-model="row.secondPolicy"
                size="mini"
              ></el-input>
              <span class="detail-text">分</span>
            </div>
          </template>
          <template v-if="detailFlag == 4">
            <div class="detail-box">
              <span class="detail-prefix">取消</span>
              <el-input
                :disabled="!row.ifPolicy || disabled"
                v-model="row.policy"
                size="mini"
              ></el-input>
              <span class="detail-text">份额</span>
            </div>
          </template>
          <template v-if="detailFlag == 5">
            见下方冻结合同列表
          </template>
          <template v-if="detailFlag == 6">
            见下方供应商禁用
          </template>

          <template v-if="detailFlag == 7">
            <div class="detail-box">
              <span class="detail-prefix">扣</span>
              <el-input
                type="number"
                size="mini"
                :disabled="!row.ifPolicy || disabled"
                v-model="row.policy"
              ></el-input>
              <span class="detail-text">分</span>
            </div>
          </template>
        </template>
      </el-table-column>
      <el-table-column property="detail" label="依据详情"></el-table-column>
    </el-table>
    <el-row>
      <el-form-item label="处罚说明" prop="funishState">
        <el-input
          type="textarea"
          :disabled="disabled"
          v-model="form.funishState"
        />
      </el-form-item>
    </el-row>

    <div v-show="six">
      <div class="btns" v-if="!disabled">
        <el-button
          size="mini"
          type="primary"
          icon="el-icon-plus"
          plain
          @click="handleAdd"
          >行新增</el-button
        >
        <!-- <el-button size="mini" type="primary" icon="el-icon-copy-document" plain @click="handleCopy">行复制</el-button> -->
        <el-button
          size="mini"
          type="danger"
          icon="el-icon-close"
          plain
          @click="handleDelete"
          >行删除</el-button
        >
      </div>

      <el-table
        v-show="showTable"
        :class="{ notDouble: warningTable }"
        :data="vendorTableList"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" v-if="!disabled"></el-table-column>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="name" label="供应商名称">
          <template slot-scope="scope">
            <div v-if="disabled">{{ scope.row.supplierName }}</div>
            <el-input
              v-else
              class="cs-supplier-name"
              size="mini"
              @focus="setWarningTable(false)"
              @input="handleBanInput"
              v-model="scope.row.supplierName"
              @keyup.enter.native="
                handleProjectInput(scope.row.supplierName, scope.$index)
              "
            >
              <el-button
                @click.stop="
                  handleProjectInput(scope.row.supplierName, scope.$index)
                "
                slot="append"
                icon="el-icon-search"
              ></el-button>
            </el-input>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="禁用类型" width="170">
          <template v-slot="{ row }">
            <el-select @change="onDisableType(row)" size="mini" v-model="row.disableTypeName" placeholder="请选择">
              <el-option
                v-for="item in typeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="禁用品类">
          <template v-slot="{ row }">
            <el-input :disabled='row.disableTypeName === "全品类禁用"' @focus="getProductlog(row)" v-model="row.disableCategoryName" size="mini">
              <el-button
                :disabled='row.disableTypeName === "全品类禁用"'
                @click="getProductlog(row)"
                slot="append"
                icon="el-icon-search"
              ></el-button>
            </el-input>
          </template>
        </el-table-column>
        <el-table-column label="受限时间（年）">
          <template slot-scope="scope">
            <div v-if="disabled">{{ scope.row.year }}</div>
            <el-input
              v-else
              @blur="handleYearBlur"
              @focus="setWarningTable(false)"
              @input="handleYearinput(scope.row, $event)"
              size="mini"
              min="0"
              v-model="scope.row.year"
            ></el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="选择禁用供应商" append-to-body :visible.sync="dialog">
      <el-table
        :data="computedVendorTableList"
        @row-dblclick="handleSure"
        highlight-current-row
        @current-change="handleCurrentTable"
      >
        <el-table-column prop="supplierCd" label="供应商编码">
        </el-table-column>
        <el-table-column prop="supplierName" label="供应商名称">
        </el-table-column>
      </el-table>
      <div style="text-align: center; margin-top: 10px;">
        <el-button @click="handleSure" type="primary" size="mini"
          >确定</el-button
        >
        <el-button @click="dialog = false" type="primary" size="mini"
          >取消</el-button
        >
      </div>
    </el-dialog>

    <ProductSelect
      :mtlcat='mtlCatName4'
      v-if="productVisible"
      :productVisible.sync="productVisible"
      @onProductSelect='onProductSelect'
    />
  </el-form>
</template>

<script>
import { measures, punishDetails, documentDetails } from "@/api/complaint.js";
import {
  mapState as mapStateComplaint,
  mapMutations,
} from "@/store/helper/complaint.js";
import { mapState } from "vuex";
import ProductSelect from "./productSelect.vue";

const year = new Date().getFullYear();
const yearOptions = Array.from({ length: 50 }, (_, index) => {
  let value = year + index;
  return {
    lable: value,
    value,
  };
});

export default {
  props: {
    disabled: {
      type: Boolean,
    },
  },
  data() {
    return {
      form: {
        ifPunish: "",
        confirmationBehavior: "",
        ifReportGroup: "",
        funishState: "",
      },
      rules: {
        ifPunish: [
          {
            required: true,
            message: "请选择是否纳入负面行为",
            trigger: "change",
          },
        ],
        confirmationBehavior: [
          {
            required: true,
            message: "请选择负面行为认定",
            trigger: "change",
          },
        ],
        ifReportGroup: [
          {
            required: true,
            message: "请选择是否上报集团",
            trigger: "change",
          },
        ],
        funishState: [
          {
            required: true,
            message: "请填写处罚说明",
            trigger: "change",
          },
        ],
      },

      ifPunishOption: [
        {
          lable: "是",
          value: "是",
        },
        {
          lable: "否",
          value: "否",
        },
      ],

      confirmationBehaviorOption: [
        {
          lable: "一般行为",
          value: "一般行为",
        },
        {
          lable: "严重负面行为",
          value: "严重负面行为",
        },
        {
          lable: "特别严重负面行为",
          value: "特别严重负面行为",
        },
      ],
      ifReportGroupOption: [
        {
          lable: "是",
          value: "是",
        },
        {
          lable: "否",
          value: "否",
        },
      ],
      tableData: [],
      loading: false,
      mapifPunish: {
        是: "Y",
        否: "N",
      },
      mapconfirmationBehavior: {
        一般行为: 1,
        严重负面行为: 2,
        特别严重负面行为: 3,
      },
      transfromBehavior: {
        1: "一般行为",
        2: "严重负面行为",
        3: "特别严重负面行为",
      },
      mapifReportGroup: {
        是: "Y",
        否: "N",
      },
      options: [
        {
          lable: "是",
          value: "是",
        },
        {
          lable: "否",
          value: "否",
        },
      ],
      typeOptions: [
        {
          lable: "全品类禁用",
          value: "全品类禁用",
        },
        {
          lable: "产品大类禁用",
          value: "产品大类禁用",
        },
        {
          lable: "产品中类禁用",
          value: "产品中类禁用",
        },
        {
          lable: "产品小类禁用",
          value: "产品小类禁用",
        },
        {
          lable: "产品禁用",
          value: "产品禁用",
        },
        {
          lable: "细化产品禁用",
          value: "细化产品禁用",
        },
      ],
      yearOptions,
      six: false,
      // origin: [],
      uid: 1,
      vendorTableList: [],
      selectTable: [],
      dialog: false,
      hasbillId: {},
      filterName: "",
      selectItem: {},
      selectIndex: "",
      selectArr: [],
      banIndex: "",
      productVisible: false,
      currentRow: {},
      mtlCatName4: ''
    };
  },
  components: {
    ProductSelect,
  },
  watch: {
    complaintUser(val) {
      console.log("here");
      this.getPunishDetails(val.id);
    },
  },
  created() {
    this.vendorTableList = this.restart();
    this.getTable();
  },
  mounted() {
    if (this.applyStatus == 6) {
      console.log('here')
      this.getPunishDetails(this.complaintUser.id);
    }
  },
  computed: {
    ...mapState({
      applyStatus: (state) => state.complaint.applyStatus,
      products: (state) => state.complaint.products,
    }),
    ...mapStateComplaint(["complaintUser", "warningTable"]),
    computedVendorTableList() {
      return this.selectTable.filter((item) => {
        return !this.hasbillId[item.supplierName + item.supplierCd];
      });
    },
    showTable() {
      if (this.disabled) {
        return (
          this.six &&
          this.vendorTableList.filter((item) => item.supplierName).length
        );
      }
      return this.six;
    },
  },
  methods: {
    ...mapMutations(["setWarningTable"]),
    restart() {
      let { products } = this;
      console.log(products, 'products')
      if (products.length) {
        return products.map((product) => {
          let [productCd, productName] = product.split(':')
          return {
            rowId: "",
            supplierCd: "",
            supplierName: "",
            disableTypeName: "产品禁用",
            disableCategoryCd: productCd,
            disableCategoryName: productName,
            mtlCatCode4: productCd,
            mtlCatName4: productName,
            year: "",
            billId: "",
            unique: "",
            uid: this.uid++,
          };
        });
      } else {
        return [
          {
            rowId: "",
            supplierCd: "",
            supplierName: "",
            year: "",
            billId: "",
            unique: "",
            disableCategoryCd: "",
            disableCategoryName: "",
            disableTypeName: "",
            uid: this.uid++,
          },
        ];
      }
    },
    handleAdd() {
      let tableList = [...this.vendorTableList];
      tableList.push({
        rowId: "",
        supplierCd: "",
        supplierName: "",
        year: "",
        billId: "",
        unique: "",
        uid: this.uid++,
      });
      this.vendorTableList = tableList;
    },
    handleCopy() {},
    handleDelete() {
      if (!this.selectArr.length)
        return this.$message.warning("请选择需要删除的行！");
      let deleteIndex = [];
      this.selectArr.forEach((select) => {
        let index = this.vendorTableList.findIndex(
          (item) => item.uid == select.uid
        );
        deleteIndex.push(index + 1);
      });
      this.$confirm(
        `您确定删除序号为 ${deleteIndex.join(",")} 的数据吗!`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(() => {
          let tableList = [...this.vendorTableList];
          this.selectArr.map((select) => {
            let index = tableList.findIndex((item) => {
              if (item.uid == select.uid) {
                return true;
              }
            });

            tableList.splice(index, 1);
          });

          if (tableList.length) {
            this.vendorTableList = tableList;
          } else {
            this.vendorTableList = this.restart();
          }
          this.deleteArr = this.selectArr.map((item) => item.uid);
          this.resethasbillId();
        })
        .catch(() => {});
    },
    handleSelectionChange(item) {
      this.selectArr = item;
    },
    async getPunishDetails(billId) {
      let {
        data: {
          punishDtlTbl,
          funishState,
          ifPunish,
          confirmationBehavior,
          ifReportGroup,
        },
      } = await punishDetails({ billId });
      this.form.funishState = funishState;

      if (ifPunish) {
        this.form.ifPunish = ifPunish == "Y" ? "是" : "否";
      }
      if (confirmationBehavior) {
        this.form.confirmationBehavior = this.transfromBehavior[
          confirmationBehavior
        ];
      }
      if (ifReportGroup) {
        this.form.ifReportGroup = ifReportGroup == "Y" ? "是" : "否";
      }

      this.initialBanVendor(punishDtlTbl);
      if (this.disabled) {
        this.tableData = punishDtlTbl.filter(
          (item) => item.ifPolicy != "false"
        );
      } else {
        this.tableData = punishDtlTbl;
      }
    },
    initialBanVendor(data) {
      data.forEach((item) => {
        if (item.detailFlag == 6 && item.ifPolicy) {
          this.six = true;

          this.vendorTableList = item.policy.split(";").map((item) => {
            let obj = {};
            [obj.supplierName, obj.supplierCd, obj.year] = item.split(",");
            return obj;
          });
        }
      });
    },
    handleQuery() {
      let { ifPunish, confirmationBehavior } = this.form;
      let obj = {};
      obj.ifPunish = this.mapifPunish[ifPunish];
      obj.confirmationBehavior = this.mapconfirmationBehavior[
        confirmationBehavior
      ];
      Object.keys(obj).forEach((key) => {
        let value = obj[key];
        if (!value) {
          delete obj[key];
        }
      });
      return obj;
    },
    handleChange() {
      let query = this.handleQuery(this.form);
      this.six = false;
      this.hasbillId = {};
      this.vendorTableList = this.restart();
      this.getData(query);
    },
    async getData(query) {
      this.loading = true;
      let {
        data: { punishDtl },
      } = await measures(query);
      this.loading = false;
      this.tableData = punishDtl.map((item) => {
        item.ifPolicy = false;
        item.policy = "";
        item.secondPolicy = "";
        return item;
      });
    },
    handleCheckbox({ detailFlag }) {
      let map = {
        6: "six",
      };
      let prop = map[detailFlag];
      this[prop] = !this[prop];
    },
    handleHeader() {},
    async getTable() {
      let { applyId } = this.$route.query;
      let { data } = await documentDetails(applyId);
      this.selectTable = data.supplier_dtl;
    },
    handleProjectInput(name, index) {
      this.filterName = name;
      this.selectIndex = index;
      this.dialog = true;
    },
    handleSure(item) {
      let { supplierName, supplierCd } = this.selectItem;

      this.vendorTableList[this.selectIndex].supplierName = supplierName;
      this.vendorTableList[this.selectIndex].supplierCd = supplierCd;

      this.resethasbillId();
      this.dialog = false;
    },
    resethasbillId() {
      let obj = {};
      this.vendorTableList.forEach((item) => {
        if (item.supplierName) {
          obj[item.supplierName + item.supplierCd] = true;
        }
      });
      this.hasbillId = obj;
    },
    handleBanInput() {
      this.resethasbillId();
    },
    handleCurrentTable(item) {
      if (item) {
        this.banIndex = item.rowId - 1;
      }

      this.selectItem = item;
    },
    handleYearinput(row, value) {
      value = value.replace(/[^\d\.]/g, ""); //清除“数字”和“.”以外的字符
      value = value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
      value = value
        .replace(".", "$#$")
        .replace(/\./g, "")
        .replace("$#$", ".");
      value = value.replace(/^(?:(\-)*(\d+))?\.(\d).*$/, "$1$2.$3"); //只能输入两个小数
      if (value.indexOf(".") == 0) {
        value = `0${value}`;
      }
      if (value.indexOf(".") < 0 && value != "") {
        //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
        value = parseFloat(value);
      }

      row.year = value;
    },
    handleYearBlur({ target: { value } }) {
      if (value == 0) {
        this.$message.warning("受限年限至少为 0.1 年");
      }
    },
    getProductlog(row) {
      this.currentRow = row
      this.mtlCatName4 = row.mtlCatName4
      this.productVisible = true;
    },
    onProductSelect(product) {
      Object.assign(this.currentRow, product)
      this.handleRow(this.currentRow)
    },
    onDisableType(row) {
      this.handleRow(row)
    },
    handleRow(row) {
      let {currentRow} = this
      let {disableTypeName, mtlCatCode1, mtlCatCode2, mtlCatCode3, mtlCatCode4, mtlCatCode5, mtlCatName1, mtlCatName2, mtlCatName3, mtlCatName4, mtlCatName5,} = currentRow
      if (disableTypeName === "全品类禁用") {
        row.disableCategoryCd = ''
        row.disableCategoryName = ''
      } else if (disableTypeName === '产品大类禁用') {
        row.disableCategoryCd = mtlCatCode1
        row.disableCategoryName = mtlCatName1
      } else if (disableTypeName === '产品中类禁用') {
        row.disableCategoryCd = mtlCatCode2
        row.disableCategoryName = mtlCatName2
      } else if (disableTypeName === '产品小类禁用') {
        row.disableCategoryCd = mtlCatCode3
        row.disableCategoryName = mtlCatName3
      } else if (disableTypeName === '产品禁用') {
        row.disableCategoryCd = mtlCatCode4
        row.disableCategoryName = mtlCatName4
      } else if (disableTypeName === '细化产品禁用') {
        row.disableCategoryCd = mtlCatCode5
        row.disableCategoryName = mtlCatName5
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.detail-box {
  display: flex;
  align-items: center;
}
.detail-middle,
.detail-prefix,
.detail-text {
  white-space: nowrap;
}
.detail-prefix {
  margin-right: 4px;
}
.detail-middle {
  margin: 0 4px;
}
.detail-text {
  margin-left: 4px;
}
.cs-ban {
  display: flex;
  align-items: center;
}
/deep/ .el-input {
  width: auto;
  margin: 0 8px;
}
.btns {
  text-align: right;
}
// .cs-supplier-name {
//   width: 340px;
// }
.notDouble {
  border: 1px solid red;
}
/deep/ .el-button.is-disabled:hover {
  background-color: transparent;
}
</style>
