export default {
    //获取组织架构
    organizations:{url:'register/organizations',method:'get'},
    // 登陆页面
    login: { url: 'authorize/adminUserInfo', method: 'get' },
    //  系统参数页面
    getsysparameter:{ url: 'system/getsysparameter', method: 'get' },
    editsysparameter:{ url: 'system/editsysparameter', method: 'post' },
    // 数据字典页面
    getdictypelist:{url: 'dic/getdictypelist', method: 'get'},
    getdicitemlist:{url: 'dic/getdicitemlist', method: 'get'},
    createdic:{url: 'dic/create', method: 'post'},
    editdic:{url: 'dic/edit', method: 'post'},
    deletedic:{url: 'dic/delete', method: 'post'},
    // 存储媒介页面
    getstoragelist:{url: 'storage/getstoragelist', method: 'get'},
    getdicitem:{url: 'storage/getdicitem', method: 'get'},
    storagecreate:{url: 'storage/create', method: 'post'},
    storageedit:{url: 'storage/edit', method: 'post'},
    // 用户管理页面
    getuserslist:{url: 'user/getuserslist', method: 'get'},
    getrolelist:{url: 'user/getrolelist', method: 'get'},
    getuserroles:{url: 'user/getuserroles', method: 'get'},
    getroles:{url: 'user/getroles', method: 'get'},
    usercreate:{url: 'user/create', method: 'post'},
    useredit:{url: 'user/edit', method: 'post'},
    userdisable:{url: 'user/disable', method: 'post'},
    userreset:{url: 'user/reset', method: 'post'},
    useraddroles:{url: 'user/addroles', method: 'post'},
    //角色管理
    getroleslist:{url: 'role/getroleslist', method: 'get'},
    getrightslist:{url: 'role/getrightslist', method: 'get'},
    getrightroles:{url: 'role/getuserroles', method: 'get'},
    rolecreate:{url: 'role/create', method: 'post'},
    roleedit:{url: 'role/edit', method: 'post'},
    roledelete:{url: 'role/delete', method: 'post'},
    editUserRight:{url: 'role/editUserRight', method: 'post'},
    //机构科室
    getorganizationlist:{url: 'org/getorganizationlist', method: 'get'},
    createOrganization:{url: 'org/createOrganization', method: 'post'},
    editOrganization:{url: 'org/editOrganization', method: 'post'},
    deleteOrganization:{url: 'org/deleteOrganization', method: 'post'},
    getDepartmentList:{url: 'org/getDepartmentList', method: 'get'},
    createDepartment:{url: 'org/createDepartment', method: 'post'},
    editDepartment:{url: 'org/editDepartment', method: 'post'},
    deleteDepartment:{url: 'org/deleteDepartment', method: 'post'},
    //插件配置
    createpluginService:{url: 'plugin/createpluginService', method: 'post'},
    editpluginService:{url: 'plugin/editpluginService', method: 'post'},
    deletepluginService:{url: 'plugin/deletepluginService', method: 'post'},
    getservicelist:{url: 'plugin/getservicelist', method: 'get'},
    getpluginlist:{url: 'plugin/getpluginlist', method: 'get'},
    getpluginservicemaplist:{url: 'plugin/getpluginservicemaplist', method: 'get'},
    getallpluginlist:{url: 'plugin/getallpluginlist', method: 'get'},
    getpluginrecordlist:{url: 'plugin/getpluginrecordlist', method: 'get'},
    disablepluginService:{url: 'plugin/disablepluginService', method: 'post'},
    createpluginservicemap:{url: 'plugin/createpluginservicemap', method: 'post'},
    editpluginservicemap:{url: 'plugin/editpluginservicemap', method: 'post'},
    deletepluginservicemap:{url: 'plugin/deletepluginservicemap', method: 'post'},
    disablepluginservicemap:{url: 'plugin/disablepluginservicemap', method: 'post'},

}
