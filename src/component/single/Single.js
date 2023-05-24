import React, { useState, useEffect } from "react";
import { Link,useNavigate, useLocation } from "react-router-dom";
import {Card,Container} from 'react-bootstrap';
import "./single.css"
const Single = () => {
     const [userDetail, setUserDetail] = useState([]);
     const [infoShow, setInfoShow] = useState([]);
     const location = useLocation();
     const postId = location.pathname.split("/")[2];
     const navigate = useNavigate();
     console.log(typeof postId);
    
     useEffect(() => {
          const getItems = localStorage.getItem('gladiator');
          if (getItems) {
              setUserDetail(JSON.parse(getItems));
          }
        
        }, []);

        const items = userDetail.find((items) => items.id === parseInt(postId));
   
  return (
     <Container className="cards">
       {  items && <Card>
           <Card.Body>
             <Card.Title>Gladiators INFO</Card.Title>
                <div>
                  <span> Nom </span>  : {items.firstName} 
                </div>
                <div>
                  <span>Prenom</span>  : {items.lastName} 
                </div>
                <div>
                   <span>Email</span>  : {items.email} 
                </div>
                <div>
                  <span>Date de naissance</span>  :{items.birthday}  
                </div>
                <div>
                <span>Description</span>  : {items.description} 
                </div>  
              <Link to="/">Retour</Link>
           </Card.Body>
         </Card>}
         </Container>
       );
}

export default Single
