import React from 'react'
import { editUser } from '../services/GetApi';

const EditUser = (props) => {
  const {showPop,setShowPop,setBgBlur,editItem,editId,deleteItem,setDeleteItem}=props;
  const [newEmail,setNewEmail]=React.useState(editItem.email);
  const [newPassword,setNewPassword]=React.useState(editItem.password);
  
  const popHandler=async(e,id)=>{
    e.preventDefault();
    console.log('changed data');
    const data={email:newEmail,password:newPassword}
    const response=await editUser(id,data);
    setDeleteItem(!deleteItem);
    console.log(response);
    setShowPop(!showPop);
    setBgBlur(!setBgBlur);
  }
  return (
    <>
        <form style={{'width':'20rem','margin':'auto','backgroundColor':'skyblue'}} onSubmit={(e)=>popHandler(e,editId)}>
            <div className="form-group" >
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{'width':'10rem','margin':'auto'}} value={newEmail} onChange={(e)=>setNewEmail(e.target.value)} />
                <small id="emailHelp" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"   style={{'width':'10rem','margin':'auto'}}
                value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} />
            </div>
           
            <button type="submit" className="btn btn-primary" style={{'marginTop':'1rem'}}>Submit</button>
            </form>
    </>
  )
}

export default EditUser