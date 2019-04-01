export default {
    name: "commonHeader",
    created(){
        
    },
    data(){
        return{
            roleList:[
                '退出'
            ],
            userRole:''
        }
    },
    methods: {
        Logout() {
            localStorage.clear();
            sessionStorage.clear();
            this.$router.push({path: '/login'})
        },
        showSideBar(){
            this.$store.dispatch('updateSideBarShow',!this.$store.state.sideBarShow)
        },
        roleChange(s){
            this.$router.push({path: '/login'})
        }
    }
}