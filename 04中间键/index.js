let express = require("express");
const { response, request } = require("express");
//.1.生成应用实例
const app = new express(); //app:代表整个应用
//app使用中间键
app.use((request, response, next) => {
  console.log(1111);
  next();
 // response.send("服务器返回的内容1111");
});
//路由跳转也是中间键
app.get('/',(request,response)=>{
    console.log('0000');
    response.send('get请求返回的数据')
})
//2.绑定监听(设置当前的端口号)
app.listen("3001", (err) => {
  if (err) {
    console.log("服务器起动失败", err);
  } else {
    console.log("服务器起动成功:端口号3001监听中...");
  }
});
