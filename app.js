//引入插件
const express=require('express');
const bodyParser=require('body-parser')
//引入路由模块
const car_core=require("./routes/car_core")
const products = require("./routes/products");
const car_detail = require("./routes/car_detail");
//构建web服务器
var app=express();
app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源
app.use(express.static(__dirname + "/public"));


app.use("/car_core",car_core)

//使用路由器管理路由
app.use("/products",products)
app.use("/car_detail",car_detail)
















