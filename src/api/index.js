import apiUrl from './apiUrl'
import apiUtil from './apiUtil'

const generateApiMap = apiUtil.generateApiMap({...apiUrl})
export default {
    ...generateApiMap // 取出所有可遍历属性复制在新对象上
}
