
import "./crud_building.css";
import React, { useState, Fragment,useEffect} from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRowIncident";
import EditableRow from "./EditableRowIncident";
import axios from "axios";
const data = [
  {
    "id": "",
    "incidentName": "",
    "ownerId": "",
    
  },
  
]


export default function CrudIncident() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    incidentName: "",
    ownerId: "",
   
  });

  const [editFormData, setEditFormData] = useState({
    incidentName: "",
    ownerId: "",
   
  });
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/dashboardIncident",{
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
            transformArray =  result.incident.map(item =>{
              return {
                incidentName: item.incident,
                ownerId: item.empid,
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
      incidentName: addFormData.incidentName,
      apartmentNumber: addFormData.apartmentNumber,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    axios.post('http://127.0.0.1:8000/api/addIncident',newContact)
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
      incidentName: editFormData.incidentName,
      ownerId: editFormData.ownerId,
      
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    axios.put('http://127.0.0.1:8000/api/editIncident',editedContact)
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
      incidentName: contact.incidentName,
      ownerId: contact.ownerId,
     
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
    axios.delete('http://127.0.0.1:8000/api/deleteIncident',{ data: { id: id } })
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
              <th>Incident</th>
              <th>User Id Of the Owner</th>
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

      <h2 class="text-center">Register an Incident</h2>
      <form onSubmit={handleAddFormSubmit} class="text-center">
        <input
          type="text"
          name="incidentName"
          required="required"
          placeholder="Enter  Incident..."
          onChange={handleAddFormChange}
          class="text-center"/>
        <input
          type="integer"
          name="apartmentNumber"
          required="required"
          placeholder="Enter apartment.."
          onChange={handleAddFormChange}
          class="text-center"/>
        
        <button type="submit">Add</button>
      </form>
      <div>
      <a href="/service_crud">Manage Service Requests</a><br/>
        {/* <a href="/manager_pool">Manage Pool</a><br/>
        <a href="/manager_garden">Manage Garden</a> */}
      </div>
      </div>
    
  );
};
