import React from 'react'
import CreateUser from './components/CreateUser';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Userdata from './components/Userdata';
import EditUser from './components/EditUser';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<CreateUser />} />
          <Route path='/createuser' element={<CreateUser />} />
          <Route path='/userdata' element={<Userdata />  } />
          <Route path='/edituser' element={<EditUser />  } />
        </Routes>
      </Router>
    </>
  )
}

export default App