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
  Select
} from "@mui/material";

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

const Appointments = () => {
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

  const data = [
    { id: "1", name: 'Pooja', mobile: '9653421586', email: 'pooja@example.com', gender: 'Female', date: '2024-03-04', time: '10:18 AM', doctor: 'Dr.Rajesh', Injury: 'Fever' },
    { id: "1", name: 'John', mobile: '9876543210', email: 'john@example.com', gender: 'Male', date: '2024-03-05', time: '11:30 AM', doctor: 'Dr.Sarah', Injury: 'Malaria' },
    { id: "1", name: 'Airi', mobile: '9653422661', email: 'airi@example.com', gender: 'Female', date: '2024-03-06', time: '10:18 AM', doctor: 'Dr.Rajesh', Injury: 'Cholera' },
    { id: "1", name: 'Sarah ', mobile: '9998887776', email: 'sarah@example.com', gender: 'Female', date: '2024-03-07', time: '10:19 AM', doctor: 'Dr.Rajesh', Injury: 'Fever' },
    { id: "1", name: 'Harshit', mobile: '7256325054', email: 'harshit@example.com', gender: 'Male', date: '2024-03-08', time: '10:18 AM', doctor: 'Dr.Jay', Injury: 'Fever' },
    { id: "1", name: 'Angelica', mobile: '7235694588', email: 'angelica@example.com', gender: 'Female', date: '2024-03-09', time: '10:17 AM', doctor: 'Dr.Pooja', Injury: 'Fever' },
    { id: "1", name: 'Varun', mobile: '9110755640', email: 'varun@example.com', gender: 'Male', date: '2024-03-10', time: '10:19 AM', doctor: 'Dr.Rajesh', Injury: 'Fever' },
    { id: "1", name: 'Ashton', mobile: '6532011457', email: 'ashton@example.com', gender: 'Female', date: '2024-03-11', time: '10:25 AM', doctor: 'Dr.Rajesh', Injury: 'Fever' },
    { id: "1", name: 'James Wilson', mobile: '7695322154', email: 'james.w@example.com', gender: 'Male', date: '2024-03-12', time: '10:18 AM', doctor: 'Dr.Sarah', Injury: 'Fever' },
    { id: "1", name: 'Emma Moore', mobile: '8567073560', email: 'emma.m@example.com', gender: 'Female', date: '2024-03-13', time: '10:19 AM', doctor: 'Dr.Rajesh', Injury: 'Fever' },
    { id: "1", name: 'Alexander White', mobile: '8603155742', email: 'alex.w@example.com', gender: 'Male', date: '2024-03-14', time: '10:18 AM', doctor: 'Dr.Pooja', Injury: 'Malaria' },
    { id: "1", name: 'Ava Harris', mobile: '8602524440', email: 'ava.h@example.com', gender: 'Female', date: '2024-03-15', time: '10:18 AM', doctor: 'Dr.Jay Soni', Injury: 'Fever' },
    { id: "1", name: 'Matthew Clark', mobile: '9654211335', email: 'matthew.c@example.com', gender: 'Male', date: '2024-03-16', time: '10:18 AM', doctor: 'Dr.Rajesh', Injury: 'Cholera' },
    { id: "1", name: 'Isabella Young', mobile: '7120102511', email: 'isabella.y@example.com', gender: 'Female', date: '2024-03-17', time: '10:19 AM', doctor: 'Dr.Jay Soni', Injury: 'Fever' },
    { id: "1", name: 'Ethan Turner', mobile: '8603122559', email: 'ethan.t@example.com', gender: 'Male', date: '2024-03-18', time: '11:18 AM', doctor: 'Dr.Rajesh', Injury: 'Fever' },

  ];



  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
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
        }}>Appointments</Typography>
          <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px", }}>
            <Link underline="hover" color="inherit" to="/dashboard" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
            <Typography color="#189ab4">Appointments</Typography>
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
                <IconButton
                  aria-label="add circle"
                  onClick={handleAdd}
                  sx={{
                    backgroundColor: "#189ab4",
                    marginLeft: "10px",
                    color: "white",
                  }}
                >
                  <AddCircleIcon />
                </IconButton>

                <IconButton
                  aria-label="download"
                  sx={{
                    backgroundColor: "#189ab4",
                    marginLeft: "10px",
                    color: "white",
                  }}
                >
                  <DownloadIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <Dialog open={open1} onClose={handleClose}>
            <DialogTitle
              style={{ color: "#033043", fontFamily: "Lato", fontSize: "28px" }}
            >
              Add Appointment
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={2}>
                {/* Left column */}
                <Grid item xs={6}>
                  <TextField
                    margin="dense"
                    label="Name"
                    type="text"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <FaceIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Email"
                    type="text"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <MailOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <FormLabel style={{ marginTop: "10px" }}>
                      Gender :{" "}
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                    </RadioGroup>
                  </Grid>
                </Grid>
                <Grid item xs={6} justifyContent="center">
                  <TextField
                    margin="dense"
                    label="Mobile"
                    type="tel"
                    fullWidth
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <CallIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    margin="dense"
                    label="Time"
                    type="time"
                    fullWidth
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={6} justifyContent="center">
                  <TextField
                    margin="dense"
                    label="Date"
                    type="date"
                    fullWidth
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    select
                    margin="dense"
                    label="Doctor"
                    fullWidth
                    value={doctor}
                    onChange={handleDoctorChange}
                  >
                    <MenuItem value="Dr.Rajesh">Dr. Rajesh</MenuItem>
                    <MenuItem value="Dr.Sarah Smith">Dr. Sarah Smith</MenuItem>
                    <MenuItem value="Dr.Jay Soni">Dr.Jay Soni</MenuItem>
                    <MenuItem value="Dr.Jay Soni">Dr.Pooja Patel</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  label="Injury"
                  type="text"
                  fullWidth
                  value={injury}
                  onChange={(e) => setInjury(e.target.value)}
                />
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                sx={{ border: "1px solid #DC7844", color: "#DC7844" }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleClose}
                sx={{ border: "1px solid #DC7844", color: "#DC7844" }}
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", width: "100%" }}
          >
            <Table aria-label="customized table">
              <TableHead>
                <TableRow style={{ backgroundColor: '#f3fbfd' }}>
                  <TableCell style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign: "left" }}>
                    Id
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign: "left" }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign: "left" }}
                  >
                    Consulting Doctor
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign: "left" }}
                  >
                    Condition
                  </TableCell>

                  <TableCell
                    style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign: "left" }}
                  >
                    Mobile
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign: "left" }}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign: "left" }}
                  >Gender</TableCell>
                  <TableCell
                    style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign: "left" }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign: "left" }}
                  >Time</TableCell>

                  <TableCell
                    style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign: "center" }}
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow
                      key={index}
                      style={{
                        backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                      }}
                    >
                      <TableCell>
                        {row.id}
                      </TableCell>
                      <TableCell>
                        <Box display="flex" justifyContent="flex-start" alignItems="center">
                          <Avatar
                            alt={row.name}
                            src={`/static/images/avatar/${index + 1}.jpg`}
                            style={{ height: "30px", width: "30px" }}
                          />
                          <Link to="/appointment-patient-profile" style={{ color: "#070808",
                          textDecoration:"none" }}>
                            <Typography
                              style={{ marginLeft: 10, fontSize: "16px", fontWeight: "200" }}>
                              {row.name}
                            </Typography>
                          </Link>
                        </Box>
                      </TableCell>
                      <TableCell style={{ marginLeft: 10, fontSize: "16px", fontWeight: "200", color: "#070808" }}>
                        <Link to="/appointment-consultdoc-profile" style={{ cursor: "pointer", 
                        color: "#070808",textDecoration:"none" }}>
                          {row.doctor}
                        </Link>
                      </TableCell>
                      <TableCell >{row.Injury}</TableCell>
                      <TableCell >{row.mobile}</TableCell>
                      <TableCell >{row.email}</TableCell>
                      <TableCell >{row.gender}</TableCell>
                      <TableCell >{row.date}</TableCell>
                      <TableCell >{row.time}</TableCell>
                      <TableCell style={{ textAlign: "center" }} onClick={(event) => handleClick(event, row)}>
                        <MoreVertIcon />
                      </TableCell>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose1}
                      >
                        <MenuItem onClick={() => handleEditClick(editRow)}>
                          Edit
                        </MenuItem>
                        <MenuItem onClick={handleClose}>Delete</MenuItem>
                      </Menu>
                    </TableRow>
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
            count={data.length} // Change filteredData.length to data.length
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

export default Appointments;