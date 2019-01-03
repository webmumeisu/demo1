const express = require("express");
const router = express.Router();
const pool = require("../pool")

router.get("/",(req,res)=>{
    var kword = req.query.kword;
    console.log(kword)
    if(kword != undefined){
        //var arr = kword.split("?");
        //arr.pop();//删除数组最后一个元素。因为最后一个是个空元素""
        //console.log(arr)
        for(var i=0;i<kword.length;i++){
            kword[i] = `title like '%${kword[i]}%'`
        }
        //console.log(arr)
        var where = " where "+kword.join(' or ')//` where title like '%${kword}%' `
        //console.log(where)
        var sql = "SELECT * FROM bmn_laptop"
        //console.log(sql+where)
        pool.query(sql+where,[],(err,result)=>{
            if(err) throw err;
            //console.log(result)
            res.writeHead(200,{
                "Content-Type":"application/json;charset=utf-8",
                "Access-Control-Allow-Origin":"*"
            })
            res.write(JSON.stringify(result));
            res.end();
        })
    }else{
        var sql = " SELECT * FROM bmn_laptop "
        pool.query(sql,[],(err,result)=>{
            if(err) throw err
            //res.send(result)
            res.writeHead(200,{
                "Content-Type":"application/json;charset=utf-8",
                "Access-Control-Allow-Origin":"*"
            })
            res.write(JSON.stringify(result));
            res.end();
        })
    }
})



//导出
module.exports = router;