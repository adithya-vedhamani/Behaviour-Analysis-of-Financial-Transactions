import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Customer.css"; 
const Customer = (props) => {
  const history = useNavigate();
  const { _id, customerId, customerName, customerPOC, customerAddress, customerEmail, customerPhone, customerType, customerCategory } = props.customer;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/customers/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/customers"));
  };

  const buttonStyles = {
    updateButton: {
      backgroundColor: "#4caf50", 
      color: "white",
      marginRight: "5px",
    },
    deleteButton: {
      backgroundColor: "#f44336", 
      color: "white",
    },
    hoverEffect: {
      opacity: 0.8,
    },
  };

  return (
    <tr>
      <td>{customerId}</td>
      <td>{customerName}</td>
      <td>{customerPOC}</td>
      <td>{customerAddress}</td>
      <td>{customerEmail}</td>
      <td>{customerPhone}</td>
      <td>{customerType}</td>
      <td>{customerCategory}</td>
      <td className="actions">
        <Button
          LinkComponent={Link}
          to={`/customers/${_id}`}
          sx={{ ...buttonStyles.updateButton, ...buttonStyles.hoverEffect }}
        >
          Update
        </Button>
        <Button
          color="error"
          onClick={deleteHandler}
          sx={{ ...buttonStyles.deleteButton, ...buttonStyles.hoverEffect }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Customer;
