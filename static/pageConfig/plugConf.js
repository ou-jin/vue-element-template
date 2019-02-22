let data ={
    mainTableOpt: {
        height: "300",
        pagination:true,
        itemFcn: 'itemClick',
        paginationOpt: {currentPage: 0,pageSize: 0,totalPages: 0,totalRecords: 0},
        edit:true,
        editOpt:{
            width:'300',
            list:[
                {text:'修改',fcn:'edit',type:"primary"},
                {text:'删除',fcn:'del',type:"danger"},
                {text:'停止',fcn:'stop',type:"warning"},
                {text:'重启',fcn:'restart',type:"primary"},
            ]
        },
        table: [
            { label: '插件组UID', prop: 'serviceUID' ,sort:true},
            { label: '插件组名', prop: 'serviceName',sort:true },
            { label: '运行标志', prop: 'ifEnable',sort:true },
        ],
        tableSearch: {
            inline:true,
            formParam: {},
            edit: true,
            editOpt: [{ text: '搜索', fcn: 'search', type: "primary" },{ text: '新建插件组', fcn: 'add', type: "primary" }],
            formPage: [{width:"270px",label: '插件组名',type: 'input',prop: 'serviceName'}]
        },
        tableData: []
    },
    secondTableOpt: {
        height: "250",
        edit:true,
        editOpt:{
            width:'300',
            list:[
                {text:'修改',fcn:'edit',type:"primary"},
                {text:'删除',fcn:'del',type:"danger"},
                {text:'禁用',fcn:'stop',type:"warning"},
                {text:'启用',fcn:'restart',type:"primary"},
            ]
        },
        table: [
            { label: '插件UID', prop: 'pluginUID' ,sort:true ,fixed: 'left', width: "250" },
            { label: '插件名称', prop: 'pluginName',sort:true , width: "150"},
            { label: '插件用途', prop: 'pluginFunction' ,sort:true, width: "150"},
            { label: '触发间隔', prop: 'triggerInternal' ,sort:true, width: "150"},
            { label: '是否根据时间触发', prop: 'ifTriggerByTime' ,sort:true, width: "150"},
            { label: '触发开始时间', prop: 'triggerBeginTime' ,sort:true, width: "150"},
            { label: '触发结束时间', prop: 'triggerEndTime' ,sort:true, width: "150"},
            { label: '是否根据日期触发', prop: 'ifTriggerByDate',sort:true , width: "150"},
            { label: '触发开始日期', prop: 'triggerBeginDate' ,sort:true, width: "150"},
            { label: '触发结束日期', prop: 'triggerEndDate' ,sort:true, width: "150"},
            { label: '触发次数', prop: 'triggerTimes' ,sort:true, width: "150"},
            { label: '是否启用', prop: 'ifEnable' ,sort:true, width: "150"}
        ],
        tableSearch: {
            inline:true,
            formParam: {},
            edit: true,
            editOpt: [
                { text: '新建插件', fcn: 'add', type: "primary" }
            ],
            formPage: [
            ]
        },
        tableData: []
    },
    mainFormOpt: {
        status:'',
        show: false,
        index:0,
        title: '插件组信息',
        width: '30%',
        top: '30vh',
        formObj: {
            edit: true,
            editOpt: [
                { text: '保存', fcn: 'submit', type: "primary" },
                { text: '取消', fcn: 'close', type: "primary" },
            ],
            labelWidth: '120px',
            formPage: [
                { type: 'input', label: '插件组名', width: '350px', prop: 'serviceName' },
                { type: 'select', label: '运行标识', width: '350px', prop: 'ifEnable' ,opt:[{label:'是',value:true},{label:'否',value:false}]}
            ],
            formParam: {
            }
        }
    },
    // 被选中的数据
    selectedOpt:{},
    secondFormOpt: {
        status:'',
        show: false,
        index:0,
        title: '角色信息',
        width: '50%',
        top: '10vh',
        formObj: {
            edit: true,
            editOpt: [
                { text: '保存', fcn: 'submit', type: "primary" },
                { text: '取消', fcn: 'close', type: "primary" },
            ],
            labelWidth: '140px',
            formPage: [
                { type: 'select', label: '插件用途', width: '350px', prop: 'pluginFunction',opt:[{value:'是'},{value:'否'}] },
                { type: 'input', label: '插件名称', width: '350px', prop: 'pluginName' },
                { type: 'input', label: '触发间隔', width: '350px', prop: 'triggerInternal' },
                { type: 'input', label: '插件字段值', width: '350px', prop: 'taskFieldValue' },
                { type: 'select', label: '是否根据时间触发', width: '350px', prop: 'ifTriggerByTime' ,opt:[{value:'是'},{value:'否'}]},
                { type: 'time', label: '触发开始时间', width: '350px', prop: 'triggerBeginTime' },
                { type: 'time', label: '触发结束时间', width: '350px', prop: 'triggerEndTime' },
                { type: 'select', label: '是否根据日期触发', width: '350px', prop: 'ifTriggerByDay' ,opt:[{value:'是'},{value:'否'}]},
                { type: 'date', label: '触发开始日期', width: '350px', prop: 'triggerBeginDate' },
                { type: 'date', label: '触发结束日期', width: '350px', prop: 'triggerEndDate' },
                { type: 'checkbox', label: '是否根据周几执行', width: '700px', prop: 'triggerDayOfWeek' ,opt:[{value:'周一'},{value:'周二'},{value:'周三'},{value:'周四'},{value:'周五'},{value:'周六'},{value:'周日'}]},
                { type: 'input', label: '是否启用', width: '350px', prop: 'ifEnable' ,opt:[{value:'是'},{value:'否'}]},
            ],
            formParam: {
            }
        }
    }
}
export default data