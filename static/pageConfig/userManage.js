let data ={
    mainTableOpt: {
        height: "320",
        pagination: true,
        itemFcn: 'itemClick',
        edit: true,
        paginationOpt: { currentPage: 0, pageSize: 0, totalPages: 0, totalRecords: 20 },
        editOpt: {
            width: '300',
            list: [
                { text: '编辑', fcn: 'edit', type: "primary" },
                { fcn: 'switch', type: "switch", active: "启用", inactive: "停用", data: 'userStatus' },
                // {text:'停用',fcn:'del',type:"danger"},
                // {text:'启用',fcn:'edit',type:"success"},
                { text: '重置密码', fcn: 'resetPaw', type: "warning" }
            ]
        },
        table: [
            { label: '用户账户', prop: 'account', sort: true },
            { label: '姓名', prop: 'name', sort: true },
            { label: '工号', prop: 'idCardNO', sort: true },
            { label: '机构', prop: 'organizationName', sort: true },
            { label: '状态', prop: 'status', sort: true },
            { label: '科室', prop: 'deptName', sort: true },
            { label: '办公电话', prop: 'officePhone', sort: true },
            { label: '个人电话', prop: 'privatePhone', sort: true },
            { label: '邮箱', prop: 'email', sort: true },
            { label: '最后登录时间', prop: 'lastLogonTime', sort: true },
            { label: '创建用户', prop: 'createUserName', sort: true },
            { label: '创建时间', prop: 'createDate', sort: true },
            { label: '备注', prop: 'memo', sort: true },
        ],
        tableSearch: {
            inline: true,
            formParam: {},
            edit: true,
            editOpt: [
                { text: '搜索', fcn: 'search', type: "primary" },
                { text: '新增用户', fcn: 'add', type: "primary" }
            ],
            formPage: [
                { width: "270px", label: '用户账户', type: 'input', prop: 'account' },
                { width: "250px", label: '姓名', type: 'input', prop: 'name' },
                { width: "250px", label: '工号', type: 'input', prop: 'idCardNO' },
                { width: "250px", label: '机构', type: 'select', prop: 'organizationName', opt: [],fcn:'orgChange' },
                { label: '科室', type: 'select', width: "265px", opt: [], prop: 'deptName' },
                { label: '用户状态', type: 'select', width: "300px", prop: 'status', 
                opt: [{ value: '',label:'全部' }, {value: '0',label:'启用' }, {value: '1',label:'停用'}, { value: '2',label:'待审核' }] },
            ]
        },
        tableData: []
    },
    secondTableOpt: {
        height: "250",
        check: true,
        table: [
            { label: '角色', prop: 'roleName', sort: true },
            { label: '备注', prop: 'memo', sort: true },
            { label: '所属机构名称', prop: 'organizationName', sort: true },
            { label: '添加时间', prop: 'createDate', sort: true }
        ],
        tableSearch: {
            formPage: [
            ],
            editOpt: []
        },
        tableData: []
    },
     // 被选中的数据
    selectedOpt:{},
    mainFormOpt: {
        show: false,
        index: 0,
        status:'',
        title: '媒质信息',
        width: '30%',
        top: '15vh',
        formObj: {
            edit: true,
            labelWidth: '120px',
            editOpt: [{ text: '保存', fcn: 'submit', type: "primary" }, { text: '取消', fcn: 'close', type: "primary" }],
            formPage: [
                { type: 'input', label: '用户账户', width: '350px', prop: 'account' },
                { type: 'input', label: '姓名', width: '350px', prop: 'name' },
                { type: 'input', label: '工号', width: '350px', prop: 'idCardNO' },
                { type: 'select', label: '状态', width: '350px', prop: 'status', opt: [{ value: '0',label:'启用' }, { label: '停用',value:'1' }] },
                { type: 'select', label: '机构', width: '350px', prop: 'organizationName', opt: [] ,fcn:'formOrgChange'},
                { type: 'select', label: '科室', width: '350px', prop: 'deptName', opt: [] },
                { type: 'input', label: '办公电话', width: '350px', prop: 'officePhone' },
                { type: 'input', label: '个人电话', width: '350px', prop: 'privatePhone' },
                { type: 'input', label: '电子邮箱', width: '350px', prop: 'email' },
                { type: 'input', label: '备注', width: '350px', prop: 'memo' },
            ],
            formParam: {
            }
        }
    },
}
export default data