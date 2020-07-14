let express = require("express");
const { response, request } = require("express");
//.1.生成应用实例
const app = new express(); //app:代表整个应用
//3.注册路由
/* app.get('/login/:username',(request,response)=>{
    console.log('data success');
    console.log(request.params);
    response.end('success-data');
}) */
/* app.get('/login',(request,response)=>{
    console.log('data success');
    console.log(request.query);
    response.end('success-data');
}) */
app.post('/register/:username',(request,response)=>{
   // console.log(request.query);
    console.log(request.params)
    response.end('success-data');
})
//2.绑定监听(设置当前的端口号)
app.listen("3001", (err) => {
  if (err) {
    console.log("服务器起动失败", err);
  } else {
    console.log("服务器起动成功:端口号3001监听中...");
  }
});

