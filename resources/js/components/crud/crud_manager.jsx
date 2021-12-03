import "./crud_building.css";
import React, { useState, Fragment,useEffect } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRowManager";
import EditableRow from "./EditableRowManager";
import axios from  "axios";
const data = [
  {
    "id": "",
    "firstName": "",
    "lastName": "",
  //  "passwrd": "",
    "email": ""
  },
 
]


export default function CrudManager() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
   // passwrd: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
   // passwrd: "",
    email: "",
  });
    useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/dashboardManager",{
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
            transformArray =  result.manager.map(item =>{
              return {
                firstName: item.fname,
                lastName: item.lname,
                // passwrd: item.passwrd,
                email:item.email,
                id: item.empid
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
      passwrd: addFormData.passwrd,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    console.log(newContact)
    axios.post('http://127.0.0.1:8000/api/addManager',newContact)
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
     // passwrd: editFormData.passwrd,
      email: editFormData.email,
    };
 
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    axios.put('http://127.0.0.1:8000/api/editManager',editedContact)
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
     // passwrd: contact.passwrd,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (id) => {
    //let data = {email:email}
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === id);

    newContacts.splice(index, 1);

    setContacts(newContacts);
    console.log(id)
    axios.delete('http://127.0.0.1:8000/api/deleteManager',{ data: { id: id } })
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
              <th>First Name</th>
              <th>Last Name</th>
              {/* <th>Password</th> */}
              <th>Email</th>
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

      <h2 class="text-center">Add a Manager</h2>
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
          type="password"
          name="passwrd"
          required="required"
          placeholder="Enter a password..."
          onChange={handleAddFormChange}
          class="text-center"/>
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
          class="text-center"/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
