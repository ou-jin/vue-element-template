let data ={
    formOpt: {
        show: false,
        edit: true,
        index:0,
        title: '编辑系统参数',
        width: '30%',
        formObj: {
            edit: true,
            editOpt: [{ text: '保存', fcn: 'submit', type: "primary" },{ text: '取消', fcn: 'close', type: "primary" }],
            labelWidth: '80px',
            formPage: [
                { type: 'input', label: '参数1', width: '350px', prop: 'code', disabled: true },
                { type: 'input', label: '参数2', width: '350px', prop: 'name' },
                { type: 'input', label: '参数3', width: '350px', prop: 'value' },
                { type: 'input', label: '参数4', width: '350px', prop: 'module' },
                { type: 'textarea', label: '参数5', width: '350px', prop: 'memo' },
            ],
            formParam: {
            }
        }
    },
    tableOpt: {
        pagination: true,
        paginationOpt: {currentPage: 0,pageSize: 0,totalPages: 0,totalRecords: 20},
        height: 600,
        edit: true,
        editOpt: {
            width: '100',
            list: [{ text: '编辑', fcn: 'edit', type: "primary" }]
        },
        table: [
            { label: '参数1', prop: 'code' },{ label: '参数2', prop: 'name' },
            { label: '参数3', prop: 'value' },{ label: '参数4', prop: 'module' },
            { label: '参数5', prop: 'memo' }],
        tableSearch: {
            inline: true,
            formParam: {},
            edit: true,
            editOpt: [{ text: '搜索', fcn: 'search', type: "primary" }],
            formPage: [
                { width: "280px",label: '参数1',prop:'code',type: 'input'},
                {width: "280px",label: '参数2',prop:'name',type: 'input'}
            ]
        },
        tableData: [
            {'code':'123','name':'123','value':'123','module':'123','memo':'123'},
            {'code':'123','name':'123','value':'123','module':'123','memo':'123'},
            {'code':'123','name':'123','value':'123','module':'123','memo':'123'},
            {'code':'123','name':'123','value':'123','module':'123','memo':'123'},
            {'code':'123','name':'123','value':'123','module':'123','memo':'123'},
        ]
    }
}
export default data