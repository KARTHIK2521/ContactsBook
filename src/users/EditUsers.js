import axios from 'axios';
import React, {useState ,useEffect } from 'react'
import {useHistory , useParams} from 'react-router-dom';

 const EditUsers = () => {
    let history=useHistory();
    const {id} =useParams();
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
    useEffect(() => {
        
         loadUser();
    }, []);
   
   const onSubmit = async e => {
       e.preventDefault();
    await axios.put(`http://localhost:3003/contacts/${id}`,user)
    history.push("/");
   };
   
   const loadUser = async () => {
       const result= await axios.get(`http://localhost:3003/contacts/${id}` );
       setUser(result.data);
   }
   

    return (
        <div className="container ">
            <div className="w-75 mx-auto shadow p-5">
                <h3 className="text-center mb-4">Edit User</h3>
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
            />
             </div>

             <div class="form-group">
             <label for="formGroupExampleInput">Email</label>
              <input type="text" className="form-control form-control-lg"   placeholder="Enter email"
               name='email' value={email} onChange={e => onInputChange(e)}/>
             </div>
             <div class="form-group">
             <label for="formGroupExampleInput">Mobile</label>
              <input type="text" className="form-control form-control-lg"   placeholder="Enter Mobile Number" 
              name='phone' value={phone} onChange={e => onInputChange(e)}/>
             </div>
             <div class="form-group">
             <label for="formGroupExampleInput">Company</label>
              <input type="text" className="form-control form-control-lg"   placeholder="Enter Website"
               name='website' value={website} onChange={e => onInputChange(e)}/>
             </div>
             <button type="submit"  className="form-control form-control-lg btn btn-warning">Update</button>

             </form>
             </div>
        </div>
    )
}

export default EditUsers;

