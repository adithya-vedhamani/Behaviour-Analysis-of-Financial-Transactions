import React, { useEffect, useState } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Customer.css";

const URL = "http://localhost:5000/customers";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Adjust this based on your preference
  const navigate = useNavigate();

  useEffect(() => {
    fetchHandler().then((data) => setCustomers(data.customers));
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleUpdate = (customerId) => {
    navigate(`/customers/${customerId}`);
  };

  const handleDelete = async (customerId) => {
    await axios.delete(`${URL}/${customerId}`);
    fetchHandler().then((data) => setCustomers(data.customers));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer ID</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>POC</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : customers
            ).map((customer, i) => (
              <TableRow key={i}>
                <TableCell>{customer.customerId}</TableCell>
                <TableCell>{customer.customerName}</TableCell>
                <TableCell>{customer.customerPOC}</TableCell>
                <TableCell>{customer.customerAddress}</TableCell>
                <TableCell>{customer.customerEmail}</TableCell>
                <TableCell>{customer.customerPhone}</TableCell>
                <TableCell>{customer.customerType}</TableCell>
                <TableCell>{customer.customerCategory}</TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    to={`/customers/${customer._id}`}
                    sx={{ mr: 1 }}
                  >
                    Update
                  </Button>
                  <Button
                    color="error"
                    onClick={() => handleDelete(customer._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={customers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          
        />
        
      </TableContainer>

      <div className="add-customer-button">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/add"
        >
          Add Customer
        </Button>
      </div>
    </div>
  );
};

export default Customers;
