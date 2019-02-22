let data ={
    mainTableOpt: {
        height: "300",
        pagination: true,
        itemFcn: 'itemClick',
        paginationOpt: { currentPage: 0, pageSize: 0, totalPages: 0, totalRecords: 0 },
        table: [
            { label: '字段1', prop: 'field1', sort: true },
            { label: '字段2', prop: 'field2', sort: true },
            { label: '字段3', prop: 'field3', sort: true },
            { label: '字段4', prop: 'field4', sort: true },
            { label: '字段5', prop: 'field5', sort: true },
            { label: '字段6', prop: 'field6', sort: true },
            { label: '字段7', prop: 'field7', sort: true },
        ],
        tableSearch: {
            inline: true,
            formParam: {},
            edit: true,
            editOpt: [{ text: '搜索', fcn: 'topSearch', type: "primary" }],
            formPage: [
                {width: "300px",label: '字段1',type: 'select',opt: [{ label: '选项1' ,value:'2'},{ label: '选项2' ,value:'0'},{ label: '选项3' ,value:'1'},],prop:'typeClass'},
                {width: "280px",label: '字段2',type: 'input',prop:'typeCode'},
                {width: "280px",label: '字段3', type: 'input',prop:'typeName'}
            ]
        },
        tableData: [
            {'field1':'123','field2':'123','field3':'123','field4':'123','field5':'123','field6':'123','field7':'123'},
            {'field1':'123','field2':'123','field3':'123','field4':'123','field5':'123','field6':'123','field7':'123'},
            {'field1':'123','field2':'123','field3':'123','field4':'123','field5':'123','field6':'123','field7':'123'},
            {'field1':'123','field2':'123','field3':'123','field4':'123','field5':'123','field6':'123','field7':'123'},
            {'field1':'123','field2':'123','field3':'123','field4':'123','field5':'123','field6':'123','field7':'123'},
            {'field1':'123','field2':'123','field3':'123','field4':'123','field5':'123','field6':'123','field7':'123'},
            {'field1':'123','field2':'123','field3':'123','field4':'123','field5':'123','field6':'123','field7':'123'},
            {'field1':'123','field2':'123','field3':'123','field4':'123','field5':'123','field6':'123','field7':'123'},
        ]
    },
    secondFormOpt: {
        title: '编辑系统参数',
        width: '30%',
        top: '8vh',
        status:'',
        show: false,
        index:0,
        formObj: {
            edit: true,
            editOpt: [{ text: '保存', fcn: 'submit', type: "primary" },{ text: '取消', fcn: 'close', type: "primary" },],
            labelWidth: '80px',
            formPage: [
                { type: 'input', label: '字典1', width: '350px', prop: 'item1' },
                { type: 'input', label: '字典2', width: '350px', prop: 'item2' },
                { type: 'input', label: '字典3', width: '350px', prop: 'item3' },
                { type: 'input', label: '字典4', width: '350px', prop: 'item4' },
                { type: 'input', label: '字典5', width: '350px', prop: 'item5' },
                { type: 'input', label: '字典6', width: '350px', prop: 'item6' },
                { type: 'input', label: '字典7', width: '350px', prop: 'item7' },
                { type: 'input', label: '字典8', width: '350px', prop: 'item8' },
                { type: 'input', label: '字典9', width: '350px', prop: 'item9' },
                { type: 'input', label: '字典10', width: '350px', prop: 'item10' },
                { type: 'textarea', label: '字典11', width: '350px', prop: 'item11' },
            ],
            formParam: {
            }
        }
    },
    // 被选中的数据
    selectedOpt:{},
    secondTableOpt: {
        height: "230",
        edit: true,
        editOpt: {width: '150',list: [{ text: '编辑', fcn: 'edit', type: "primary" },{ text: '删除', fcn: 'det', type: "danger" }]},
        table: [
            { label: '字典1', prop: 'item1', sort: true, fixed: "left", width: '200px' },
            { label: '字典2', prop: 'item2', sort: true, width: '100px' },
            { label: '字典3', prop: 'item3', sort: true, width: '150px' },
            { label: '字典4', prop: 'item4', sort: true, width: '150px' },
            { label: '字典5', prop: 'item5', sort: true, width: '150px' },
            { label: '字典6', prop: 'item6', sort: true, width: '150px' },
            { label: '字典7', prop: 'item7', sort: true, width: '150px' },
            { label: '字典8', prop: 'item8', sort: true, width: '150px' },
            { label: '字典9', prop: 'item9', sort: true, width: '150px' },
            { label: '字典10', prop: 'item10', sort: true, width: '150px' },
            { label: '字典11', prop: 'item11', width: '150px' },
            { label: '字典12', prop: 'item12', width: '150px' }
        ],
        tableSearch: {
            inline: true,formParam: {},edit: true,
            editOpt: [{ text: '搜索', fcn: 'bottomSearch', type: "primary" },{ text: '新增字典项目', fcn: 'add', type: "primary" }],
            formPage: [{width: "300px",label: '字典项代码',type: 'input', prop: 'itemCode'},{ width: "300px",label: '字典项名称',type: 'input', prop: 'itemName'}]
        },
        tableData: [
            {'item1':'123','item2':'123','item3':'123','item4':'123','item5':'123','item6':'123','item7':'123','item8':'123','item9':'123','item10':'123','item11':'123','item12':'123'},
            {'item1':'123','item2':'123','item3':'123','item4':'123','item5':'123','item6':'123','item7':'123','item8':'123','item9':'123','item10':'123','item11':'123','item12':'123'},
            {'item1':'123','item2':'123','item3':'123','item4':'123','item5':'123','item6':'123','item7':'123','item8':'123','item9':'123','item10':'123','item11':'123','item12':'123'},
            {'item1':'123','item2':'123','item3':'123','item4':'123','item5':'123','item6':'123','item7':'123','item8':'123','item9':'123','item10':'123','item11':'123','item12':'123'},
            {'item1':'123','item2':'123','item3':'123','item4':'123','item5':'123','item6':'123','item7':'123','item8':'123','item9':'123','item10':'123','item11':'123','item12':'123'},
            {'item1':'123','item2':'123','item3':'123','item4':'123','item5':'123','item6':'123','item7':'123','item8':'123','item9':'123','item10':'123','item11':'123','item12':'123'},
            {'item1':'123','item2':'123','item3':'123','item4':'123','item5':'123','item6':'123','item7':'123','item8':'123','item9':'123','item10':'123','item11':'123','item12':'123'},
        ]
    }
}
export default data