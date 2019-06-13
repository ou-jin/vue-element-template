let getFileName = n =>{
  let list = n.split('/')
  return list[list.length-1].replace('.vue','')
}
let file = require.context('../components', true, /\.vue$/);
export default (Vue) =>{
  file.keys().forEach(e => {
    Vue.component(getFileName(e), file(e).default)
  });
}

