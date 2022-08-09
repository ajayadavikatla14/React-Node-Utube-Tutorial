const express=require('express');
var router=express.Router();

const credentials={
    email:'admin@gmail.com',
    password:'admin123'
}

router.post('/login',(req,res)=>{
    const {email,password}=req.body;
    if(email===credentials.email && password===credentials.password){
        req.session.user=email;
        // res.send('login successful');
        res.render('dashboard',{user:req.session.user})
    }else{
        res.send('Invalid Credentials.!!')
    }
})

router.get('/logout',(req,res)=>{
    req.session.destroy(function(err) {
       if(err){
        console.log(err);
       }else{
        res.render('base',{title:'Express'})
       }
    })
})

module.exports=router;