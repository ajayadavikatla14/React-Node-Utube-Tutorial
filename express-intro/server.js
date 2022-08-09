const express=require("express");
const app=express();


//middleware

const LogCheck=(req,res,next)=>{
    console.log('Logged');
    next();
}

app.use(LogCheck);

app.get('/ping',(req,res)=>{
    res.status(200).send({"message":"pong"})
})

app.set('view engine','pug');

app.get('/pug',(req,res)=>{
    res.render('index');
})

app.listen(4000,()=>{
    console.log('server runs at port : 4000');
})