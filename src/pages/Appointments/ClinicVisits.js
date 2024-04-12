import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  TablePagination,
  Avatar, Breadcrumbs,
  Dialog,
  DialogTitle,
  DialogContent,
  Menu,
  MenuItem,
  DialogActions,
  TextField,
  Button,
  AppBar,
  Toolbar,
  Grid,
  Select,
  AccordionDetails,
  Accordion,
} from "@mui/material";
import { PiInfoDuotone } from "react-icons/pi";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import FaceIcon from "@mui/icons-material/Face";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import { FormLabel } from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme();

const ClinicVisits = () => {

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [open, setOpen] = useState(false); // State for dialog box
  const [open1, setOpen1] = useState(false); // State for dialog box
  const [editedDate, setEditedDate] = useState({}); // State for edited data
  const [editedData, setEditedData] = useState({}); // State for edited data
  const [searchText, setSearchText] = useState(""); // Add this line
  const [name, setName] = useState(""); // State for name input
  const [editedname, setEditedName] = useState(""); // State for name input
  const [email, setEmail] = useState(""); // State for email input
  const [editedemail, setEditedEmail] = useState(""); // State for email input
  const [date, setDate] = useState(""); // State for date input
  const [time, setTime] = useState(""); // State for time input
  const [editedtime, setEditedTime] = useState(""); // State for time input
  const [doctor, setDoctor] = useState(""); // State for doctor input
  const [editeddoctor, setEditedDoctor] = useState(""); // State for doctor input
  const [mobile, setMobile] = useState(""); // State for mobile input
  const [editedmobile, setEditedMobile] = useState(""); // State for mobile input
  const [injury, setInjury] = useState(""); // State for injury input
  const [editedinjury, setEditedInjury] = useState(""); // State for injury input
  const [gender, setGender] = useState(""); // State for injury input
  const [editedgender, setEditedGender] = useState(""); // State for injury input
  const [value, setValue] = useState('');

  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const handleSearch = (event) => {
    setSearchText(event.target.value);
    // Add your search logic here
    console.log(event.target.value);
  };
  const handleEditClick = (row) => {
    handleClose1();
    setEditedName(row.name);
    setEditedEmail(row.email);
    setEditedDate(row.date);
    setEditedTime(row.time);
    setEditedDoctor(row.doctor);
    setEditedMobile(row.mobile);
    setEditedInjury(row.Injury);
    setEditedGender(row.gender);
    setOpen(true);
  };
  // Open dialog box for editing
  const handleEditOpen = (rowData) => {
    setEditedData(rowData);
    setOpen(true);
  };

  // Close dialog box
  const handleEditClose = () => {
    setOpen(false);
  };

  const handleDoctorChange = (event) => {
    setDoctor(event.target.value);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setEditRow(row);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const handleClose = () => {
    setOpen1(false);
  };
  // Handle input changes
  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  // Save edited data
  const handleSaveChanges = () => {

    setOpen(false);
  };

  const handleAdd = () => {
    setOpen1(true);
  };

  // Pagination event handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#DC7844', // Set your primary color here
      },
    },
  });
  const handleMenuClose = () => {
    setAnchorEl(null);
    setEditRow(null);
  };
  const clinicVisits = [
    {
      appointmentId: "AP001",
      patientName: "John Doe",
      patientId: "PID001",
      doctorName: "Dr. Smith",
      doctorId: "DOC001",
      appointmentDateTime: "2024-04-01 10:00:00",
      appointmentDate: "2024-04-01",
      appointmentTime: "10:00:00",
      appointmentType: "Consultation",
      appointmentStatus: "Scheduled",
      paymentStatus: "Pending",
      contactInformation: {
        email: "john.doe@example.com",
        mobile: "+1234567890"
      },
      clinicDetails: {
        clinicName: "City Medical Center",
        clinicAddress: "123 Main Street, Cityville, Country"
      },
      appointmentNotes: "Patient has a history of high blood pressure.",
      actions: "View Details"
    },
    {
      appointmentId: "AP002",
      patientName: "Jane Smith",
      patientId: "PID002",
      doctorName: "Dr. Johnson",
      doctorId: "DOC002",
      appointmentDateTime: "2024-04-02 14:30:00",
      appointmentDate: "2024-04-02",
      appointmentTime: "14:30:00",
      appointmentType: "Follow-up",
      appointmentStatus: "Completed",
      paymentStatus: "Paid",
      contactInformation: {
        email: "jane.smith@example.com",
        mobile: "+1987654321"
      },
      clinicDetails: {
        clinicName: "Community Health Clinic",
        clinicAddress: "456 Oak Avenue, Townsville, Country"
      },
      appointmentNotes: "Patient needs to bring recent test results.",
      actions: "View Details"
    },
    {
      appointmentId: "AP003",
      patientName: "Michael Johnson",
      patientId: "PID003",
      doctorName: "Dr. Lee",
      doctorId: "DOC003",
      appointmentDateTime: "2024-04-03 09:00:00",
      appointmentDate: "2024-04-03",
      appointmentTime: "09:00:00",
      appointmentType: "Examination",
      appointmentStatus: "Scheduled",
      paymentStatus: "Pending",
      contactInformation: {
        email: "michael.johnson@example.com",
        mobile: "+1122334455"
      },
      clinicDetails: {
        clinicName: "HealthCare Plus Clinic",
        clinicAddress: "789 Elm Street, Villagetown, Country"
      },
      appointmentNotes: "Patient needs to fast for 8 hours before the examination.",
      actions: "View Details"
    },
    {
      appointmentId: "AP004",
      patientName: "Emily Brown",
      patientId: "PID004",
      doctorName: "Dr. Martinez",
      doctorId: "DOC004",
      appointmentDateTime: "2024-04-04 11:30:00",
      appointmentDate: "2024-04-04",
      appointmentTime: "11:30:00",
      appointmentType: "Consultation",
      appointmentStatus: "Canceled",
      paymentStatus: "Refunded",
      contactInformation: {
        email: "emily.brown@example.com",
        mobile: "+9988776655"
      },
      clinicDetails: {
        clinicName: "Central Clinic",
        clinicAddress: "321 Pine Street, Hamletville, Country"
      },
      appointmentNotes: "Patient called to cancel due to sudden illness.",
      actions: "View Details"
    },
    {
      appointmentId: "AP005",
      patientName: "Daniel Wilson",
      patientId: "PID005",
      doctorName: "Dr. White",
      doctorId: "DOC005",
      appointmentDateTime: "2024-04-05 15:00:00",
      appointmentDate: "2024-04-05",
      appointmentTime: "15:00:00",
      appointmentType: "Follow-up",
      appointmentStatus: "Scheduled",
      paymentStatus: "Pending",
      contactInformation: {
        email: "daniel.wilson@example.com",
        mobile: "+5544332211"
      },
      clinicDetails: {
        clinicName: "Family Care Clinic",
        clinicAddress: "987 Maple Avenue, Suburbia, Country"
      },
      appointmentNotes: "Patient needs to bring a list of current medications.",
      actions: "View Details"
    },
    {
      appointmentId: "AP006",
      patientName: "Sophia Brown",
      patientId: "PID006",
      doctorName: "Dr. Clark",
      doctorId: "DOC006",
      appointmentDateTime: "2024-04-06 12:45:00",
      appointmentDate: "2024-04-06",
      appointmentTime: "12:45:00",
      appointmentType: "Consultation",
      appointmentStatus: "Scheduled",
      paymentStatus: "Pending",
      contactInformation: {
        email: "sophia.brown@example.com",
        mobile: "+9988775544"
      },
      clinicDetails: {
        clinicName: "Green Valley Clinic",
        clinicAddress: "567 Elm Street, Green Valley, Country"
      },
      appointmentNotes: "Patient has a known allergy to penicillin.",
      actions: "View Details"
    },
    // Add more clinic visits data as needed
  ];
 


  const [selectedCity, setSelectedCity] = useState("");
  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };
  
  const [expandedRow, setExpandedRow] = useState(null);
  const handleAccordionChange = (bookingId) => {
    setExpandedRow(bookingId === expandedRow ? null : bookingId);
  };
 const handleDelete = (row) => { };

  const handleDownload = (row) => { };
  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid style={{
        backgroundImage: 'linear-gradient(to right, #fff, #36c0d3)', height: "60px", display: "flex",
        flexDirection: "row", justifyContent: "space-between", alignItems: "center",
      }} >
        <Grid style={{ flexDirection: "column", padding: "0 0 0 15px", }}><Typography variant="h5" style={{
          fontSize: "24px", fontWeight: 600, fontFamily: "sans-serif",
          color: "#05445E"
        }}>Clinic Visits</Typography>
          <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px", }}>
            <Link underline="hover" color="inherit" to="/dashboard" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
            <Typography color="#189ab4">Clinic Visits</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid>
          <Select
            value={selectedCity}
            onChange={handleChange}
            style={{
              width: "250px",
              height: "35px",
              margin: "0 10px 0px 10px",
              background: "#fff",
              borderColor: "#ffffff",
              border: "1px solid #ffffff",
              borderInlineColor: "#ffffff",
              opacity: "0.9"
            }}
          >
            <MenuItem defaultValue={"Select City"}>Select City</MenuItem>
            <MenuItem value="Visakhapatnam">Visakhapatnam </MenuItem>
            <MenuItem value="Vijayawada">Vijayawada</MenuItem>
            <MenuItem value="Guntur">Guntur</MenuItem>
            <MenuItem value="Nellore">Nellore</MenuItem>
            <MenuItem value="Rajahmundry">Rajahmundry</MenuItem>
            <MenuItem value="Tirupati">Tirupati</MenuItem>
            <MenuItem value="Kakinada">Kakinada</MenuItem>
            <MenuItem value="Anantapur">Anantapur </MenuItem>
            {/* Add more cities as needed */}
          </Select>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            marginTop: "20px"
          }}
        >
          <AppBar position="static" sx={{ backgroundColor: "#d1f1f4", padding: '10px', }}>
            <Toolbar variant="dense">
              <TextField
                variant="outlined"
                size="small"
                sx={{
                  backgroundColor: "white",
                  width: "250px",
                }}
                onChange={handleSearch}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Box sx={{ position: "absolute", right: 0 }}>
                
              </Box>
            </Toolbar>
          </AppBar>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "#02254f" }}><b>Appointment Id</b></TableCell>
                  <TableCell style={{ color: "#02254f" }}><b>Patient Name</b></TableCell>
                  <TableCell style={{ color: "#02254f" }}><b>Doctor Name</b></TableCell>
                  <TableCell style={{ color: "#02254f" }}><b>Appointment Date</b></TableCell>
                  <TableCell style={{ color: "#02254f" }}><b>Scheduled Time</b></TableCell>
                  <TableCell style={{ color: "#02254f" }}><b>Appointment Type</b></TableCell>
                  <TableCell style={{ color: "#02254f" }}><b>Appointment Status</b></TableCell>
                  <TableCell style={{ color: "#02254f" }}><b>Payment Status</b></TableCell>
                  <TableCell style={{ color: "#02254f" }}><b>Details</b></TableCell>
                  <TableCell style={{ color: "#02254f" }}><b>Action</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clinicVisits.map((row) => (
                  <React.Fragment key={row.appointmentId}>
                    <TableRow>
                      <TableCell>{row.appointmentId}</TableCell>
                      <TableCell>{row.patientName}</TableCell>
                      <TableCell>{row.doctorName}</TableCell>
                      <TableCell>{row.appointmentDate}</TableCell>
                      <TableCell>{row.appointmentTime}</TableCell>
                      <TableCell>{row.appointmentType}</TableCell>
                      <TableCell>{row.appointmentStatus}</TableCell>
                      <TableCell>{row.paymentStatus}</TableCell>
                      <TableCell
                        onClick={() => handleAccordionChange(row.appointmentId)}
                        style={{ cursor: "pointer" }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography variant="body1" sx={{ marginRight: "5px" }}>
                            Info
                          </Typography>
                          <PiInfoDuotone />
                        </Box>
                      </TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleEditClick(row)}>
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                        >
                          <MenuItem onClick={() => handleEditClick(row)}>
                            Edit
                          </MenuItem>
                          <MenuItem onClick={() => handleDelete(row)}>
                            Delete
                          </MenuItem>
                          <MenuItem onClick={() => handleDownload(row)}>
                            Download
                          </MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                    {expandedRow === row.appointmentId && (
                      <TableRow >
                        <TableCell
                          style={{ paddingBottom: 0, paddingTop: 0, paddingLeft: 0, paddingRight: 0 }}
                          colSpan={8}
                        >
                          <Accordion
                            sx={{
                              width: "100%",
                              boxShadow: "none",
                              backgroundColor: "#fffff",
                            }}
                            expanded={Boolean(editRow && editRow.appointmentId === row.appointmentId)}
                          >
                            <AccordionDetails>
                                <Table size="large">
                                  <TableHead sx={{ backgroundColor: "#05445E" }}>
                                    <TableRow >
                                      <TableCell sx={{ color: "#FFFFFF", fontSize: "15px" }}><b>Contact Number</b></TableCell>
                                      <TableCell sx={{ color: "#FFFFFF", fontSize: "15px" }}><b>Email</b></TableCell>
                                      <TableCell sx={{ color: "#FFFFFF", fontSize: "15px" }}><b>Clinic Name</b></TableCell>
                                      <TableCell sx={{ color: "#FFFFFF", fontSize: "15px" }}><b>Clinic Address</b></TableCell>
                                      <TableCell sx={{ color: "#FFFFFF", fontSize: "15px" }}><b>Appointment Notes</b></TableCell>
                                      <TableCell sx={{ color: "#FFFFFF", fontSize: "15px" }}><b>Actions</b></TableCell>
                                   </TableRow>
                                  </TableHead>
                                  <TableBody>
                                      <TableRow key={row.appointmentId}>
                                        <TableCell>{row.contactInformation.mobile}</TableCell>
                                        <TableCell>{row.contactInformation.email}</TableCell>
                                        <TableCell>{row.clinicDetails.clinicName}</TableCell>
                                        <TableCell>{row.clinicDetails.clinicAddress}</TableCell>
                                        <TableCell>{row.appointmentNotes}</TableCell>
                                        <TableCell>{row.actions ? <a href="fgdfg" target="_blank"> Attachment</a> : "--"}</TableCell>
                                      </TableRow>
                                  
                                  </TableBody>
                                </Table>
                            </AccordionDetails>
                          </Accordion>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Dialog open={open} onClose={handleEditClose}>
            <DialogTitle style={{ color: "#033043", fontFamily: "Lato", fontSize: "28px", }}>Edit Appointment</DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                {/* Left side */}
                <Grid item xs={6}>
                  <TextField
                    margin="dense"
                    label="Name"
                    type="text"
                    fullWidth
                    value={editedname}
                    onChange={(e) => setEditedName(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <FaceIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                {/* Right side */}
                <Grid item xs={6}>
                  <TextField
                    margin="dense"
                    label="Email"
                    type="text"
                    fullWidth
                    value={editedemail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <MailOutlineIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                {/* Gender */}
                <Grid container item xs={12} justifyContent="center">
                  <label style={{ marginTop: "10px" }}>Gender : </label>
                  <RadioGroup aria-label="gender" name="gender" value={editedgender} onChange={(e) => setEditedGender(e.target.value)} style={{ display: 'flex', flexDirection: 'row' }}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                  </RadioGroup>
                </Grid>
                {/* Mobile */}
                <Grid item xs={6} justifyContent="center">
                  <TextField
                    margin="dense"
                    label="Mobile"
                    type="tel"
                    fullWidth
                    value={editedmobile}
                    onChange={(e) => setEditedMobile(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <CallIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
                {/* Date */}
                <Grid item xs={6} justifyContent="center">
                  <TextField
                    margin="dense"
                    label="Date"
                    type="date"
                    fullWidth
                    value={editedDate}
                    onChange={(e) => setEditedDate(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                {/* Time */}
                <Grid item xs={6} justifyContent="center">
                  <TextField
                    margin="dense"
                    label="Time"
                    type="time"
                    fullWidth
                    value={editedtime}
                    onChange={(e) => setEditedTime(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      step: 300, // 5 minutes
                    }}
                  />
                </Grid>
                {/* Doctor */}
                <Grid item xs={6}>
                  <TextField
                    select
                    margin="dense"
                    label="Doctor"
                    fullWidth
                    value={editeddoctor}
                    onChange={(e) => setEditedDoctor(e.target.value)}
                  >
                    <MenuItem value="Dr.Rajesh">Dr.Rajesh</MenuItem>
                    <MenuItem value="Dr.Sarah Smith">Dr.Sarah Smith</MenuItem>
                    <MenuItem value="Dr.Jay Soni">Dr.Jay Soni</MenuItem>
                    <MenuItem value="Dr.Pooja Patel">Dr.Pooja Patel</MenuItem>
                  </TextField>
                </Grid>
                {/* Injury */}
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    label="Injury"
                    type="text"
                    fullWidth
                    value={editedinjury}
                    onChange={(e) => setEditedInjury(e.target.value)}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions >
              <Button onClick={handleEditClose} sx={{ border: '1px solid #DC7844', color: "#DC7844" }}>Cancel</Button>
              <Button onClick={handleSaveChanges} sx={{ border: '1px solid #DC7844', color: "#DC7844" }}>Save</Button>
            </DialogActions>
          </Dialog>
          <TablePagination
            rowsPerPageOptions={[10, 20, 30, { label: "All", value: -1 }]}
            component="div"
            count={clinicVisits.length} // Change filteredData.length to data.length
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            style={{ alignSelf: "center", width: "100%" }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ClinicVisits;