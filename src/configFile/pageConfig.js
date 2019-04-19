// 当children存在时将生成折叠侧边栏
//请在/static/icon准备对应url名称的svg格式的图标 
//请在/view/准备对应url名称的页面文件 
export default [
    {
        url: '/pageOne',
        children:[
            {
                url: '/pageOne',
                meta:{
                    requiresAuth:true,
                    title:"页面1"
                }
            },
            {
                url: 'https://www.baidu.com/',
                meta:{
                    title:"第三方链接-百度"
                }
            }
        ],
        meta:{
            title:"多页面"
        }
    },
    {
        url: '/pageTwo',
        meta:{
            requiresAuth:true,
            title:"indexedDb测试"
        }
    },
    {
        url: '/heightlight',
        meta:{
            requiresAuth:true,
            title:"输入框高亮测试"
        }
    }
]


