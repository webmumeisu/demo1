const express=require("express")
const router=express.Router()
const pool=require("../pool")
//在路由下添加路由
router.get("/",(req,res)=>{
    var id=req.query.id
    var sql="SELECT * FROM car_detail WHERE id=?"
    pool.query(sql,[id],(err,result)=>{
        if(err) throw(err);
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
          })
          res.write(JSON.stringify(result))
          res.end()
    })
})
module.exports = router;
