const express=require("express");
const app=express();
const morgan=require("morgan");
const cors=require("cors");
const route=require("./server/routes/router");

//dotenv
const dotenv=require("dotenv");
const path=require("path")
dotenv.config({path:'config.env'});
//port
const port=process.env.PORT || 8080;

//middlewares
// app.use(morgan('tiny'));
app.use('/api',route);
app.use(express.json())
app.use(cors());
// app.use(express.urlencoded({extended:false}))

app.listen(port,()=>{
    console.log(`server runs at port : http://localhost:${port}/api`);
})