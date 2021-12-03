
import "./crud_building.css";
import React, { useState, Fragment,useEffect } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRowVisitorGarden";
import EditableRow from "./EditableRowVisitorGarden";
import axios from  "axios";
const data = [
  {
    "id": "",
    "firstName": "",
    "lastName": "",
    "apartmentNumber": "",
    "gname": "",
    "msg":"",
  },
 
]


export default function CrudVisitor() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    apartmentNumber: "",
    gname: "",
    msg:"",
  });

  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    apartmentNumber: "",
    gname: "",
    msg:"",
  });
 
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/dashboardVisitor",{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
  
      })
    .then(res => res.json())
    .then(
   
        (result)=>{
          let transformArray;
            console.log(result);
            transformArray =  result.visitorlist.map(item =>{
              return {
                firstName: item.fname,
                lastName: item.lname,
                aptnum: item.anum,
                gname:item.gardenName,
                msg:item.message,
                id: item.id
              }
            });
            console.log("test:::",transformArray);
            setContacts(transformArray)
        }
    )
},[]);
  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      apartmentNumber: addFormData.anum,
      gname: addFormData.gname,
      msg: addFormData.message,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    console.log(newContact)
    axios.post('http://127.0.0.1:8000/api/visitorGardenInquiry',newContact)
   .then(res=> console.log(res.data))
   .catch(error => {
     alert("Data could not be inserted. Try again")
     console.log(error.response)
        });
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      apartmentNumber: editFormData.anum,
      gname: editFormData.gname,
      msg: editFormData.message,
    };
 
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    axios.put('http://127.0.0.1:8000/api/updateVisitor',editedContact)
   .then(res=> console.log(res.data))
   .catch(error => {
     alert("Data could not be updated Try again")
     console.log(error.response)
        });
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      aptnum: contact.anum,
      gname: contact.gname,
      msg:contact.message,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (id) => {
   // let data = {id:id}
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === id);

    newContacts.splice(index, 1);

    setContacts(newContacts);
    console.log(id)
    axios.delete('http://127.0.0.1:8000/api/deleteVisitor',{ data: { id: id } })
   .then(res=> console.log(res.data))
   .catch(error => {
     alert("Data could not be deleted. Try again")
     console.log(error.response)
        });
  };

  

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
            {/* <th>ID</th> */}
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>APARTMENT# REQUESTED FOR VISIT</th>
            <th>GARDEN REQUESTED FOR VISIT</th>
            <th>QUERY</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
     
      <h2 class="text-center">Add a Visitor Inquiry for garden visit</h2>
      <form onSubmit={handleAddFormSubmit} class="text-center">
        <input
          type="text"
          name="firstName"
          required="required"
          placeholder="Enter first name..."
          onChange={handleAddFormChange}
          class="text-center"/>
        <input
          type="text"
          name="lastName"
          required="required"
          placeholder="Enter last name..."
          onChange={handleAddFormChange}
          class="text-center"/>
         <input
          type="text"
          name="gname"
          required="required"
          placeholder="Enter a garden name"
          onChange={handleAddFormChange}
          class="text-center"/>
       <input
          type="text"
          name="message"
          required="required"
          placeholder="Query"
          onChange={handleAddFormChange}
          class="text-center"/>
        <button type="submit">Add</button>
      </form>
      <div className="links">{
        <>
        <a href="/admin_visitor_crud">Add a Visitor Inquiry for apartment visit</a><br/>
       
        </>
        
      }

      </div>
    </div>
  );
};
