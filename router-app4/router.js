const express=require("express");
let accounts = require("./databse");
const route=express.Router()

route.get('/accounts',(req,res)=>{
    res.json({userdata:accounts})
})

route.post('/accounts',(req,res)=>{
    const insertAccount=req.body;
    accounts.push(insertAccount);
    res.json(accounts);
})

//get specific account
route.get('/accounts/:id',(req,res)=>{
    const accountid=Number(req.params.id);
    const findAccount=accounts.find((acc)=>acc.id===accountid);
    if(!findAccount){
        res.status(500).send("user not found.!!")
    }else{
        res.json(findAccount)
    }
})

//put method
route.put('/accounts/:id',(req,res)=>{
    const accountid=Number(req.params.id);
    const body=req.body;
    const findAccount=accounts.find((acc)=>acc.id===accountid);
    const index=accounts.indexOf(findAccount);

    if(!findAccount){
        res.status(500).send("user details not found .. unable to upload..!!")
    }else{
        const updatedVal=[{...findAccount,...body}]
        accounts[index]=updatedVal;
        // console.log([{...accounts,...body}]);
        res.json(accounts);
    }
})

//delete an account
route.delete('/accounts/:id',(req,res)=>{
    const delAccount=Number(req.params.id);
    const findAccount=accounts.filter((acc)=>acc.id!==delAccount);
    if(findAccount.length!==accounts.length){
         accounts=findAccount;
        res.json(accounts);
    }else{
        res.send("no account found..!!!")
    }
})

module.exports=route;