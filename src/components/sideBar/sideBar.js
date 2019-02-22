export default {
    name: "sideBar",
    created(){
        let list = this.fcn.getStorage('routeList')
        console.log(list)
        var menuList = []
        list.forEach((s)=>{
            let menu = {
                'title':s.meta.title,
                icon: s.url.replace('/', ''),
                index: s.url.replace('/', ''),
                route: s.url,
            }
            menuList.push(menu)
        })
        this.menuList = menuList
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
        }
    },
    computed: {
        onRoutes() {
            this.$store.dispatch('updateCurrentRoute', this.$route.meta.title)
            return this.$route.path;
        }
    }
}