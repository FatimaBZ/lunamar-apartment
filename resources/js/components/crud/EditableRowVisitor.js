import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter first name..."
          name="firstName"
          value={editFormData.firstName}
          onChange={handleEditFormChange}
          readonly ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter last name..."
          name="lastName"
          value={editFormData.lastName}
          onChange={handleEditFormChange}
          readonly></input>
      </td>
      <td>
        <input
           type="text"
           name="ApartmentNumber"
           required="required"
           placeholder="Enter an apt#"
          value={editFormData.anum}
          onChange={handleEditFormChange}
          readonly></input>
      </td>
      <td>
        <input
          type="text"
          name="message"
          required="required"
          placeholder="Query"
          value={editFormData.message}
          onChange={handleEditFormChange}
          readonly></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
