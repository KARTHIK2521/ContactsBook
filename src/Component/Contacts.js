import React from 'react'
import {Container,Row,Col,Form,FormControl} from 'react-bootstrap'
import './Contact.css';


const Contacts = () => {
    return (
       
         <Container  className='contact-sec'> 
            <Row>
              <Col sm={4}>
              <div className="ui list">
                 <div className="item">
                 <i class="big orange address book outline icon"></i>
                 <div className="content">
                      <div className="header"> <h5>Conatcts </h5></div>
                      <div class="description">This is an Contact List</div>
                      <div className="item"> 
                     
                      </div>
                 </div>
                 </div>
              </div>
              </Col>
              <Col sm={4} >
              <div className="content"><p>Sort by: <b>Date Created</b><i className="angle down icon"></i></p></div> 
              </Col>
            </Row>

            <Row className='sec-contact'>
              <Col sm={8} >
              
            <form>
            <div class="ui form">
                <div className="inline fields">
                   <div class="eight wide field">
                   <div class="ui icon input">
                   <input type="text" placeholder="Search Conatcts"/>
                   <i class="search icon"></i>
                   
                   </div>
                   
                   <button  className="ui orange button">
                   AddContact
                   </button>
                
                   </div>
                </div>
            </div>
            </form>
            

            </Col>   
            </Row>

         </Container>
         
       



        
      
    )
}

export default Contacts
