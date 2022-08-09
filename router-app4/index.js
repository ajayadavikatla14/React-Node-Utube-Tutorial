const express=require("express");
const  route = require("./router");
const app=express();
const bodyparser=require("body-parser");
const port=process.env.port || 4007;

app.use(bodyparser.urlencoded({
    extended:false
}))

app.use('/api',route);

app.get('/',(req,res)=>{
    res.send('welcome to router app');
})

app.listen(port,()=>{
    console.log(`server runs at http://localhost:${port}`);
})