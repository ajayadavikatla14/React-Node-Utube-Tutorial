const express = require("express");
const app=express();
const morgan=require("morgan");
const {v4:uuidv4}=require("uuid");
const fs=require("fs");
const path=require("path");

let accessLogStream=fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'})

const port=process.env.PORT || 4007;
const host='localhost';
morgan.token('id',function getId(req) {
    return req.id;
})

morgan.token('param',function (req,res,param) {
    return 'userToken';
})

app.use(assignid);

app.use(morgan(':id:method:status:url"HTTP/:http-version" '));
app.use(morgan(':id:param:method:status:url"HTTP/:http-version" ',{stream:accessLogStream}));

app.get('/',(req,res)=>{
    res.send('welcome to morgan middleware');
})

function assignid(req,res,next) {
    req.id=uuidv4();
    next();
}


app.listen(port,host,()=>{
    console.log(`server running at : http://${host}:${port}`);
})