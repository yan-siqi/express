let express = require("express");
const { response } = require("express");
//生成应用实例
const app = new express(); //app:代表整个应用
//注册路由
app.get('/',(request,response)=>{
    console.log(1);
    response.end('success data1111')
})
app.get('/login',(request,response)=>{
  console.log(2);
  response.end('success data2222')
})
app.post('/register',(request,response)=>{
  console.log(3);
  response.end('success data333')
})
//绑定监听(设置当前的端口号)
app.listen("3001", (err) => {
  if (err) {
    console.log("服务器起动失败", err);
  } else {
    console.log("服务器起动成功:端口号3001监听中...");
  }
});

