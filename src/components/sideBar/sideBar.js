import page from '@/configFile/pageConfig'
export default {
    name: "sideBar",
    created(){
        this.menuList=this.creatMenu(page)
        console.log(this.menuList)
    },
    data() {
        return {
            isCollapse: false,
            collapseTransition: false,
            menuList: []
        }
    },
    methods: {
        showSideBar() {
            this.isCollapse = !this.isCollapse
        },
        menuChange(index) {
        },
        creatMenu(list){
            var menuList = []
            list.forEach((s)=>{
                let menu = {
                    'title':s.meta.title,
                    icon: 'pageOne',
                    index: s.url.replace('/', ''),
                    route: s.url,
                    list: s.children?this.creatMenu(s.children):undefined
                }
                menuList.push(menu)
            })
            return menuList
        },
        barHref(s){
           if( this.fcn.isURL(s)){
            this.$router.push({name:'web',params:{'outSideUrl':s}})
           }else{
               this.$router.push({path:s})
           }
        }
    },
    computed: {
        onRoutes() {
            this.$store.dispatch('updateCurrentRoute', this.$route.meta.title)
            return this.$route.path;
        },
    }
}