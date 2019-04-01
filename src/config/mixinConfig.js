var mixin = {
    created: function () {
    },
    beforeDestroy() {
        // 解决数据总线vue对象事件遗留问题
        // console.log('清除bus事件')
        this.$bus.$off()
    },
}
export default mixin;