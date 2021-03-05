import React from 'react'
import {Container,Row,Col,Form,FormControl} from 'react-bootstrap'
import {Link}  from 'react-router-dom'

const Contacts = () =>  {
    return (
        <div className="container ">

           <div class="row">

               <div class="col-sm-8 w-50 m-5">
               <div className="ui list">
                 <div className="item">
                 <i class="big orange address book outline icon"></i>
                 <div className="content">
                      <div className="header"> <h5>Conatcts </h5></div>
                      <div class="description">This is an Contact List</div>  
                 </div>
                 </div>
                  </div>
               </div>
               </div>

               <div className="row">
                 <div className="col-sm w-25 ml-5">
                   <form>
                       <div className="ui form">
                       <div className="inline fields">
                       <div className="eight wide field">
                       <div className="ui icon input">
                   <input type="text" placeholder="Search Conatcts"/>
                   <i class="search icon"></i>
                   </div>
                   <Link  to="/users/add" className="ui orange button sha" >
                   AddContact
                   </Link>
                           </div>
                           </div>
                       </div>
                   </form>
                   </div>
                 </div>



         </div>
           
       
    )
}

export default Contacts;
