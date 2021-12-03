
import "./crud_building.css";
import React, { useState, Fragment,useEffect } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRowPlant";
import EditableRow from "./EditableRowPlant";
import axios from "axios";
const data = [
  {
    "id": "",
    "plantName": "",
    //"buildingName": "3 waterfoot road",
    "gardenNumber": "",
    
  }
]


export default function CrudPlant() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    plantName: "",
    gardenNumber: "",
   
  });

  const [editFormData, setEditFormData] = useState({
    plantName: "",
    //buildingName: "",
    gardenNumber: "",
    
  });
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/dashboardPlant",{
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
            transformArray =  result.plants.map(item =>{
              return {
                plantName: item.pname,
                gardenNumber: item.sid,
                id:item.pid,
                
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
      plantName: addFormData.plantName,
      //buildingName: addFormData.buildingName,
      gardenNumber: addFormData.gardenNumber,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    console.log(newContact)
    axios.post('http://127.0.0.1:8000/api/addPlant',newContact)
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
      plantName: editFormData.plantName,
      //buildingName: editFormData.buildingName,
      gardenNumber: editFormData.gardenNumber,
      
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    console.log(newContacts)
    axios.put('http://127.0.0.1:8000/api/editPlant',editedContact)
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
      plantName: contact.plantName,
     // buildingName: contact.buildingName,
      gardenNumber: contact.gardenNumber,
     
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (id) => {
    // let data = {
    //   plantName:plantName
    // }
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === id);

    newContacts.splice(index, 1);

    setContacts(newContacts);
    console.log(id)
    axios.delete('http://127.0.0.1:8000/api/deletePlant',{ data: { id: id } })
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
              <th>Plant Name</th>
              <th>Garden Number</th>
              
              {/* <th>Building Name</th> */}
              
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

      <h2 class="text-center">Add a Plant</h2>
      <form onSubmit={handleAddFormSubmit} class="text-center">
        <input
          type="text"
          name="plantName"
          required="required"
          placeholder="Enter a plant..."
          onChange={handleAddFormChange}
          class="text-center"/>
        {/* <input
          type="text"
          name="buildingName"
          required="required"
          placeholder="Enter an building name..."
          onChange={handleAddFormChange}
        /> */}
        <input
          type="text"
          name="gardenNumber"
          required="required"
          placeholder="Enter a Garden number..."
          onChange={handleAddFormChange}
          class="text-center"/>
        
        <button type="submit">Add</button>
      </form>
      <div>
      {/* <a href="/manager_incident">Manage Incident</a><br/> */}
        <a href="/manager_pool">Manage Pool</a><br/>
        <a href="/manager_garden">Manage Garden</a>
      </div>
    </div>
  );
};
