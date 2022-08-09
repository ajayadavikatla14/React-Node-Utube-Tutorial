const express=require("express");
const cors=require("cors");
const route=express.Router();
// const bodyparser=require("body-parser")
route.use(express.json())
route.use(cors());
const pool=require("../database/db")

route.get('/getUsers',async(req,res)=>{
    try {
        const data=await pool.query("SELECT * FROM crud ORDER BY id");
        console.log(data.rows);
        res.send(data);
    } catch (error) {
        console.log(err);
        res.send(err)
    }
})

route.post('/insertData',async(req,res)=>{
    const {email,password}=req.body;
    console.log(email + ' ' + password);
    try {
        const inserting=await pool.query("INSERT INTO crud(email,password) values($1,$2)"
        ,[email,password])
        console.log('inserted..!!');
        res.send({"message":"row inserted"})
    } catch (error) {
        console.log(error);
        res.send(error) 
    }
})

route.get('/findUser/:id',async(req,res)=>{
   try {
    const userId=Number(req.params.id);
    const userdata=await pool.query("SELECT * FROM  crud");
    const exist=userdata.rows.find((ele)=>ele.id===userId);
    if(!exist){
        res.send("user not found.!!")
    }else{
        res.send(exist)
    }
   } catch (error) {
        console.log(error);
   }
})

route.put('/editUser/:id',async(req,res)=>{
    try {
        const userId=Number(req.params.id);
        console.log(userId);
        const {email,password}=req.body;
        console.log(email+ ' ' + password);
        const userdata=await pool.query("SELECT * FROM crud");
        const exist=userdata.rows.find((user)=>user.id===userId);
        console.log(exist);
        if(!exist){
            res.send("invalid update...!")
        }else{
            await pool.query(`UPDATE crud SET email=$1,password=$2 where id=$3`,[email,password,userId]);
            res.send("update successfull..!!");
        }
    } catch (error) {
        res.send(error)
    }
})

route.delete('/deleteUser/:id',async(req,res)=>{
    try {
        const userId=Number(req.params.id);
        console.log(userId);
       await pool.query("DELETE FROM crud WHERE id=$1",[userId]);
       res.send('row is deleted..!!')
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

module.exports=route;