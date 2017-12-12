//向服务器发送get请求，获取响应
//credentials 在向服务器发请求的时候要带上cookie
export function get(url){
  return fetch(url,{
    method:'GET',
    headers:{
      "Accept":"application/json",
      "credentials":"include"
    }
  }).then(res=>res.json())//把响应体转成json
}
//url后台地址 data 请求体
export function post(url,data) {
  return fetch(url,{
    method:'POST',//请求方法
    headers:{//请求头
      "Accept":"application/json",//告诉服务器我客户端需要的数据类型
      "credentials":"include"
    },
    body:JSON.string(data)//请求体
  })
}