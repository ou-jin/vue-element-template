// 在需要http请求的页面引入api
import api from '../../api'

export default {
    name: "login",
    data() {
        return {
            formData: {
                OrganizationID: '',
                account: '',
                password: ''
            },
            org: [
                {value:'org1',label:'org1'},
                {value:'org2',label:'org2'}
            ],
            value: '',
            formRule: {
                OrganizationID: [{ required: true, message: '请选择机构', trigger: 'blur' }],
                account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            },
            script: null
        }
    },
    mounted() {
    },
    beforeDestroy() {
    },
    created() {
    },
    methods: {
        select(){
            localStorage.setItem("OrganizationID", this.formData.OrganizationID)
        },
        Login() {
            this.$refs['loginForm'].validate((valid) => {
                if (valid) {
                    this.$router.push({ path: '/' })
                }})
        },
    }
}