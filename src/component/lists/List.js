import React, { useState, useEffect } from "react";
import {Form, Modal, Table,Button,Alert} from 'react-bootstrap';
import "./list.css"

const List = () => {
  const initial = {
    firstName : "",
    lastName : "",
    email : "",
    birthday : "",
    description: ""
};

 const [isEditing, setIsEditing] = useState(-1);
const [formValue, setFormValue] = useState(initial);
const {firstName, lastName,email,birthday, description} = formValue;
const [userInfo, setUserInfo] = useState([]);
const [id, setId] = useState(1);
const [err, setErr] = useState(null);
const [show, setShow] = useState(false); 
const [infoShow, setInfoShow] = useState([]);
/* const [infoId, setInfoId] = useState(0); */
const handleClose = () =>{ 
      setShow(false);
      setFormValue(initial)
  };
  const handleShow = () => setShow(true);

  const [shows, setShows] = useState(false); 
  const handleCloses = () =>{ 
      setShows(false);
  };


const handleSubmit = (e) => {
    e.preventDefault();
     const currentTime = new Date();
     const userBirthday = new Date(birthday);
     let time_diff = currentTime - userBirthday;
     let age = Math.floor( time_diff / (1000 * 3600 * 24*365.25)); 
   
    if (firstName === "" || lastName === "" || email === "" || birthday === "" || age >30 || description=== "") {
        setErr("Veuillez renseigner tout les champs")
    }else if (isEditing>=0 ) {
        const newUsers = { id, ...formValue };
        const index = userInfo.findIndex((items) => items.id === isEditing);
        if (index !== -1) {
            const newData = [...userInfo];
            newData[index] = newUsers;
            setUserInfo(newData);
            handleClose()   
          }
    } else{
      const newUsers = { id, ...formValue };
        setId(id + 1);
        setUserInfo([...userInfo, newUsers]);
        localStorage.setItem('gladiator', JSON.stringify([...userInfo, newUsers]));
        handleClose()   
    }
setFormValue(initial); 
}

useEffect(() => {
    const getItems = localStorage.getItem('gladiator');
    if (getItems) {
        setUserInfo(JSON.parse(getItems));
    }
  }, []);
  
let dat = new Date();
let datesEntre = dat.toISOString().split("T")[0];

const handleChange = (e) =>{
  let { name, value } = e.target;
setFormValue({ ...formValue, [name]: value }) ;
}

  const editUser = (id,firstName,lastName,email,birthday,description) =>{
      setFormValue({firstName,lastName,email,birthday,description})
      setIsEditing(id)
      handleShow()
    }  
    /* console.log(isEditing); */

//-------------------------Delete category ------------------------
  const onDeleteCategory = (index) => {
    const  isDelete = window.confirm("Voulez vous supprimer cette catégorie ?");
     if (isDelete === true) {
    const newData = userInfo.filter((item) => item.id !== index);
    setUserInfo(newData);
    localStorage.setItem('gladiator', JSON.stringify(newData));
     }
    }  

//-----------------------Detail Id ----------------------------------
const handleShows = (id) =>{
    const items = userInfo.find((items) => items.id === id);
    setInfoShow(items);
     setShows(true);  
 }


  return (
      <div className="container contCat">
          <div className="categ">
              <h1 className="titleCat">Gladiators </h1>
              <button className="btnCat" onClick={handleShow} >Enregistrez-vous</button>
          </div>
         { userInfo.length ===0 ?
           <Alert variant="danger">Ilya aucun gladiator</Alert>
          :   
          <Table striped bordered hover variant="dark">
              <thead>
                  <tr className="stylet">
                      <th style={{ textAlign: "center" }}>No.</th>
                      <th style={{ textAlign: "center" }}>Nom</th>
                      <th style={{ textAlign: "center" }}>Prenom</th>
                      <th style={{ textAlign: "center" }}>Email</th>
                      <th style={{ textAlign: "center" }}>Date de naissance</th>
                      <th style={{ textAlign: "center" }}>Description</th>
                      <th style={{ textAlign: "center" }}>Actions</th>
                  </tr>
              </thead>
              <tbody style={{ textAlign: "center" }}>
                  {userInfo.map((item, index) => {
                      return (
                          <tr key={index}>
                              <th scope="row" onClick={() => handleShows(item.id)}>{index + 1}</th>
                              <td>{item.firstName}</td>
                              <td>{item.lastName}</td>
                              <td>{item.email}</td>
                              <td>{item.description}</td>
                              <td>{item.birthday}</td>
                              <td>
                                  <button
                                      className="btn-edit"
                                      onClick={(e) => editUser(item.id,item.firstName,item.lastName,item.email,item.birthday,item.description)}
                                  >Edit
                                  </button>
                                  <button
                                      className="btn-delete"
                                      onClick={(e) => onDeleteCategory(item.id)}
                                  >
                                      Delete
                                  </button>
                              </td>
                          </tr>
                      );
                  })}
              </tbody>
          </Table> 
          }
          <Modal show={show} onHide={handleShow}>
              <Modal.Header>
                    <Modal.Title> {firstName?"Modifier votre enregistrement":"Enregistrez-vous"}  </Modal.Title>
                    <button type="button" className="btn-close improveBtn" onClick={handleClose} aria-label="close"></button>
                </Modal.Header>
                {err &&<Alert variant="danger">{err} </Alert>}
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                      <Form.Group className="mb-3">
                          <Form.Label>Nom</Form.Label>
                          <Form.Control type="text" className={err&&'error'}  name="firstName" value={firstName}  onChange={handleChange} />
                      </Form.Group>
                      <Form.Group className="mb-3">
                          <Form.Label>Prenom</Form.Label>
                          <Form.Control type="text" name="lastName" className={err&&'error'}value={lastName}  onChange={handleChange}/>
                      </Form.Group>
                      <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email"  name="email" className={err&&'error'} value={email}  onChange={handleChange}/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Date de naissance</Form.Label>
                           <Form.Control type="date" name="birthday" className={err&&'error'}value={birthday} onChange ={handleChange}  max={datesEntre} />
                            </Form.Group>
                      <Form.Group className="mb-3">
                          <Form.Label>Description</Form.Label>
                          <Form.Control as="textarea" rows={3} className={err&&'error'} name="description" value={description} onChange ={handleChange}/>
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Annuler
                        </Button>
                        <Button type="submit" variant="primary">
                              {firstName?"Modifier":"Ajouter"} 
                        </Button>
                    </Modal.Footer>
                </Form>
         </Modal>
      <Modal show={shows} onHide={handleShows}>
              <Modal.Header>
                  <Modal.Title>Informations utilisateurs detaillées</Modal.Title>
                  <button type="button" className="btn-close improveBtn" onClick={handleCloses} aria-label="close"></button>
              </Modal.Header>
              <div className="post">
                  <div className="postInfo">
                      <div className="postInf">
                          <div className="postName" style={{ marginBottom: "0.5rem" }}>
                              <b>Nom :</b> {infoShow.firstName}
                          </div>
                          <div className="postFirst" style={{ marginBottom: "0.5rem" }}>
                             <b>Prenom :</b> {infoShow.lastName}
                          </div>
                          <div className="postEmail" style={{ marginBottom: "0.5rem" }}>
                             <b>Email :</b> {infoShow.email}
                          </div>
                          <div className="postEmail" style={{ marginBottom: "0.5rem" }}>
                             <b>Email :</b> {infoShow.birthday}
                          </div>
                          <div className="postDescs" style={{ marginBottom: "0.5rem" }}>
                            <b>Messages :</b>  {infoShow.description}
                         </div>
                      </div>
                  </div>
              </div>
          </Modal>
     </div>
  )
}

export default List
