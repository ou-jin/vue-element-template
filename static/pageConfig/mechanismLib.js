let data ={
    mainTableOpt: {
        height: "280",
        edit: true,
        itemFcn: 'itemClick',
        editOpt: {
            width: '250',
            list: [{ text: '新增下级目录', fcn: 'addMain', type: "success" },
                   { text: '编辑', fcn: 'editMain', type: "primary" },
                   { text: '删除', fcn: 'del', type: "danger" }]
        },
        table: [
            { label: '机构编号', prop: 'organizationID', fixed: 'left', width: "250" },
            { label: '组织机构代码', prop: 'organizationCode', width: "150" },
            { label: '机构名称', prop: 'organizationName', width: "150" },
            { label: '别名', prop: 'alias', width: "150" },
            { label: '省份', prop: 'province', width: "150" },
            { label: '城市', prop: 'city', width: "150" },
            { label: '区县', prop: 'district', width: "150" },
            { label: '电话', prop: 'officePhoneNO', width: "150" },
            { label: '邮箱', prop: 'email', width: "150" },
            { label: '输入码', prop: 'inputCode', width: "150" },
            { label: '创建时间', prop: 'createDate', width: "150" },
            { label: '备注', prop: 'memo', width: "150" },
            { label: '删除', prop: 'deleteFlag', width: "150" },
        ],
        tableSearch: {
            inline: true,
            formParam: {},
            edit: true,
            editOpt: [{ text: '搜索', fcn: 'search', type: "primary" }],
            formPage: [{ width: "270px", label: '机构编号', type: 'input', prop: 'organizationID' }, { width: "270px", label: '机构名称', type: 'input', prop: 'organizationName' }]
        },
        tableData: []
    },
    secondTableOpt: {
        height: "210",
        pagination: true,
        paginationOpt: { currentPage: 0, pageSize: 0, totalPages: 0, totalRecords: 0 },
        edit: true,
        tableSearch: {
            inline: true,
            formParam: {},
            edit: true,
            editOpt: [
                { text: '搜索', fcn: 'search', type: "primary" },
                { text: '添加科室', fcn: 'addSecond', type: "primary" }
            ],
            formPage: [
                { width: "270px", label: '科室编号', type: 'input', prop: 'deptID' },
                { width: "270px", label: '科室名称', type: 'input', prop: 'deptName' }
            ]
        },
        editOpt: {
            width: '150',
            list: [
                { text: '编辑', fcn: 'editSecond', type: "primary" },
                { text: '删除', fcn: 'del', type: "danger" }
            ]
        },
        table: [
            { label: '科室编号', prop: 'deptID', sort: true },
            { label: '科室名称', prop: 'deptName', sort: true },
            { label: '科室类型', prop: 'deptType', sort: true },
            { label: '医技科室分类', prop: 'examClassName', sort: true },
            { label: '电话', prop: 'officePhoneNO', sort: true },
            { label: '输入码', prop: 'inputCode', sort: true },
            { label: '备注', prop: 'memo', sort: true },
            { label: '删除', prop: 'deleteFlag', sort: true },
        ],
        tableData: []
    },
    mainFormOpt: {
        show: false,
        title: '角色信息',
        width: '30%',
        top: '10vh',
        index: 0,
        status: '',
        formObj: {
            edit: true,
            editOpt: [
                { text: '保存', fcn: 'submit', type: "primary" },
                { text: '取消', fcn: 'close', type: "primary" },
            ],
            labelWidth: '120px',
            formPage: [
                { type: 'input', label: '机构编号', width: '350px', prop: 'organizationID' },
                { type: 'input', label: '组织机构代码', width: '350px', prop: 'organizationCode' },
                { type: 'input', label: '机构名称', width: '350px', prop: 'organizationName' },
                { type: 'input', label: '别名', width: '350px', prop: 'alias' },
                { type: 'input', label: '省份', width: '350px', prop: 'province' },
                { type: 'input', label: '城市', width: '350px', prop: 'city' },
                { type: 'input', label: '区县', width: '350px', prop: 'district' },
                { type: 'input', label: '电话', width: '350px', prop: 'officePhoneNO' },
                { type: 'input', label: '邮箱', width: '350px', prop: 'email' },
                { type: 'input', label: '输入码', width: '350px', prop: 'inputCode' },
                { type: 'textarea', label: '备注', width: '350px', prop: 'memo' },
            ],
            formParam: {
            }
        }
    },
    secondFormOpt: {
        show: false,
        title: '角色信息',
        width: '30%',
        top: '10vh',
        index: 0,
        status: '',
        formObj: {
            edit: true,
            editOpt: [
                { text: '保存', fcn: 'submit', type: "primary" },
                { text: '取消', fcn: 'close', type: "primary" },
            ],
            labelWidth: '120px',
            formPage: [
                { type: 'input', label: '科室编号', width: '350px', prop: 'deptID' },
                { type: 'input', label: '科室名称', width: '350px', prop: 'deptName' },
                { type: 'select', label: '科室类型', width: '350px', prop: 'deptType' ,opt:[]},
                { type: 'select', label: '医技科室分类', width: '350px', prop: 'examClassName' ,opt:[]},
                { type: 'input', label: '电话', width: '350px', prop: 'officePhoneNO' },
                { type: 'input', label: '输入码', width: '350px', prop: 'inputCode' },
                { type: 'input', label: '备注', width: '350px', prop: 'memo' },
            ],
            formParam: {
            }
        }
    },
    // 被选中的数据
    selectedOpt: {}
}
export default data