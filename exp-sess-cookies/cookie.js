const express=require("express");
const app=express();
const cookies=require("cookie-parser")
const port=process.env.PORT || 4003;

let users={
    name:"john",
    age:22
}

app.use(cookies())

app.get('/',(req,res)=>{
   res.send("cookies")
})

app.get('/setUser',(req,res)=>{
    res.cookie("userdata",users);
    res.send("userdata added to cookies");
})

app.get("/getUser",(req,res)=>{
    res.send(req.cookies)
})

app.get('/logout',(req,res)=>{
    res.clearCookie('userdata');
    res.send("user logged out..!!")
})

app.listen(port,()=>console.log(`server runs at ${port}`))