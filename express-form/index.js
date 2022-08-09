const express = require("express");
const app=express();
const port=process.env.port || 4001;

app.use(express.urlencoded({
    extended:true
}))

app.set('view engine','pug');

app.get('/form',(req,res)=>{
    res.render('index',{title:'form handling'});
})

app.post('/form_submit',(req,res)=>{
    const {username,email}=req.body;
    res.send(`your username is : ${username} and email is : ${email}`)
})

app.listen(port,()=>console.log(`server listening at : ${port}`))