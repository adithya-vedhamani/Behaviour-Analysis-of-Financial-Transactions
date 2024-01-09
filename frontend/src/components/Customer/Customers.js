import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#394240", // Dark color for table head
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  },
  borderBottom: "2px solid #394240"
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f0f0f0" // Light color for odd rows
  },
  "&:last-child td, &:last-child th": {
    border: 0
  },
  borderBottom: "2px solid #394240",
  borderRadius: "8px"
}));

const URL = "http://localhost:5000/customers";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

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
              <StyledTableCell>Transaction ID</StyledTableCell>
              <StyledTableCell>To:</StyledTableCell>
              <StyledTableCell>From:</StyledTableCell>
              <StyledTableCell>Email Id</StyledTableCell>
              <StyledTableCell>Phone Number</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : customers
            ).map((customer, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell>{customer.customerId}</StyledTableCell>
                <StyledTableCell>{customer.customerName}</StyledTableCell>
                <StyledTableCell>{customer.customerPOC}</StyledTableCell>
                <StyledTableCell>{customer.customerAddress}</StyledTableCell>
                <StyledTableCell>{customer.customerEmail}</StyledTableCell>
                <StyledTableCell>{customer.customerCategory}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    color="error"
                    onClick={() => handleDelete(customer._id)}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
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
    </div>
  );
};

export default Customers;
