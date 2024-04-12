import React, { useEffect, useState } from 'react';
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

import { useDispatch, useSelector } from 'react-redux';
import { doctorFetchRequestAsync } from '../../Slice/Doctor/DoctorRequestSlice';
import { doctorsApprovalAsync } from "../../Slice/Doctor/DoctorApprovalSlice"
const DoctorRequest = () => {
  const requestData = useSelector(state => state.doctorRequest.doctors)
  const [requests, setRequests] = useState([...requestData]);
  const dispatch = useDispatch()
  useEffect(() => {

    const getDoctorsDetails = () => {
      dispatch(doctorFetchRequestAsync());
    }

    getDoctorsDetails()
  }, [dispatch])


  const handleApprove = (id) => {
    dispatch(doctorsApprovalAsync({ doctorId: id, status: "Accepted", }))
      .then((result) => {
        if (result.meta.requestStatus === 'fulfilled') {
          alert("Approved")
        }
      })
      .catch((error) => {
        alert(error)
      });

  };

  const handleReject = (id) => {
    dispatch(doctorsApprovalAsync({ doctorId: id, status: "Rejected", }))
      .then((result) => {
        if (result.meta.requestStatus === 'fulfilled') {
          alert("Rejected")
        }
      })
      .catch((error) => {
        alert(error)
      });
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
        backgroundImage: "linear-gradient(to right, #fff, #36c0d3)", height: "60px", display: "flex",
        flexDirection: "row", justifyContent: "space-between", lignItems: "center",
      }} >
        <Grid style={{ flexDirection: "column", padding: "0 0 0 15px", }}><Typography variant="h5" style={{
          fontFamily: "sans-serif", fontSize: "24px", fontWeight: 600,
          color: "#05445E"
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
              to="/doctors"
              style={{
                fontFamily: "Poppins, sans-serif", fontSize: "13px", fontWeight: 400,
                padding: "4px 0 0 10px", color: "#a19d9d", textDecoration: "none", cursor: "pointer"
              }}
            >
              Doctor
            </Link>
            <Typography color="#189ab4" >Requests</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid style={{ marginRight: "25px", display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }} >
          <TextField
            label="Filter"
            variant="outlined"
            size="small"
            style={{ width: "60%", backgroundColor: "#fff" }}
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
            <MenuItem onClick={() => handleSpecificationSelect('Accepted')}>Accepted</MenuItem>
            <MenuItem onClick={() => handleSpecificationSelect('Rejected')}>Rejected</MenuItem>
            {/* Add more menu items as needed */}
          </Menu>

        </Grid>
      </Grid>

      <Grid style={{ marginTop: "30px" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: '#dff0f5' }}>
                <TableCell style={{ fontWeight: "800" }}>ID</TableCell>
                <TableCell style={{ fontWeight: "800" }}>Name</TableCell>
                <TableCell style={{ fontWeight: "800" }}>Speciality</TableCell>
                <TableCell style={{ fontWeight: "800" }}>Status</TableCell>
                <TableCell style={{ fontWeight: "800" }}>More</TableCell>
                <TableCell style={{ fontWeight: "800" }}>Actions</TableCell>
                {/* <TableCell>More</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {requests
                .filter(request => selectedSpecification === 'All' || request.adminVerified === selectedSpecification)
                .map((request) => (

                  <TableRow key={request._id}>

                    <TableCell>{request._id}</TableCell>
                    <TableCell>{request.doctorName}</TableCell>
                    <TableCell>{request.specialization}</TableCell>
                    <TableCell>{request.adminVerified}</TableCell>
                    <TableCell>
                      <Link to={`/doctor-description/${request._id}`} style={{ textDecoration: "none" }}>
                        <FiInfo style={{ height: "30px", width: "20px", color: "#05445E" }} />
                      </Link> </TableCell>
                    <TableCell>
                      {request.adminVerified === 'Pending' ? (
                        <>
                          <Button
                            variant="contained"
                            color="success"
                            sx={{ marginRight: 1 }}
                            onClick={() => {
                              handleApprove(request._id);
                            }}
                          >
                            Accept
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => {
                              handleReject(request._id);
                            }}
                          >
                            Reject
                          </Button>
                        </>
                      ) : (
                        <span style={{ color: request.adminVerified === 'Accepted' ? 'green' : 'red' }}>
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

export default DoctorRequest;
