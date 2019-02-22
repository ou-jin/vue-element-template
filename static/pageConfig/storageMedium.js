let data ={
    tableOpt: {
        pagination: true,
        paginationOpt: {currentPage: 0,pageSize: 0,totalPages: 0,totalRecords: 20},
        height: 600,
        edit: true,
        editOpt: {
            width: '150',
            list: [{ text: '编辑', fcn: 'edit' ,type:'success'}]
        },
        table: [
            { label: '媒质UID', prop: 'mediaUID', sort: true ,fixed:'left',width:'250px'},
            { label: '媒质名称', prop: 'mediaName', sort: true ,width:'150px'},
            { label: '路径类型', prop: 'pathType', sort: true ,width:'150px'},
            { label: '媒质主机', prop: 'mediaHost', sort: true ,width:'150px'},
            { label: '路径', prop: 'path', sort: true ,width:'150px'},
            { label: '子目录', prop: 'subDir', sort: true ,width:'150px'},
            { label: '访问ID', prop: 'accessId', sort: true ,width:'150px'},
            { label: '访问KEY', prop: 'accessKey', sort: true ,width:'150px'},
            { label: '当前', prop: 'currentFlag', sort: true ,width:'150px'},
            { label: '机构名称', prop: 'organizationName', sort: true ,width:'150px'},
            { label: '备注', prop: 'memo', sort: true ,width:'150px'},
            { label: '创建时间', prop: 'createDate', sort: true ,width:'150px'},
            { label: '创建用户', prop: 'createUserName', sort: true ,width:'150px'},
        ],
        tableSearch: {
            inline:true,
            formParam: {},
            edit: true,
            editOpt: [{ text: '新增媒质', fcn: 'add', type: "primary" }],
            formPage: []
        },
        tableData: [],
    },
    formOpt: {
        status:'',
        index:0,
        show: false,
        title: '媒质信息',
        width: '30%',
        top: '5vh',
        formObj: {
            edit: true,
            editOpt:[
                {text:'保存',fcn:'submit',type:"primary"},
                {text:'取消',fcn:'close',type:"primary"},
            ],
            labelWidth: '120px',
            formPage: [
                { type: 'input', label: '媒质名称', width: '350px', prop: 'mediaName' },
                { type: 'select', label: '路径类型', width: '350px', prop: 'pathType',opt:[] },
                { type: 'select', label: '是否是共享路径', width: '350px', prop: 'isSharePath' ,opt:[{value:true,label:'是'},{value:false,label:'否'}]},
                { type: 'input', label: '媒质主机', width: '350px', prop: 'mediaHost' },
                { type: 'input', label: '路径', width: '350px', prop: 'path' },
                { type: 'input', label: '子目录', width: '350px', prop: 'subDir' },
                { type: 'input', label: '访问ID', width: '350px', prop: 'accessId' },
                { type: 'select', label: '当前', width: '350px', prop: 'currentFlag',opt:[{value:true,label:'是'},{value:false,label:'否'}]},
                { type: 'select', label: '机构名称', width: '350px', prop: 'organizationName',opt:JSON.parse(localStorage.getItem('org'))},
                { type: 'input', label: '备注', width: '350px', prop: 'memo' },
            ],
            formParam: {}
        }
    },
}
export default data