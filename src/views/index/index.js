import CommonHeader from '@/components/commonHeader/commonHeader.vue';
import SideBar from '@/components/sideBar/sideBar.vue'

export default {
    name: "index",
    components: {CommonHeader, SideBar},
    created(){
        // if(localStorage.getItem("OrganizationID")!==''){
        //     localStorage.setItem("OrganizationID","hzlckqyy")
        // }
    },
    computed: {
        key() {
            return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
        }
     }
}