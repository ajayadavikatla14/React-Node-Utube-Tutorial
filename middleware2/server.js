const express=require("express");
const app = express();
const path=require("path");
const fs=require('fs');

const port = process.env.PORT || 4006;
const local='localhost';

app.use(function (req,res,next) {
    console.log('RequestTime and Date : ' +  new Date());
    // res.send('1st middleware');
    next()
})

app.use(function (req,res,next) {
    var filepath=path.join(__dirname,'static',req.url);
    fs.stat(filepath,function (err,fileInfo) {
        if(err){
            next();
            return;
        }
        if(fileInfo.isFile()){
            res.sendFile(filepath)
        }else{
            next()  
        }
    })
})

app.use(function (req,res) {
    res.status(404);
    res.send("File Not Found..!!!")
})


app.listen(port,local,()=>{
    console.log(`server runs at port : http://${local}:${port}`);
})