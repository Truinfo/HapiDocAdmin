import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, Breadcrumbs, Link, TableHead, TableRow, Paper, Select, Button, TextField, Box, Typography, TablePagination, IconButton, Menu, MenuItem, Chip, Grid, AppBar, Toolbar, InputAdornment } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BsFillInfoCircleFill } from "react-icons/bs";
import DownloadIcon from "@mui/icons-material/Download";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Navigate, useNavigate } from 'react-router-dom';
import Details from './Details';
const initialData = [
  { id: 1, name: 'Aryan Agarwal', age: 32, gender: 'Male', address: '123, Indiranagar 1st Main, Bangalore, Karnataka', phoneNumber: '9925402621', time: '11:00 am', status: 'Approved', date: '25/03/2024', recentAppointments: '2' },
  { id: 2, name: 'Aryan Agarwal', age: 32, gender: 'male', address: '123, Indiranagar 1st Main, Bangalore, Karnataka', phoneNumber: '9925402621', time: '11:00 am', status: 'Pending', date: '25/03/2024', recentAppointments: '2' },
  { id: 3, name: 'Aryan Agarwal', age: 32, gender: 'male', address: '123, Indiranagar 1st Main, Bangalore, Karnataka', phoneNumber: '9925402621', time: '11:00 am', status: 'Rejected', date: '25/03/2024', recentAppointments: '2' },
  { id: 4, name: 'Aryan Agarwal', age: 32, gender: 'male', address: '123, Indiranagar 1st Main, Bangalore, Karnataka', phoneNumber: '9925402621', time: '11:00 am', status: 'Active', date: '25/03/2024', recentAppointments: '2' },
  { id: 5, name: 'Aryan Agarwal', age: 32, gender: 'male', address: '123, Indiranagar 1st Main, Bangalore, Karnataka', phoneNumber: '9925402621', time: '11:00 am', status: 'Active', date: '25/03/2024', recentAppointments: '2' },
  { id: 6, name: 'Aryan Agarwal', age: 32, gender: 'male', address: '123, Indiranagar 1st Main, Bangalore, Karnataka', phoneNumber: '9925402621', time: '11:00 am', status: 'Active', date: '25/03/2024', recentAppointments: '2' },
  { id: 7, name: 'Aryan Agarwal', age: 32, gender: 'male', address: '123, Indiranagar 1st Main, Bangalore, Karnataka', phoneNumber: '9925402621', time: '11:00 am', status: 'Active', date: '25/03/2024', recentAppointments: '2' },
  { id: 8, name: 'Aryan Agarwal', age: 32, gender: 'male', address: '123, Indiranagar 1st Main, Bangalore, Karnataka', phoneNumber: '9925402621', time: '11:00 am', status: 'Active', date: '25/03/2024', recentAppointments: '2' },
  { id: 9, name: 'Aryan Agarwal', age: 32, gender: 'male', address: '123, Indiranagar 1st Main, Bangalore, Karnataka', phoneNumber: '9925402621', time: '11:00 am', status: 'Active', date: '25/03/2024', recentAppointments: '2' },
  { id: 10, name: 'Aryan Agarwal', age: 32, gender: 'male', address: '123, Indiranagar 1st Main, Bangalore, Karnataka', phoneNumber: '9925402621', time: '11:00 am', status: 'Active', date: '25/03/2024', recentAppointments: '2' },
  { id: 11, name: 'Aryan Agarwal', age: 32, gender: 'male', address: '123, Indiranagar 1st Main, Bangalore, Karnataka', phoneNumber: '9925402621', time: '11:00 am', status: 'Active', date: '25/03/2024', recentAppointments: '2' },
  { id: 12, name: 'Aryan Agarwal', age: 32, gender: 'male', address: '123, Indiranagar 1st Main, Bangalore, Karnataka', phoneNumber: '9925402621', time: '11:00 am', status: 'Active', date: '25/03/2024', recentAppointments: '2' },
  { id: 13, name: 'Aryan Agarwal', age: 32, gender: 'male', address: '123, Indiranagar 1st Main, Bangalore, Karnataka', phoneNumber: '9925402621', time: '11:00 am', status: 'Active', date: '25/03/2024', recentAppointments: '2' },
];

const generateData = () => {
  let newData = [];
  for (let i = 0; i < 2; i++) { // Increase to 10 users total
    newData.push({
      name: `User ${i + 11}`,
      phoneNumber: `555-555-555${i}`,
      status: i % 2 === 0 ? 'Active' : 'Inactive',
      date: `2024-02-${15 + i}`,
      recentAppointments: Math.floor(Math.random() * 5) + 1
    });
  }
  return newData;
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#75E6DA', // Blue Green for the rest of the table
    },
  },
  typography: {
    fontFamily: [
      'Forum',
      'Arial',
      'sans-serif',
    ].join(','),
    h4: {
      fontSize: '20px', 
    },
  },
});


