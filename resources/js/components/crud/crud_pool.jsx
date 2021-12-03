
import "./crud_building.css";
import React, { useState, Fragment,useEffect } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRowPool";
import EditableRow from "./EditableRowPool";
import axios from "axios";
const data = [
  {
    "id": "",
    "poolName": "",
    "details": "",
    
  },
  // {
  //   "id": 2,
  //   "poolName": "Jessica warren",
  //   "details": "4 tall town",
    
  // },
  // {
  //   "id": 3,
  //   "poolName": "Tony Frank",
  //   "details": "11 lesly road",
    
  // },
  // {
  //   "id": 4,
  //   "poolName": "Jeremy Clark",
  //   "details": "333 miltown manor",
    
  // },
  // {
  //   "id": 5,
  //   "poolName": "Raymond Edwards",
  //   "details": "99 blue acres",
    
  // }
]


export default function CrudPool() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    poolName: "",
    details: "",
    
  });

  const [editFormData, setEditFormData] = useState({
    poolName: "",
    pdetails: "",
    
  });
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/dashboardPool",{
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
            transformArray =  result.pool.map(item =>{
              return {
                poolName: item.pname,
                details: item.pdetails,
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
      poolName: addFormData.poolName,
      details: addFormData.details,
     
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    console.log(newContact)
    axios.post('http://127.0.0.1:8000/api/addPool',newContact)
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
      poolName: editFormData.poolName,
      details: editFormData.details,
     
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    axios.put('http://127.0.0.1:8000/api/editPool',editedContact)
   .then(res=> console.log(res.data))
   .catch(error => {
     alert("Data could not be updated. Try again")
     console.log(error.response)
        });
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      poolName: contact.poolName,
      details: contact.details,
      
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (id) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === id);

    newContacts.splice(index, 1);

    setContacts(newContacts);
    console.log(id)
    axios.delete('http://127.0.0.1:8000/api/deletePool',{ data: { id: id } })
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
              <th>Pool Name</th>
              <th>Details</th>
              
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

      <h2 class="text-center">Add a Pool</h2>
      <form onSubmit={handleAddFormSubmit} class="text-center">
        <input
          type="text"
          name="poolName"
          required="required"
          placeholder="Enter pool name..."
          onChange={handleAddFormChange}
          class="text-center"/>
        <input
          type="text"
          name="details"
          required="required"
          placeholder="Enter details..."
          onChange={handleAddFormChange}
          class="text-center"/>
        
        <button type="submit">Add</button>
      </form>
      <div>
      <a href="/manager_plant">Manage Plants</a><br/>
        {/* <a href="/manager_incident">Manage Incident</a><br/> */}
        <a href="/manager_garden">Manage Garden</a>
      </div>
    </div>
  );
};