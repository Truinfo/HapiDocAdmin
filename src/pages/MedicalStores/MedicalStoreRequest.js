import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Grid,
  Typography,
  TextField,
  Menu,
  IconButton,
  MenuItem,
  Breadcrumbs,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FiInfo } from "react-icons/fi";

const MedicalStoreRequest = () => {

  const [requests, setRequests] = useState([
    {
      id: 1,
      storeName: "ABC Medical Store",
      contactNumber: "1234567890",
      email: "abcmedical@example.com",
      address: "123 Main Street, Cityville",
      identityProof: "path/to/identity/proof.jpg",
      approvalCertificate: "path/to/approval/certificate.jpg",
      ownerName: "John Doe",
      ownerContactNumber: "9876543210",
      ownerEmail: "johndoe@example.com",
      ownerAddress: "456 Elm Street, Townsville",
      status: "Pending",
    },
    {
      id: 2,
      storeName: "XYZ Pharmacy",
      contactNumber: "2345678901",
      email: "xyzpharmacy@example.com",
      address: "789 Oak Avenue, Villagetown",
      identityProof: "path/to/identity/proof2.jpg",
      approvalCertificate: "path/to/approval/certificate2.jpg",
      ownerName: "Jane Smith",
      ownerContactNumber: "8765432109",
      ownerEmail: "janesmith@example.com",
      ownerAddress: "567 Pine Road, Hamletville",
      status: "Approved",
    },
    {
      id: 3,
      storeName: "ABC Medical Store",
      contactNumber: "1234567890",
      email: "abcmedical@example.com",
      address: "123 Main Street, Cityville",
      identityProof: "path/to/identity/proof.jpg",
      approvalCertificate: "path/to/approval/certificate.jpg",
      ownerName: "John Doe",
      ownerContactNumber: "9876543210",
      ownerEmail: "johndoe@example.com",
      ownerAddress: "456 Elm Street, Townsville",
      status: "Pending",
    },
    {
      id: 4,
      storeName: "XYZ Pharmacy",
      contactNumber: "2345678901",
      email: "xyzpharmacy@example.com",
      address: "789 Oak Avenue, Villagetown",
      identityProof: "path/to/identity/proof2.jpg",
      approvalCertificate: "path/to/approval/certificate2.jpg",
      ownerName: "Jane Smith",
      ownerContactNumber: "8765432109",
      ownerEmail: "janesmith@example.com",
      ownerAddress: "567 Pine Road, Hamletville",
      status: "Approved",
    },
    {
      id: 5,
      storeName: "ABC Medical Store",
      contactNumber: "1234567890",
      email: "abcmedical@example.com",
      address: "123 Main Street, Cityville",
      identityProof: "path/to/identity/proof.jpg",
      approvalCertificate: "path/to/approval/certificate.jpg",
      ownerName: "John Doe",
      ownerContactNumber: "9876543210",
      ownerEmail: "johndoe@example.com",
      ownerAddress: "456 Elm Street, Townsville",
      status: "Pending",
    },
    {
      id: 6,
      storeName: "XYZ Pharmacy",
      contactNumber: "2345678901",
      email: "xyzpharmacy@example.com",
      address: "789 Oak Avenue, Villagetown",
      identityProof: "path/to/identity/proof2.jpg",
      approvalCertificate: "path/to/approval/certificate2.jpg",
      ownerName: "Jane Smith",
      ownerContactNumber: "8765432109",
      ownerEmail: "janesmith@example.com",
      ownerAddress: "567 Pine Road, Hamletville",
      status: "Rejected",
    },
  ]);

  const handleApprove = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) => {
        if (request.id === id) {
          return { ...request, status: 'Approved' };
        }
        return request;
      })
    );
  };

  const handleReject = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) => {
        if (request.id === id) {
          return { ...request, status: 'Rejected' };
        }
        return request;
      })
    );
  };

  const [specificationMenuAnchorEl, setSpecificationMenuAnchorEl] = useState(null);
  const [selectedSpecification, setSelectedSpecification] = useState('All'); // Set default value to 'All'

  const handleSpecificationSelect = (specification) => {
    setSelectedSpecification(specification);
    setSpecificationMenuAnchorEl(null);
  };
  const handleSpecificationMenuClose = () => {
    setSpecificationMenuAnchorEl(null);
  };
  const handleSpecificationMenuClick = (event) => {
    setSpecificationMenuAnchorEl(event.currentTarget);
    setSelectedSpecification('');
  };
  return (
    <Grid >

      <Grid style={{
        backgroundColor: "#fff", height: "60px", display: "flex",
        flexDirection: "row", justifyContent: "space-between", alignItems: "center"
      }} >
        <Grid style={{
          display: "flex", flexDirection: "column", justifyContent: "flex"
        }} >
          <Typography variant="h5" style={{
            fontFamily: "Poppins, sans-serif", fontSize: "25px", fontWeight: 600,
            padding: "0 0 0 10px", color: "#05445E"
          }}>Requests</Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/dashboard" style={{
              fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
              padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
            }}>
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              to="/medicalstore"
              style={{
                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
              }}
            >
              Medical Store
            </Link>
            <Typography color="#189ab4" >Requests</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid style={{ marginRight: "25px", display: "flex", flexDirection: "row", justifyContent: "flex-end" }}  >

          <TextField
            label="Filter"
            variant="outlined"
            size="small"
            style={{ width: "60%" }}
            value={selectedSpecification}
            onClick={handleSpecificationMenuClick} // Open specification menu on click
            InputProps={{
              endAdornment: (
                <IconButton size="small" onClick={handleSpecificationMenuClick}>
                  <ArrowDropDownIcon />
                </IconButton>
              ),
            }}
          // Add other props as needed
          />
          <Menu
            anchorEl={specificationMenuAnchorEl}
            open={Boolean(specificationMenuAnchorEl)}
            onClose={handleSpecificationMenuClose}
          >
            <MenuItem onClick={() => handleSpecificationSelect('All')}>All</MenuItem>
            <MenuItem onClick={() => handleSpecificationSelect('Approved')}>Approved</MenuItem>
            <MenuItem onClick={() => handleSpecificationSelect('Rejected')}>Rejected</MenuItem>
            {/* Add more menu items as needed */}
          </Menu>

        </Grid>
      </Grid>

      <Grid style={{ marginTop: "30px" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Store Name</TableCell>
                <TableCell>OwnerName</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>More</TableCell>
                <TableCell>Actions</TableCell>
                {/* <TableCell>More</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {requests
                .filter(request => selectedSpecification === 'All' || request.status === selectedSpecification)
                .map((request) => (

                  <TableRow key={request.id}>

                    <TableCell>{request.id}</TableCell>
                    <TableCell>{request.storeName}</TableCell>
                    <TableCell>{request.ownerName}</TableCell>
                    <TableCell>{request.contactNumber}</TableCell>
                    <TableCell>
                      <Link to="/store-description" style={{ textDecoration: "none" }}>
                        <FiInfo style={{ height: "30px", width: "20px", color: "#05445E" }} />
                      </Link> </TableCell>
                    <TableCell>
                      {request.status === 'Pending' ? (
                        <>
                          <Button
                            variant="contained"
                            color="success"
                            sx={{ marginRight: 1 }}
                            onClick={() => {
                              handleApprove(request.id);
                            }}
                          >
                            Accepted
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => {
                              handleReject(request.id);
                            }}
                          >
                            Rejected
                          </Button>
                        </>
                      ) : (
                        <span style={{ color: request.status === 'Approved' ? 'green' : 'red' }}>
                          {request.status}
                        </span>
                      )}
                    </TableCell>

                    {/* <TableCell> <MdKeyboardArrowRight style={{height:"30px", width:"20px"}}/></TableCell> */}
                  </TableRow>

                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default MedicalStoreRequest;
