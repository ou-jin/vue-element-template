// 工具类
let obj = {
    //鉴空
    checkNull:function(str){
        if(str!==null&&str!==''&&str!==undefined){
            return true
        }else{
            return false
        }
    },
    // 往storage内存入对象
    setStorage: function(key,obt){
        localStorage.setItem(key,JSON.stringify(obt))
    },
    // 从storage内取出对象
    getStorage: function(key){
        return  JSON.parse(localStorage.getItem(key))
    },
    //将首字母转成大写
    convertToCamelCase(flag,str){
        if(flag==='')return str
        return flag + str[0].toUpperCase() + str.substring(1)
    },
   
}
export default obj