var routeFactory = function (list){
    let routeList = []
    list.forEach((s)=>{
        let route = {
            path: s.url,
            component:resolve=>require(["@/views"+s.url+"/index.vue"], resolve),
            name: s.url.replace('/', ''),
            meta: s.meta
        }
        routeList.push(route)
    })
    return routeList
}
export  {routeFactory}