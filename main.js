// let data = {
// 	"responsecode": "1",
// 	"responsemessage": "",
// 	"routeFieldList": "",
// 	"resultlist": [{
// 			"tabid": "baseinfo",
// 			"tabname": "基本信息",
// 			"secondlist": [{
// 					"thirdlist": [{
// 							"itemvalue": "烽火通信科技股份有限公司",
// 							"itemname": "检测单位"
// 						},
// 						{
// 							"itemvalue": null,
// 							"itemname": "检测人"
// 						},
// 						{
// 							"itemvalue": "厂家自检",
// 							"itemname": "检测方式"
// 						},
// 						{
// 							"itemvalue": null,
// 							"itemname": "检测日期"
// 						},
// 						{
// 							"itemvalue": "物料dfd",
// 							"itemname": "送检产品"
// 						},
// 						{
// 							"itemvalue": "11",
// 							"itemname": "送检数量"
// 						},
// 						{
// 							"itemvalue": null,
// 							"itemname": "送检结果"
// 						},
// 						{
// 							"itemvalue": "QT221021040129",
// 							"itemname": "单据编号"
// 						},
// 						{
// 							"itemvalue": "2021-04-19烽火通信科技股份有限公司物料dfd厂家自检结果录入",
// 							"itemname": "单据名称"
// 						}
// 					],
// 					"title": "基本信息"
// 				},
// 				{
// 					"thirdlist": [{
// 							"itemvalue": "121",
// 							"itemname": "抽检串码"
// 						},
// 						{
// 							"standards": [
//                 {
// 									"itemvalue": [{
// 											"itemvalue": "含气量不能超过100%",
// 											"itemname": "检测标准"
// 										},
// 										{
// 											"itemvalue": "N",
// 											"itemname": "是否合格"
// 										},
// 										{
// 											"itemvalue": "443",
// 											"itemname": "质检数据"
// 										}
// 									],
// 									"itemname": "检测标准"
// 								},
// 								{
// 									"itemvalue": [{
// 											"itemvalue": "含气量不能超过100%",
// 											"itemname": "检测标准"
// 										},
// 										{
// 											"itemvalue": "N",
// 											"itemname": "是否合格"
// 										},
// 										{
// 											"itemvalue": "443",
// 											"itemname": "质检数据"
// 										}
// 									],
// 									"itemname": "检测标准"
// 								}
// 							]
// 						},
// 						{
// 							"itemvalue": "2021-04-19 00:00:00.0",
// 							"itemname": "检测日期"
// 						},
// 						{
// 							"itemvalue": null,
// 							"itemname": "抽检结果"
// 						},
// 						{
// 							"itemvalue": null,
// 							"itemname": "备注说明"
// 						}
// 					],
// 					"title": "明细清单"
// 				}
// 			],
// 			"type": "block"
// 		},
// 		{
// 			"tabid": "approvehistory",
// 			"tabname": "审批历史",
// 			"secondlist": "",
// 			"type": "block"
// 		},
// 		{
// 			"tabid": "attachment",
// 			"tabname": "附件",
// 			"r_object_id": "",
// 			"type": "list"
// 		}
// 	],
// 	"sys_status": "1"
// }

var minSubArrayLen = function (s, nums) {
  let n = nums.length
  let left = 0, right = 0
  let match = 0
  let windows = {}
  let resMax = Number.MAX_SAFE_INTEGER

  while(right < n) {
    let c1 = nums[right]
    windows[c1] = windows[c1] + 1 || 1
    match += c1
    right ++

    while(match >= s) {
      let c2 = nums[left]
      let sum = add(...Object.values(windows))
    }
  }

  return resMax == Number.MAX_SAFE_INTEGER ? 0 : resMax

  function add() {
    return [].reduce.call(arguments, function (a, b) {return a + b})
  }
}
