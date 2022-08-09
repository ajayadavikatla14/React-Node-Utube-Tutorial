import React from 'react'
import { Link } from 'react-router-dom';
import {insertData} from './../services/GetApi';

const CreateUser = () => {
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');

    const submitHandler=async(e)=>{
        e.preventDefault();
        try {
            
            console.log();
            const response=await insertData({
                email:email,
                password:password
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        setEmail('');
        setPassword('');
    }

  return (
    <>
        <div className="text-center">
        <Link to='/userdata' className="dropdown-item">All Users</Link>
            <h1 className="h1 py-4" style={{'marginTop':'2rem'}}> Create User </h1>
            <form style={{'width':'20rem','margin':'auto'}} onSubmit={submitHandler}>
            <div className="form-group" >
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
                <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" value={password} className="form-control" id="exampleInputPassword1" placeholder="Password" 
                onChange={(e)=>{setPassword(e.target.value)}}  />
            </div>
           
            <button type="submit" className="btn btn-primary" style={{'marginTop':'1rem'}}>Submit</button>
            </form>
        </div>
    </>
  )
}

export default CreateUser