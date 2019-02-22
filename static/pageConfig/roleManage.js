let data ={
    mainTableOpt: {
        height: "370",
        pagination: true,
        itemFcn: 'itemClick',
        paginationOpt: { currentPage: 0, pageSize: 0, totalPages: 0, totalRecords: 20 },
        edit: true,
        editOpt: {
            width: '150',
            list: [
                { text: '编辑', fcn: 'edit', type: "primary" },
                { text: '删除', fcn: 'del', type: "danger" }
            ]
        },
        table: [
            { label: '角色名称', prop: 'roleName', sort: true },
            { label: '所属机构名称', prop: 'organizationName', sort: true },
            { label: '备注', prop: 'memo', sort: true },
            { label: '创建用户', prop: 'createUserName', sort: true },
            { label: '创建时间', prop: 'createDate', sort: true },
        ],
        tableSearch: {
            inline: true,
            formParam: {},
            edit: true,
            editOpt: [
                { text: '搜索', fcn: 'search', type: "primary" },
                { text: '新建角色', fcn: 'add', type: "primary" }
            ],
            formPage: [
                {width: "270px",label: '角色名称',type: 'input', prop: 'roleName'}
            ]
        },
        tableData: []
    },
    secondTableOpt: {
        height: "250",
        check: true,
        table: [
            { label: '权限名称', prop: 'rightName', sort: true },
            { label: '权限Id', prop: 'rightID', sort: true },
            { label: '权限分类', prop: 'rightClass', sort: true },
            { label: '备注', prop: 'memo', sort: true },
            { label: '添加用户', prop: 'createUserName', sort: true },
            { label: '添加时间', prop: 'createDate', sort: true }
        ],
        tableSearch: {
            inline: true,
            formParam: {},
            edit: true,
            editOpt: [],
            formPage: [
            ]
        },
        tableData: []
    },
    mainFormOpt: {
        show: false,
        title: '角色信息',
        width: '30%',
        top: '30vh',
        index: 0,
        status:'',
        formObj: {
            edit: true,
            editOpt: [
                { text: '保存', fcn: 'submit', type: "primary" },
                { text: '取消', fcn: 'close', type: "primary" },
            ],
            labelWidth: '120px',
            formPage: [
                { type: 'input', label: '角色名称', width: '350px', prop: 'roleName' },
                { type: 'select', label: '机构', width: '350px', prop: 'organizationName', opt:[] },
                { type: 'input', label: '备注', width: '350px', prop: 'memo' },
            ],
            formParam: {
            }
        }
    },
     // 被选中的数据
    selectedOpt:{}
}
export default data