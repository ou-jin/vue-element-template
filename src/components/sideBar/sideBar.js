export default {
    name: "sideBar",
    created(){
        let list = this.fcn.getStorage('routeList')
        var menuList = []
        list.forEach((s)=>{
            let menu = {
                'title':s.meta.title,
                icon: s.path.replace('/', ''),
                index: s.path.replace('/', ''),
                route: s.path,
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