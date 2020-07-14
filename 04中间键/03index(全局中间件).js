let path=require('path');//引入路径
let express = require("express");
const { response, request } = require("express");
//.1.生成应用实例
const app = new express(); //app:代表整个应用
//中间键
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname,'public')));//使用目录
app.post("/register", (request, response) => {
  console.log(request.body);
  response.send("服务器返回的数据");
});
//2.绑定监听(设置当前的端口号)
app.listen("3001", (err) => {
  if (err) {
    console.log("服务器起动失败", err);
  } else {
    console.log("服务器起动成功:端口号3001监听中...");
  }
});
