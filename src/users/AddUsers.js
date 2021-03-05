import axios from 'axios';
import React, {useState } from 'react'
import {useHistory} from 'react-router-dom';
 const AddUsers = () => {
    let history=useHistory();
   const  [user, setUser] = useState({
       name:" ",
       email:" ",
       phone:" ",
       website:" "
   });
  
   const {name,email,phone,website}=user;
   const onInputChange = e =>{
       
       setUser({...user,[e.target.name]: e.target.value })
   };
   
   const onSubmit = async e =>{
       e.preventDefault();
    await axios.post("http://localhost:3003/contacts",user)
    history.push("/");
   };
   

    return (
        <div className="container ">
            <div className="w-75 mx-auto shadow p-5">
                <h3 className="text-center mb-4">Add User</h3>
           <form onSubmit={e => onSubmit(e)}> 
           <label for="formGroupExampleInput">Name</label>
           <div class="form-group">
              <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
              required
            />
             </div>

             <div class="form-group">
             <label for="formGroupExampleInput">Email</label>
              <input type="email" className="form-control form-control-lg"   placeholder="Enter email"
               name='email' value={email} onChange={e => onInputChange(e)} required/>
             </div>
             <div class="form-group">
             <label for="formGroupExampleInput">Mobile</label>
              <input type="text" className="form-control form-control-lg"   placeholder="Enter Mobile Number" 
              name='phone' value={phone} onChange={e => onInputChange(e)} required/>
             </div>
             <div class="form-group">
             <label for="formGroupExampleInput">Company</label>
              <input type="text" className="form-control form-control-lg"   placeholder="Enter Website"
               name='website' value={website} onChange={e => onInputChange(e)} required />
             </div>
             <button type="submit"  className="form-control form-control-lg btn btn-primary">Submit</button>

             </form>
             </div>
        </div>
    )
}

export default AddUsers
