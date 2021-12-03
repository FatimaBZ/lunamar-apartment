
import "./crud_building.css";
import React, { useState, Fragment,useEffect } from "react";
import { nanoid } from "nanoid";
//import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRowApartment";
import EditableRow from "./EditableRowApartment";
import axios from "axios";
const data = [
  {
    "apartmentNumber": "",
    "buildingNumber": "",
  },
  
 
]


export default function CrudApartment() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    apartmentNumber: "",
    buildingNumber:"",
  });

  const [editFormData, setEditFormData] = useState({
    apartmentNumber: "",
    buildingNumber:"",
  });
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/dashboardApartment",{
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
            transformArray =  result.apartment.map(item =>{
              return {
                apartmentNumber: item.anum,
                buildingNumber: item.bnum,
                
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

    console.log(event);

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
    console.log("New form data  ",newFormData);
    
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
    console.log("New Form Data ",newFormData)
  
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      apartmentNumber: addFormData.apartmentNumber,
      buildingNumber: addFormData.buildingNumber,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    console.log(newContact)
 axios.post('http://127.0.0.1:8000/api/addApartment',newContact)
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
      apartmentNumber: editFormData.apartmentNumber,
      buildingNumber: editFormData.buildingNumber,
  
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    console.log(newContacts)
    axios.put('http://127.0.0.1:8000/api/updateApartment',editedContact)
   .then(res=> console.log(res.data))
   .catch(error => {
     alert("Data could not be updated Try again")
     console.log(error.response)
        });
    setEditContactId(null);

   
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    console.log("contact.id::",contact.apartmentNumber)
    setEditContactId(contact.apartmentNumber);

    const formValues = {
      
      apartmentNumber: contact.apartmentNumber,
      buildingNumber: contact.buildingNumber,
    };

    setEditFormData(formValues);
    console.log("handle edit click")
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (apartmentNumber) => {
     let data = {apartmentNumber:apartmentNumber}
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.apartmentNumber === apartmentNumber);

    newContacts.splice(index, 1);

    setContacts(newContacts);
    console.log(apartmentNumber)
 axios.delete('http://127.0.0.1:8000/api/deleteApartment',{ data: { apartmentNumber: apartmentNumber } })
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
              
              <th>Apartment Number</th>
              <th>Building Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.apartmentNumber ? (
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

      <h2 class="text-center">Add Apartment </h2>
      <form onSubmit={handleAddFormSubmit} class="text-center">
       <input
          type="number"
          name="apartmentNumber"
          required="required"
          placeholder="Enter apartment#"
          onChange={handleAddFormChange}
          class="text-center"/>
        
        <input
          type="number"
          name="buildingNumber"
          required="required"
          placeholder="Enter building #"
          onChange={handleAddFormChange}
          class="text-center"/>
        <button type="submit" >Add</button>
      </form>
      <div className="links">{
        <>
        <a href="/admin_owner_crud" class="text-center">Assign an apartment to an Owner</a><br/>
       
        </>
        
      }

      </div>
    </div>
  );
};
