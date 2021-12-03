
import "./crud_building.css";
import React, { useState, Fragment,useEffect } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import axios from "axios";
const data = [
  {
    "id": "",
    "gardenName": "",
    "buildingNumber": ""
  },
 
]


export default function CrudGarden() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    gardenName: "",
    buildingNumber: "",
   
  });

  const [editFormData, setEditFormData] = useState({
    gardenName: "",
    buildingNumber: "",
   
  });
  //const [item, setItem] = useState([]);
  useEffect(()=>{
      fetch("http://127.0.0.1:8000/api/dashboardGarden")
      .then(res => res.json())
      .then(
   
        (result)=>{
          let transformArray;
            console.log(result);
            transformArray =  result.garden.map(item =>{
              return {
                gardenName: item.sname,
                buildingNumber: item.sid,
                //id: item.sid
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
      gardenName: addFormData.gardenName,
      buildingNumber: addFormData.buildingNumber,
      
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    console.log(newContact)
    axios.post('http://127.0.0.1:8000/api/addGarden',newContact)
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
      gardenName: editFormData.gardenName,
      buildingNumber: editFormData.buildingNumber,
      
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    console.log(newContacts)
    axios.put('http://127.0.0.1:8000/api/editGarden',editedContact)
   .then(res=> console.log(res.data))
   .catch(error => {
     alert("Data could not be updated. Try again")
     console.log(error.response)
        });
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.buildingNumber);

    const formValues = {
      gardenName: contact.gardenName,
      buildingNumber: contact.buildingNumber,
     
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (id) => {
    // let data = {
    //   gardenName:gardenName
    // }
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === id);

    newContacts.splice(index, 1);

   setContacts(newContacts);
    console.log(id)
    axios.delete('http://127.0.0.1:8000/api/deleteGarden',{ data: { id: id } })
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
              <th>Garden Name</th>
              <th>Building Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.buildingNumber ? (
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

      <h2  class="text-center">Add a Garden</h2>
      <form onSubmit={handleAddFormSubmit}class="text-center">
        <input
          type="text"
          name="gardenName"
          required="required"
          placeholder="Enter garden name"
          onChange={handleAddFormChange}
          class="text-center" />
        <input
          type="text"
          name="buildingNumber"
          required="required"
          placeholder="Enter building#"
          onChange={handleAddFormChange}
          class="text-center"/>
        
        <button type="submit">Add</button>
      </form>
      <div className="links">{
        <>
        <a href="/manager_plant"class="text-center">Manage Plants</a><br/>
        <a href="/manager_pool"class="text-center">Manage Pool</a><br/>
        {/* <a href="/manager_incident">Manage Incident</a> */}
        </>
        
      }

      </div>
    </div>
  );
};
