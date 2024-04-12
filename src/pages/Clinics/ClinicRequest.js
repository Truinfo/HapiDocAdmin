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

const ClinicRequest = () => {

  const [clinicRequests, setClinicRequests] = useState([
    {
      id: 1,
      clinicName: "ABC Health Center",
      contactNumber: "1234567890",
      email: "abchealthcenter@example.com",
      address: "123 Main Street, Cityville",
      licenseProof: "path/to/license/proof1.jpg",
      accreditationCertificate: "path/to/accreditation/certificate1.jpg",
      ownerName: "John Doe",
      ownerContactNumber: "9876543210",
      ownerEmail: "johndoe@example.com",
      ownerAddress: "456 Elm Street, Townsville",
      status: "Pending",
      doctors: [
        {
          id: 1,
          name: "Dr. Alice Johnson",
          specialization: "Internal Medicine",
          contactNumber: "1234567890",
          email: "alicejohnson@example.com",
        },
        {
          id: 2,
          name: "Dr. Michael Brown",
          specialization: "Pediatrics",
          contactNumber: "2345678901",
          email: "michaelbrown@example.com",
        }
      ]
    },
    {
      id: 2,
      clinicName: "XYZ Medical Clinic",
      contactNumber: "2345678901",
      email: "xyzmedicalclinic@example.com",
      address: "789 Oak Avenue, Villagetown",
      licenseProof: "path/to/license/proof2.jpg",
      accreditationCertificate: "path/to/accreditation/certificate2.jpg",
      ownerName: "Jane Smith",
      ownerContactNumber: "8765432109",
      ownerEmail: "janesmith@example.com",
      ownerAddress: "567 Pine Road, Hamletville",
      status: "Approved",
      doctors: [
        {
          id: 3,
          name: "Dr. Emily Wilson",
          specialization: "Dermatology",
          contactNumber: "3456789012",
          email: "emilywilson@example.com",
        },
        {
          id: 4,
          name: "Dr. David Taylor",
          specialization: "Orthopedics",
          contactNumber: "4567890123",
          email: "davidtaylor@example.com",
        }
      ]
    },
    // Add more clinic requests below
    {
      id: 3,
      clinicName: "LMN Healthcare Center",
      contactNumber: "5678901234",
      email: "lmnhealthcare@example.com",
      address: "678 Maple Lane, Townsville",
      licenseProof: "path/to/license/proof3.jpg",
      accreditationCertificate: "path/to/accreditation/certificate3.jpg",
      ownerName: "Jessica Martinez",
      ownerContactNumber: "7654321098",
      ownerEmail: "jessicamartinez@example.com",
      ownerAddress: "789 Elm Street, Cityville",
      status: "Pending",
      doctors: [
        {
          id: 5,
          name: "Dr. Christopher Wilson",
          specialization: "Cardiology",
          contactNumber: "6789012345",
          email: "christopherwilson@example.com",
        },
        {
          id: 6,
          name: "Dr. Jennifer Davis",
          specialization: "Oncology",
          contactNumber: "7890123456",
          email: "jenniferdavis@example.com",
        }
      ]
    },
    {
      id: 4,
      clinicName: "PQR Medical Center",
      contactNumber: "6789012345",
      email: "pqrmedicalcenter@example.com",
      address: "789 Pine Road, Hamletville",
      licenseProof: "path/to/license/proof4.jpg",
      accreditationCertificate: "path/to/accreditation/certificate4.jpg",
      ownerName: "Matthew Taylor",
      ownerContactNumber: "6543210987",
      ownerEmail: "matthewtaylor@example.com",
      ownerAddress: "123 Maple Lane, Villagetown",
      status: "Approved",
      doctors: [
        {
          id: 7,
          name: "Dr. Jessica Martinez",
          specialization: "Neurology",
          contactNumber: "8901234567",
          email: "jessicamartinez@example.com",
        },
        {
          id: 8,
          name: "Dr. William Wilson",
          specialization: "Endocrinology",
          contactNumber: "9012345678",
          email: "williamwilson@example.com",
        }
      ]
    },
    {
      id: 5,
      clinicName: "JDK Medical Center",
      contactNumber: "6789012345",
      email: "jdkmedicalcenter@example.com",
      address: "789 Pine Road, Hamletville",
      licenseProof: "path/to/license/proof4.jpg",
      accreditationCertificate: "path/to/accreditation/certificate4.jpg",
      ownerName: "Jessica Taylor",
      ownerContactNumber: "6543210987",
      ownerEmail: "matthewtaylor@example.com",
      ownerAddress: "123 Maple Lane, Villagetown",
      status: "Approved",
      doctors: [
        {
          id: 7,
          name: "Dr. Jessica Martinez",
          specialization: "Neurology",
          contactNumber: "8901234567",
          email: "jessicamartinez@example.com",
        },
        {
          id: 8,
          name: "Dr. William Wilson",
          specialization: "Endocrinology",
          contactNumber: "9012345678",
          email: "williamwilson@example.com",
        }
      ]
    },
    // Add more clinic requests as needed
  ]);


  const handleApprove = (id) => {
    setClinicRequests((prevRequests) =>
      prevRequests.map((request) => {
        if (request.id === id) {
          return { ...request, status: 'Approved' };
        }
        return request;
      })
    );
  };

  const handleReject = (id) => {
    setClinicRequests((prevRequests) =>
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
              to="/clinics"
              style={{
                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
              }}
            >
              Clinics
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
                <TableCell>Clinic Name</TableCell>
                <TableCell>Owner Name</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>More</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clinicRequests
                .filter(request => selectedSpecification === 'All' || request.status === selectedSpecification)
                .map((request) => (
                  <TableRow key={request.id}>
                    <TableCell>{request.id}</TableCell>
                    <TableCell>{request.clinicName}</TableCell>
                    <TableCell>{request.ownerName}</TableCell>
                    <TableCell>{request.contactNumber}</TableCell>
                    <TableCell>
                      <Link to={`/clinic-description/${request.id}`} style={{ textDecoration: "none" }}>
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
                            Accept
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => {
                              handleReject(request.id);
                            }}
                          >
                            Reject
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

export default ClinicRequest;
