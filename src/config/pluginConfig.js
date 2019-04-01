import CommonTable from '../components/common/commonTable'
import CommonForm from '../components/common/commonForm'
import CommonDialog from '../components/common/commonDialog'
import IconSvg from '../components/common/IconSvg'
export default (Vue) => {
  Vue.component('CommonTable', CommonTable)
  Vue.component('CommonForm', CommonForm)
  Vue.component('CommonDialog', CommonDialog)
  Vue.component('icon-svg', IconSvg)
}
