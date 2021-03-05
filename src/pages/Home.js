import React ,{useState , useEffect} from 'react'
import axios from 'axios';
import {Link}  from 'react-router-dom'
import Contacts from '../Component/Contacts';


const Home = () => {
 
    const  [users, setUser] = useState([]);

   useEffect(() => {
    
         loadUsers();
   }, [])

   const loadUsers = async () =>{
       const result= await axios.get("http://localhost:3003/contacts");
        setUser(result.data.reverse());
       
   }

   const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/contacts/${id}`);
    loadUsers();
  };

    
    return (
        <div className="container  mr-5 py-lg-3">
               
              <div className="row">
                <div class="table-responsive col-md-8 py-4 mr-3">
                <table class="table border shadow ">
                  <thead class="thead-light">
                     <tr>
                         <th scope="col-sm-1">+</th>
                         <th scope="col-sm-3">Basic Info</th>
                         <th scope="col-sm-4">Company</th>
                         <th scope="col=sm-4">Actions</th>
                     </tr>
                </thead>
               <tbody>
               {
                   users.map((user, index) =>(
                       <tr>
                    <th scope="row">{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                        <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                        <Link class="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                    </td>
                    </tr>
                   ))
                   
                }
                
               </tbody>
            </table>
              </div>

              
             
              
    


                </div> 
            </div>
    )
}

export default Home;
