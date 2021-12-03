
import "./crud_building.css";
import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRowBuilding";
import EditableRow from "./EditableRowBuilding";
import axios from "axios";

const data = [
  {
    "id": "",
    "buildingName": "",
    "address": "",
  },

]


export default function CrudBuilding() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    buildingName: "",
    address: ""
    
  });

  const [editFormData, setEditFormData] = useState({
    buildingName: "",
    address: ""
  });
  
  
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/dashboardBuilding",{
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
            transformArray =  result.building.map(item =>{
              return {
                buildingName: item.bname,
                address: item.baddress,
                id: item.bnum
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
      buildingName: addFormData.buildingName,
      address: addFormData.address,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    console.log(newContact)
 axios.post('http://127.0.0.1:8000/api/addBuilding',newContact)
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
      buildingName: editFormData.buildingName,
      address: editFormData.address
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    axios.put('http://127.0.0.1:8000/api/updateBuilding',editedContact)
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
      buildingName: contact.buildingName,
      address: contact.address
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (buildingId) => {
    //let data = {buildingName:buildingName}
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === buildingId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
   // console.log("Building name", data);
    axios.delete('http://127.0.0.1:8000/api/building',{ data: { buildingId: buildingId } })
    .then(res=> console.log(res.data))
    .catch(error => {
      alert("Data could not be deleted. Try again")
      console.log(error.response)
         });
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit} className="crud">
        <table>
          <thead>
            <tr>
              <th>Building Name</th>
              <th>Building Address</th>
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

      <h2 class="text-center">Add a Building</h2>
      <form onSubmit={handleAddFormSubmit} className="crud" class="text-center">
        <input
          type="text"
          name="buildingName"
          required="required"
          placeholder="Enter building name"
          onChange={handleAddFormChange}
          class="text-center"/>
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter building address"
          onChange={handleAddFormChange}
          class="text-center"/>
        
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
