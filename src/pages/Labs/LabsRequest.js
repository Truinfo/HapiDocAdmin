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

const LabsRequest = () => {

  const [labRequests, setLabRequests] = useState([
    {
      id: 1,
      labName: "ABC Diagnostics",
      contactNumber: "1234567890",
      email: "abcdiagnostics@example.com",
      address: "123 Main Street, Cityville",
      identityProof: "path/to/identity/proof1.jpg",
      accreditationCertificate: "path/to/accreditation/certificate1.jpg",
      ownerName: "John Doe",
      ownerContactNumber: "9876543210",
      ownerEmail: "johndoe@example.com",
      ownerAddress: "456 Elm Street, Townsville",
      status: "Pending",
    },
    {
      id: 2,
      labName: "XYZ Pathology",
      contactNumber: "2345678901",
      email: "xyzpathology@example.com",
      address: "789 Oak Avenue, Villagetown",
      identityProof: "path/to/identity/proof2.jpg",
      accreditationCertificate: "path/to/accreditation/certificate2.jpg",
      ownerName: "Jane Smith",
      ownerContactNumber: "8765432109",
      ownerEmail: "janesmith@example.com",
      ownerAddress: "567 Pine Road, Hamletville",
      status: "Approved",
    },
    {
      id: 3,
      labName: "PQR Laboratories",
      contactNumber: "3456789012",
      email: "pqrlabs@example.com",
      address: "456 Elm Street, Townsville",
      identityProof: "path/to/identity/proof3.jpg",
      accreditationCertificate: "path/to/accreditation/certificate3.jpg",
      ownerName: "Alice Johnson",
      ownerContactNumber: "7654321098",
      ownerEmail: "alicejohnson@example.com",
      ownerAddress: "789 Oak Avenue, Villagetown",
      status: "Pending",
    },
    {
      id: 4,
      labName: "LMN Diagnostics",
      contactNumber: "4567890123",
      email: "lmndiagnostics@example.com",
      address: "567 Pine Road, Hamletville",
      identityProof: "path/to/identity/proof4.jpg",
      accreditationCertificate: "path/to/accreditation/certificate4.jpg",
      ownerName: "Michael Brown",
      ownerContactNumber: "6543210987",
      ownerEmail: "michaelbrown@example.com",
      ownerAddress: "123 Main Street, Cityville",
      status: "Approved",
    },
    {
      id: 5,
      labName: "QRS Pathology",
      contactNumber: "5678901234",
      email: "qrspathology@example.com",
      address: "678 Maple Lane, Villagetown",
      identityProof: "path/to/identity/proof5.jpg",
      accreditationCertificate: "path/to/accreditation/certificate5.jpg",
      ownerName: "Emma Wilson",
      ownerContactNumber: "5432109876",
      ownerEmail: "emmawilson@example.com",
      ownerAddress: "789 Oak Avenue, Townsville",
      status: "Pending",
    },
    {
      id: 6,
      labName: "STU Laboratories",
      contactNumber: "6789012345",
      email: "stulabs@example.com",
      address: "789 Pine Road, Hamletville",
      identityProof: "path/to/identity/proof6.jpg",
      accreditationCertificate: "path/to/accreditation/certificate6.jpg",
      ownerName: "David Taylor",
      ownerContactNumber: "4321098765",
      ownerEmail: "davidtaylor@example.com",
      ownerAddress: "987 Maple Lane, Cityville",
      status: "Rejected",
    },
  ]);


  const handleApprove = (id) => {
    setLabRequests((prevRequests) =>
      prevRequests.map((request) => {
        if (request.id === id) {
          return { ...request, status: 'Approved' };
        }
        return request;
      })
    );
  };

  const handleReject = (id) => {
    setLabRequests((prevRequests) =>
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
              to="/labs"
              style={{
                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
              }}
            >
              Labs
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
                <TableCell>Lab Name</TableCell>
                <TableCell>Owner Name</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>More</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {labRequests
                .filter(request => selectedSpecification === 'All' || request.status === selectedSpecification)
                .map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.id}</TableCell>
                    <TableCell>{request.labName}</TableCell>
                    <TableCell>{request.ownerName}</TableCell>
                    <TableCell>{request.contactNumber}</TableCell>
                    <TableCell>
                      <Link to={`/lab-description/${request.id}`} style={{ textDecoration: "none" }}>
                        <FiInfo style={{ height: "30px", width: "20px", color: "#05445E" }} />
                      </Link>
                    </TableCell>
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
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Grid>
    </Grid>
  );
};

export default LabsRequest;
