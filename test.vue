<template>
  <div class="pre-evaluation-summary-content content">
    <el-table
      v-if="tableData.length > 0"
      v-loading="loading"
      border
      :data="tableData"
      :cell-style="handleStyleChange"
    >
      <el-table-column prop="firstColumn" label="供应商名称/专家名称" width="200" align="center"></el-table-column>
      <template v-for="item of supplierNameList">
        <el-table-column :key="item.supplierCd" :prop="item.supplierName" :label="item.supplierName" min-width="100" align="center">
          <template slot-scope="{row, $index}">
            <div v-if="$index == memberList.length + 1">
              <el-button
                v-if="queryData.isLeader == 'Y'"
                :disabled="queryData.isSpecificSubmit === 'Y'"
                size="mini"
                type="success"
                @click="editData = { ...row, explainNotice: '' };dialogVisible = true"
              >发起</el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleDetail(row)"
              >查看</el-button>
            </div>
            <div v-else-if="$index == memberList.length + 2">
              <el-radio-group v-if="queryData.isLeader == 'Y'" v-model="row[item.supplierName]">
                <el-radio label="Y">是</el-radio>
                <el-radio label="N">否</el-radio>
              </el-radio-group>
              <div v-else>{{ row[item.supplierName] == 'Y' ? '是' : '否' }}</div>
            </div>
            <div v-else-if="$index == memberList.length + 3">
              <el-input v-if="queryData.isLeader == 'Y'" v-model="row[item.supplierName]"></el-input>
              <div v-else>{{ row[item.supplierName] }}</div>
            </div>
            <div v-else>
              {{ row[item.supplierName] }}
            </div>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div v-if="queryData.isLeader == 'Y'" style="margin: 20px;padding: 0 100px;text-align: center">
      <el-button type="primary" :disabled="queryData.isSpecificSubmit === 'Y' || saveLoading" :loading="saveLoading" @click="handleBeforeSave('save')">保存</el-button>
      <el-button :disabled="queryData.isSpecificSubmit === 'Y'" @click="handleBeforeSave('submit')">提交</el-button>
    </div>
    <div v-else style="margin: 20px;padding: 0 100px;text-align: center">
      <el-button type="primary" :disabled="queryData.specificStatus === 'Y'" @click="handleConfirm()">确认无误</el-button>
    </div>
    <el-dialog :visible.sync="dialogVisible" title="" width="700px" @close="closeDialog">
      <div slot="title" style="line-height: 30px;height: 30px">{{ editData.supplierName }}</div>
      <el-form ref="editForm" inline size="small" :model="editData">
        <el-form-item label="澄清事项说明：" prop="explainNotice" style="width: 100%">
          <el-input v-model="editData.explainNotice" type="textarea" rows="4" style="width: 100%;" placeholder="请输入"></el-input>
        </el-form-item>
      </el-form>
      <div style="width: 100%;height: 70px; text-align: center; line-height: 50px;">
        发起后该供应商须在
        <el-form ref="input" inline size="small" :model="editData" style="display: inline-block;">
          <el-form-item
            :rules="rules"
            prop="timeLimit"
            style="width: 60px"
          >
            <el-input v-model="editData.timeLimit" size="small"></el-input>
          </el-form-item>
        </el-form>
        分钟内进行澄清，若未澄清视为放弃澄清。
      </div>
      <div class="center">
        <el-button type="primary" size="small" @click="handleInsert('first')">发起通知</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { expert_insert_first_explain, expert_confirm_summary, expert_save_summary, expert_specific_summary_list } from '@/api/expert'
  export default {
    filters: {
      judgeFilter(value) {
        switch (value) {
          case 'Y':
            return '是'
            break
          case 'N':
            return '否'
            break
          default:
            break
        }
      }
    },
    data() {
      var validateTime = (rule, value, callback) => {
        if (!/^\d+$/.test(value)) {
          callback(new Error('请输入正确格式的时间'))
        } else {
          callback()
        }
      }
      return {
        loading: false,
        tableData: [],
        queryData: {},
        editData: {},
        dialogVisible: false,
        rules: {
          required: true, validator: validateTime, trigger: ['change', 'blur']
        },
        supplierNameList: [],
        memberList: [],
        saveLoading: false
      }
    },
    computed: {
      userInfo() {
        return this.$store.getters.userInfo
      }
    },
    created() {
      const queryData = { ...JSON.parse(this.$route.query.data) }
      this.queryData = queryData
      this.getData()
    },
    methods: {
      getData() {
        const { billNo } = this.queryData
        expert_specific_summary_list({ projectNo: billNo }).then(res => {
          console.log(res.data, 'res.data')
          let tableData = res.data
          const supplierNameList = []
          const supplierNameListMap = {}

          // 获取供应商列和组员行名称编码this.supplierNameList，this.memberList
          tableData.forEach(({ supplierName, supplierCd, supplierId }) => {
            if (!supplierNameListMap[supplierName + supplierId]) {
              supplierNameListMap[supplierName + supplierId] = true
              supplierNameList.push({ supplierName, supplierCd, supplierId })
            }
          })

          this.supplierNameList = supplierNameList

          tableData.forEach((item, index) => {
            this.supplierNameList.forEach(it => {
              // 创建供应商列
              if (item.supplierName === it.supplierName) {
                item[it.supplierName] = item.score
                item.firstColumn = item.fullName
              }
            })
          })

          const tableData1 = JSON.parse(JSON.stringify(tableData))

          // 是同一组员的供应商合并一行，供应商赋值为分数，不是同一组员的供应商添加一行。
          const List = [tableData[0]]
          for (let i = 1; i < tableData.length; i++) {
            if (List.every(item => item.supplierName !== tableData[i].supplierName)) {
              List.push(tableData[i])
            }
          }
          console.log(List, 'list')

          tableData = List
          // 添加行
          const List2 = JSON.parse(JSON.stringify(tableData))
          for (let i = 0; i < 4; i++) {
            const row = { ...tableData[0] }
            if (i == 0) {
              row.firstColumn = '最终得分'
              const length = this.supplierNameList.length
              this.supplierNameList.forEach(item => {
                let sum = 0
                tableData1.forEach(table => {
                  if (item.supplierName == table.supplierName) {
                    sum += Number(table.score)
                  }
                })
                row[item.supplierName] = (sum / length).toFixed(2)
              })
            } else if (i == 1) {
              row.firstColumn = '发起澄清通知'
              this.supplierNameList.forEach(it => {
                tableData1.forEach(item => {
                  it.supplierName === item.supplierName && (row[it.supplierName] = item.finalScore)
                })
              })
            } else if (i == 2) {
              row.firstColumn = '是否废标'
              this.supplierNameList.forEach(it => {
                tableData1.forEach(item => {
                  it.supplierName === item.supplierName && (row[it.supplierName] = item.isAbolish)
                })
              })
            } else if (i == 3) {
              row.firstColumn = '废标原因'
              this.supplierNameList.forEach(it => {
                tableData1.forEach(item => {
                  it.supplierName === item.supplierName && (row[it.supplierName] = item.abolishReason)
                })
              })
            }
            List2.push(row)
          }
          this.tableData = List2
        })
      },
      handleStyleChange({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0 && (rowIndex === this.tableData.length - 4 || rowIndex === this.tableData.length - 1 || rowIndex === this.tableData.length - 2 || rowIndex === this.tableData.length - 3)) {
          return 'font-weight: 700;background: #f3f5f7;'
        }
      },
      handleBeforeSave(type) {
        const postDataArr = []

        const { supplierNameList, tableData } = this
        const tableLength = tableData.length
        const operatorTabledata = tableData.slice(tableLength - 4)

        supplierNameList.forEach(({ supplierName, supplierCd, supplierId }) => {
          const obj = { supplierName, supplierCd, supplierId }
          operatorTabledata.forEach((table, index) => {
            if (index == 0) {
              obj.finalScore = table[supplierName]
            }
            if (index == 2) {
              obj.isAbolish = table[supplierName]
            }
            if (index == 3) {
              obj.abolishReason = table[supplierName]
            }
          })
          postDataArr.push(obj)
        })

        type == 'submit' && this.handleSubmit(postDataArr)
        type == 'save' && this.handleSave(postDataArr)
      },
      handleSave(data) {
        const { billNo } = this.queryData
        const { userName, userId } = this.userInfo
        this.saveLoading = true
        expert_save_summary({ userName, userId, projectNo: billNo, type: '2', status: '50', supplierList: data }).then((res) => {
          console.log(res, 'res')
          this.$message.success('保存成功')
          this.getData()
          this.saveLoading = false
        })
      },
      handleConfirm(data) {
        expert_confirm_summary({ projectNo: this.queryData.billNo, userName: this.userInfo.userName, fullName: this.userInfo.realName, confirmType: '1' }).then(() => {
          this.$message.success('确认成功')
          this.queryData.specificStatus = 'Y'
          this.$router.push({ path: '/expert/detailed-evaluation-summary', query: { data: JSON.stringify(this.queryData) }})
        })
      },
      handleSubmit(data) {
        expert_save_summary({ projectNo: this.queryData.billNo, type: '2', status: '2', supplierList: data }).then(() => {
          this.$message.success('提交成功')
          this.queryData.isSpecificSubmit = 'Y'
          this.$router.push({ path: '/expert/detailed-evaluation-summary', query: { data: JSON.stringify(this.queryData) }})
          this.getData()
        })
      },
      closeDialog() {
        this.$refs.editForm.resetFields()
        this.$refs.input.resetFields()
        // this.$refs.editForm.clearValidate()
        this.dislogVisible = false
      },
      handleDetail(data) {
        this.$router.push({
          path: '/expert/clarify-list',
          query: {
            data: JSON.stringify(data)
          }
        })
      },
      // 只允许填写正整数
      handleInput(e) {
        // console.log(e, 'e')
        // const regx = /^\d+\.?\d+$/
        // e.target.value = regx.test(e.target.value)
      },
      handleInsert() {
        const data = {
          ...this.editData,
          status: '详评',
          projectNo: this.queryData.billNo
        }
        expert_insert_first_explain(data).then(() => {
          this.$message.success('保存成功')
        })
      }
    }
  }
</script>
<style lang='scss' scoped>
.content {
  padding: 20px
}
/deep/.el-form-item__content {
  width: 100%
}
/deep/.el-form-item {
  margin-right: 0
}
/deep/.el-table th {
  background: #f3f5f7;
}
</style>