export default function Patients() {
  const [data, setData] = useState([...initialData, ...generateData()]); // Combine initial and additional data
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = useState('');
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [filterValue, setFilterValue] = useState('All');
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const navigate = useNavigate();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleSearch = (event) => {
    setSearchText(event.target.value);
    // Add your search logic here
    console.log(event.target.value);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleFilterSelect = (value) => {
    setFilterValue(value);
    setFilterAnchorEl(null);
  };

  const handleMenuClick = (event, row) => {
    setMenuAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleEdit = () => {
    // Handle edit action here
    setMenuAnchorEl(null);
  };

  const handleDelete = () => {
    // Handle delete action here
    setMenuAnchorEl(null);
  };

  const filteredData = data.filter((row) => {
    if (filterValue === 'All') {
      return true;
    } else {
      return row.status === filterValue;
    }
  }).filter((row) => {
    return Object.values(row).some((value) => {
      if (typeof value === 'string') {
        return value.toLowerCase().includes(searchText.toLowerCase());
      } else {
        console.log("Non-string value:", value);
        return false;
      }
    });
  });

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginTop: '10px' }}>
        <Grid style={{
          backgroundImage: 'linear-gradient(to right, #fff, #36c0d3)', height: "60px", display: "flex", width: "100%",
          flexDirection: "row", justifyContent: "space-between", alignItems: "center",
        }} >
          <Grid style={{ flexDirection: "column", padding: "0 0 0 15px", }}><Typography variant="h5" style={{
            fontFamily: "sans-serif", fontSize: "24px", fontWeight: 600,
            color: "#05445E"
          }}>Customers</Typography>
            <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px", }}>
              <Link underline="hover" color="inherit" href="/dashboard">
                Home
              </Link>
              <Typography color="#189ab4">Customers</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>

        <Grid sx={{ width: '100%', marginTop: '15px' }}>
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
                  // onClick={handleAdd}
                  sx={{
                    backgroundColor: "#189ab4",
                    marginLeft: "10px",
                    color: "#eaf7f9",
                  }}
                >
                  <AddCircleIcon />
                </IconButton>

                <IconButton
                  aria-label="download"
                  sx={{
                    backgroundColor: "#189ab4",
                    marginLeft: "10px",
                    color: "#eaf7f9",
                  }}
                >
                  <DownloadIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          <TableContainer component={Paper} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow style={{ backgroundColor: '#f3fbfd' }}>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Id</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Name</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Age</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Gender</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Address</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Phone Number</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Date & Time </TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }} >Details</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Status</TableCell>
                  <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', color: '#05545e' }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : filteredData
                ).map((row, index) => (
                  <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                    <TableCell component="th" scope="row">{row.id}</TableCell>
                    <TableCell component="th" scope="row">{row.name}</TableCell>
                    <TableCell component="th" scope="row">{row.age}</TableCell>
                    <TableCell component="th" scope="row">{row.gender}</TableCell>
                    <TableCell component="th" scope="row">{row.address}</TableCell>
                    <TableCell align="center">{row.phoneNumber}</TableCell>
                    <TableCell align="center">{row.date} - {row.time}</TableCell>
                    <TableCell align="center">
                      <Button
                        style={{ color: '#189ab4' }}
                        onClick={() => navigate('/appointment-patient-profile')}>

                        <BsFillInfoCircleFill style={{ fontSize: '20px' }} />
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                    <Chip
                      label={row.status}
                      style={{
                        fontSize:'14px',
                        backgroundColor:
                          row.status === 'Approved' ? '#d2f8d2' :
                            row.status === 'Rejected' ? '#ffe4e1' :
                              row.status === 'Pending' ? '#ffe8cc' : '', // Light orange for Pending
                        color:
                          row.status === 'Approved' ? 'green' :
                            row.status === 'Rejected' ? 'red' :
                              row.status === 'Pending' ? '#FFA500' : '' // Orange text for Pending
                      }}
                    />
                    </TableCell>
                    <TableCell align="center">
                      <IconButton onClick={(event) => handleMenuClick(event, row)}>
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        anchorEl={menuAnchorEl}
                        open={Boolean(menuAnchorEl && selectedRow === row)}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={handleEdit}>Edit</MenuItem>
                        <MenuItem onClick={handleDelete}>Delete</MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Box>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{ alignSelf: 'center', width: '100%' }}
      />

    </ThemeProvider>
  );
}