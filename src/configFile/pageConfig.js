
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
            title:"页面2"
        }
    }
]


