import React from 'react';
import { AiTwotoneEdit,AiOutlineDelete } from 'react-icons/ai';
import EditUser from './EditUser';
import './../style.css';
import { deleteData, fetchData, getUser } from '../services/GetApi';
import { Link } from 'react-router-dom';

const Userdata = () => {
  const [getData,setGetData]=React.useState([]);
  const [showPop,setShowPop]=React.useState(false);
  const [bgBlur,setBgBlur]=React.useState(false);
  const [deleteItem,setDeleteItem]=React.useState(false);
  const [editItem,setEditItem]=React.useState('');
  const [editId,setEditId]=React.useState('');

  React.useEffect(()=>{
    async function apifetch() {
      try {
        const response=await fetchData();
        setGetData(response.rows)
        console.log(response.rows);
      } catch (error) {
        console.log(error);
      }
    }
    apifetch();
  },[deleteItem])

  const editHandler=async(e,id)=>{
    e.preventDefault();
    console.log(id);
    setEditId(id);
    const response=await getUser(id);
    setEditItem(response);
    console.log(response);
    setShowPop(!showPop);
    setBgBlur(!bgBlur);
  }

  const deleteHandler=async(e,id)=>{
    e.preventDefault();
    const result=await deleteData(id);
    setDeleteItem(!deleteItem);
    console.log(result);
  }

  return (
    <>  
        <div className="text-center popup-edit">
            {showPop ? <EditUser showPop={showPop} setShowPop={setShowPop} bgBlur={bgBlur} setBgBlur={setBgBlur} editItem={editItem} editId={editId} deleteItem={deleteItem} setDeleteItem={setDeleteItem} /> :null}
        </div>
        <div className="text-center">
          <div >
            <Link to={'/createuser'} style={{textDecoration:'none',color:'black'}}>CreateUsers</Link>
          </div>
        </div>
        <div className={bgBlur ? 'bgBlur text-center' : 'text-center'}>
          <br /><br />
        <div className="h1 h1-py">User List</div>
        {getData.map((item)=>{
          const {id,email,password}=item;
          return(
                <div className="d-flex p-2 " style={{'justifyContent':'center'}} key={id}>
                  <div className="h6 h6-py" style={{'marginLeft':'1rem'}}>{email}</div>
                  <div className="h6 h6-py" style={{'marginLeft':'1rem'}}>{password}</div>
                  <button onClick={(e)=>{editHandler(e,id)}}  style={{'border':'none','marginTop':'-0.5rem','backgroundColor':'white',marginLeft:'2rem'}} ><AiTwotoneEdit  /></button>
                  <button onClick={(e)=>{deleteHandler(e,id)}}  style={{'border':'none','marginTop':'-0.5rem','backgroundColor':'white',marginLeft:'2rem'}} ><AiOutlineDelete  /></button>
                </div>
                
          )
        })}
        </div>
        
    </>
  )
}

export default Userdata