<template>
  <el-dialog class="product" title="品类选择" append-to-body v-if="productVisible" :visible.sync='visible'>
    <el-table v-loading='loading' :data="tableData" height="60vh" highlight-current-row @row-click='onRowClick' @row-dblclick='onSure'>
      <el-table-column type="index" label="序号">
        <template v-slot="{$index}">
          <span>{{(params.pageNum - 1) * params.pageSize + $index + 1}}</span>
        </template>
      </el-table-column>
      <el-table-column label="大类名称" prop="mtlCatName1" show-overflow-tooltip>
        <template v-slot:header>
          <div @click="handleHeader" class="scope-header">大类名称</div>
					<div class="dividing-line"></div>
          <el-input
            class="el-input"
            v-model="params.mtlCatName1"
            size="mini"
            clearable
            @keyup.native.enter="getProductTable(true)"
            placeholder="输入筛选条件"
          >
          </el-input>
        </template>
      </el-table-column>
      <el-table-column label="中类名称" prop="mtlCatName2" show-overflow-tooltip>
        <template v-slot:header>
          <div @click="handleHeader" class="scope-header">中类名称</div>
					<div class="dividing-line"></div>
          <el-input
            class="el-input"
            v-model="params.mtlCatName2"
            size="mini"
            clearable
            @keyup.native.enter="getProductTable(true)"
            placeholder="输入筛选条件"
          >
          </el-input>
        </template>
      </el-table-column>
      <el-table-column label="小类名称" prop="mtlCatName3" show-overflow-tooltip>
        <template v-slot:header>
          <div @click="handleHeader" class="scope-header">小类名称</div>
					<div class="dividing-line"></div>
          <el-input
            class="el-input"
            v-model="params.mtlCatName3"
            size="mini"
            clearable
            @keyup.native.enter="getProductTable(true)"
            placeholder="输入筛选条件"
          >
          </el-input>
        </template>
      </el-table-column>
      <el-table-column label="产品名称" prop="mtlCatName4" show-overflow-tooltip>
        <template v-slot:header>
          <div @click="handleHeader" class="scope-header">产品名称</div>
					<div class="dividing-line"></div>
          <el-input
            class="el-input"
            v-model="params.mtlCatName4"
            size="mini"
            clearable
            @keyup.native.enter="getProductTable(true)"
            placeholder="输入筛选条件"
          >
          </el-input>
        </template>
      </el-table-column>
      <el-table-column label="细化产品名称" prop="mtlCatName5" show-overflow-tooltip>
        <template v-slot:header>
          <div @click="handleHeader" class="scope-header">细化产品名称</div>
					<div class="dividing-line"></div>
          <el-input
            class="el-input"
            v-model="params.mtlCatName5"
            size="mini"
            clearable
            @keyup.native.enter="getProductTable(true)"
            placeholder="输入筛选条件"
          >
          </el-input>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      align='right'
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="params.pageNum"
      :page-sizes="[10, 20, 50]"
      :page-size.sync="params.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    <div class="center">
      <el-button type="primary" @click="onSure" size="mini">确定</el-button>
      <el-button @click="visible = false" type="primary" size="mini">关闭</el-button>
    </div>
  </el-dialog>
</template>

<script>
import {prodcutCatalog} from '@/api/complaint.js'

export default {
  name: 'product',
  props: {
    mtlcat: {
      type: String
    },
    productVisible: {
      type: Boolean
    }
  },
  data() {
    return {
      params: {
        pageSize: 10,
        pageNum: 1,
        mtlCatName1: '',
        mtlCatName2: '',
        mtlCatName3: '',
        mtlCatName4: this.mtlcat,
        mtlCatName5: ''
      },
      total: 0,
      tableData: [],
      selectRow: {},
      loading: false
    }
  },
  computed: {
    visible: {
      get() {
        return this.productVisible
      },
      set(val) {
        this.$emit('update:productVisible', val)
      }
    }
  },
  mounted() {

    this.getProductTable()
  },
  methods: {
    getProductTable(reset) {
      let {params} = this
      if (reset) {
        params.pageNum = 1
      }
      this.loading = true
      prodcutCatalog(params).then(res => {
        console.log(res, 'res')
        let {data: {list, total}} = res
        this.tableData = list
        this.total = total
      }).finally(() => {
        this.loading = false
      })
    },
    handleHeader() {},
    handleSizeChange(size) {
      this.params.pageSize = size
      this.getProductTable()
    },
    handleCurrentChange(num) {
      this.params.pageNum = num
      this.getProductTable()
    },
    onRowClick(row, column) {
      this.selectRow = row
    },
    onSure() {
      this.$emit('onProductSelect', this.selectRow)
      this.visible = false
    }
  }
}
</script>

<style scoped lang='scss'>
.center {
  text-align: center;
  margin-top: 4px;
}
</style>
<style lang='scss'>
.product .el-dialog {
  width: 70%;
  margin-top: 5vh !important;
}
</style>
