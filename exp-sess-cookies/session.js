const express=require("express");
const app=express();
const session=require("express-session")
const port=process.env.PORT || 4002;

app.use(session({
    secret:"your secret key",
    resave:true,
    saveUninitialized:true
}))

app.get('/',(req,res)=>{
    req.session.name="John"
    res.send("session set")
})

app.get('/session',(req,res)=>{
    var name=req.session.name
    res.send(name)
})


app.get('/destroy',(req,res)=>{
    req.session.destroy(function () {
        console.log("session destroyes");
    })
    res.send("session got destroyed")
})

app.listen(port,()=>console.log(`server runs at ${port}`))