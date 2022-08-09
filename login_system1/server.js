const express=require('express');
const app=express();
const path=require('path');
const router=require('./routes/router');
const bodyparser=require("body-parser");
const session=require("express-session");
const {v4:uuidv4}=require("uuid");

const port=process.env.PORT || 4004;
const client='localhost';
app.set('view engine','ejs');

//load static files
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));
app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))

app.get('/',(req,res)=>{
    res.render('base',{title:'Login System'});
})

app.use('/route',router);

app.listen(port,client,()=>{
    console.log(`server running at port  : http://${client}:${port}`);
})