import axios from 'axios'
import XLSX from 'xlsx'


async function  getConfigList(){
    let interfaceList = []
    // 读取本地excel文件
    let x = await  axios({
        url: "../../static/file/proto接口文档.xlsx",
        method: 'get',
        responseType:'arraybuffer'
      })
      var data = new Uint8Array(x.data);
      var arr = new Array();
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, {type:"binary"});
      workbook.SheetNames.forEach(y=>{
          let jsonSheet = XLSX.utils.sheet_to_json(workbook.Sheets[y])
          if(jsonSheet.length>0){
            jsonSheet.forEach(z=>{
                let interfaceObj={}
                interfaceObj[z['路由']+z['方法名']]={
                    url:z['路由']+'/'+z['方法名'],
                    requestTmp:z['参数Proto文件'],
                    responseTmp:z['返回Proto文件']==='-'?'':z['返回Proto文件']
                }
                interfaceList.push(interfaceObj)
            })
          }
      })
      return interfaceList
}



export default getConfigList
