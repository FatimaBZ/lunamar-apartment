import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.aptnum}</td>
      <td>{contact.gname}</td>
      <td>{contact.msg}</td>
      <td>
        {/* <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button> */}
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Decline
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
