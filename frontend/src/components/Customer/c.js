import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Customer.css"; // Make sure to adjust the CSS file name
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

  return (
    <div className="card">
      <h3>{customerId}</h3>
      <h3>{customerName}</h3>
      <h3>{customerPOC}</h3>
      <h3>{customerAddress}</h3>
      <h3>{customerEmail}</h3>
      <h3>{customerPhone}</h3>
      <h3>{customerType}</h3>
      <h3>{customerCategory}</h3>
      <Button LinkComponent={Link} to={`/customers/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Customer;