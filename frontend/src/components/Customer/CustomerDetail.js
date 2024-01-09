import {
    Box,
    Button,
    FormLabel,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import "./Customer.css"; 
  const CustomerDetail = () => {
    const [inputs, setInputs] = useState();
    const id = useParams().id;
    // const [checked, setChecked] = useState(false);
    const history = useNavigate();
  
    useEffect(() => {
   
      const fetchHandler = async () => {
        await axios
          .get(`http://localhost:5000/customers/${id}`)
          .then((res) => res.data)
          .then((data) => setInputs(data.customer));
      };
      fetchHandler();
    }, [id]);
  
    const sendRequest = async () => {
      console.log("HERE")
      await axios
        .put(`http://localhost:5000/customers/${id}`, {
          customerId: String(inputs.customerId),
          customerName: String(inputs.customerName),
          customerPOC: String(inputs.customerPOC),
          customerAddress: String(inputs.customerAddress),
          customerEmail: String(inputs.customerEmail),
          customerPhone: String(inputs.customerPhone),
          customerType: String(inputs.customerType),
          customerCategory: String(inputs.customerCategory),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      sendRequest().then(() => history("/customers"));
    };
  
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
  
    return (
      <div>
        {inputs && (
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent={"center"}
              maxWidth={700}
              alignContent={"center"}
              alignSelf="center"
              marginLeft={"auto"}
              marginRight="auto"
              marginTop={10}
            >
              <FormLabel>Transaction Id</FormLabel>
              <TextField
                value={inputs.customerId}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="customerId"
              />
              <FormLabel>Name</FormLabel>
              <TextField
                value={inputs.customerName}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="customerName"
              />
              <FormLabel>Bank Details</FormLabel>
              <TextField
                value={inputs.customerPOC}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="customerPOC"
              />
              <FormLabel>Address</FormLabel>
              <TextField
                value={inputs.customerAddress}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="customerAddress"
              />
              <FormLabel>Email</FormLabel>
              <TextField
                value={inputs.customerEmail}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="customerEmail"
              />
              <FormLabel>Phone</FormLabel>
              <TextField
                value={inputs.customerPhone}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="customerPhone"
              />
              <FormLabel>Type</FormLabel>
              <TextField
                value={inputs.customerType}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="customerType"
              />
              <FormLabel>Category</FormLabel>
              <TextField
                value={inputs.customerCategory}
                onChange={handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
                name="customerCategory"
              />
  
              <Button variant="contained" type="submit">
                Update Customer
              </Button>
            </Box>
          </form>
        )}
      </div>
    );
  };
  
  export default CustomerDetail;
  