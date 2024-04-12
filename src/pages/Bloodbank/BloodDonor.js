import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,Breadcrumbs,Link,
  Paper,
  Box,
  Typography,
  TablePagination,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";

const Blood = () => {
  // Pagination state
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  // Pagination event handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const data = [
    {
      sno: 1,
      name: "Sandeep",
      mobile: "9653421586",
      email: "sandeep@example.com",
      age: 30,
      gender: "Male",
      bloodGroup: "A+",
      address: "123 Street, City 1",
      date: "2024-03-04",
    },
    {
      sno: 2,
      name: "Jatin",
      mobile: "9876543210",
      email: "Jatin@example.com",
      age: 25,
      gender: "Male",
      bloodGroup: "B-",
      address: "456 Avenue, Town 2",
      date: "2024-03-05",
    },
    {
      sno: 3,
      name: "John",
      mobile: "9653422661",
      email: "jon@example.com",
      age: 38,
      gender: "Male",
      bloodGroup: "AB+",
      address: "789 Boulevard, Village 3",
      date: "2024-03-06",
    },
    {
      sno: 4,
      name: "Rashmi",
      mobile: "9998887776",
      email: "rashmi@example.com",
      age: 22,
      gender: "Female",
      bloodGroup: "O-",
      address: "101 Street, City 4",
      date: "2024-03-07",
    },
    {
      sno: 5,
      name: "Harshit",
      mobile: "7256325054",
      email: "harshit@example.com",
      age: 45,
      gender: "Male",
      bloodGroup: "B+",
      address: "112 Avenue, Town 5",
      date: "2024-03-08",
    },
    {
      sno: 6,
      name: "Tina",
      mobile: "7235694588",
      email: "tina@example.com",
      age: 28,
      gender: "Female",
      bloodGroup: "A-",
      address: "213 Street, City 6",
      date: "2024-03-09",
    },
    {
      sno: 7,
      name: "Varun",
      mobile: "9110755640",
      email: "varun@example.com",
      age: 35,
      gender: "Male",
      bloodGroup: "AB-",
      address: "314 Boulevard, Town 7",
      date: "2024-03-10",
    },
    {
      sno: 8,
      name: "Olivia Martinez",
      mobile: "6532011457",
      email: "olivia.m@example.com",
      age: 27,
      gender: "Female",
      bloodGroup: "B-",
      address: "415 Avenue, City 8",
      date: "2024-03-11",
    },
    {
      sno: 9,
      name: "James Wilson",
      mobile: "7695322154",
      email: "james.w@example.com",
      age: 32,
      gender: "Male",
      bloodGroup: "O+",
      address: "516 Street, Village 9",
      date: "2024-03-12",
    },
    {
      sno: 10,
      name: "Emma Moore",
      mobile: "8567073560",
      email: "emma.m@example.com",
      age: 40,
      gender: "Female",
      bloodGroup: "A+",
      address: "617 Avenue, Town 10",
      date: "2024-03-13",
    },
    {
      sno: 11,
      name: "Alexander White",
      mobile: "8603155742",
      email: "alex.w@example.com",
      age: 29,
      gender: "Male",
      bloodGroup: "B+",
      address: "718 Street, City 11",
      date: "2024-03-14",
    },
    {
      sno: 12,
      name: "Ava Harris",
      mobile: "8602524440",
      email: "ava.h@example.com",
      age: 31,
      gender: "Female",
      bloodGroup: "AB-",
      address: "819 Boulevard, Village 12",
      date: "2024-03-15",
    },
    {
      sno: 13,
      name: "Matthew Clark",
      mobile: "9654211335",
      email: "matthew.c@example.com",
      age: 33,
      gender: "Male",
      bloodGroup: "O-",
      address: "920 Avenue, City 13",
      date: "2024-03-16",
    },
    {
      sno: 14,
      name: "Isabella Young",
      mobile: "7120102511",
      email: "isabella.y@example.com",
      age: 26,
      gender: "Female",
      bloodGroup: "A+",
      address: "1021 Street, Town 14",
      date: "2024-03-17",
    },
    {
      sno: 15,
      name: "Ethan Turner",
      mobile: "8603122559",
      email: "ethan.t@example.com",
      age: 36,
      gender: "Male",
      bloodGroup: "B-",
      address: "1122 Boulevard, City 15",
      date: "2024-03-18",
    },
  ];

  return (
    <Grid>
       <Grid style={{
        backgroundImage: 'linear-gradient(to right, #fff, #36c0d3)', height: "60px", display: "flex",
        flexDirection: "row", justifyContent: "space-between", alignItems: "center",
      }} >
        <Grid style={{ flexDirection: "column", padding: "0 0 0 15px", }}><Typography variant="h5" style={{
          fontSize: "24px", fontWeight: 600, fontFamily: "sans-serif",
          color: "#05445E"
        }}>Blood Donors</Typography>
          <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px", }}>
            <Link underline="hover" color="inherit" href="/dashboard">
              Home
            </Link>
            <Typography color="#189ab4">Blood Donors</Typography>
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
              background: "transparent",
              border: "1px solid thin #faf7f9",
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
      <Grid
        sx={{
          marginTop:"20px"
        }}
      >
        <TableContainer
          component={Paper}
          style={{
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "100%",
          }}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#d1f1f4" }}>
              <TableCell style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign:"left"}}>S.No</TableCell>
              <TableCell style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign:"left"}}>Name</TableCell>
              <TableCell style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign:"left"}}>
                  Mobile Number
                </TableCell>
                <TableCell style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign:"left"}}>Email ID</TableCell>
                <TableCell style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign:"left"}}>Age</TableCell>
                <TableCell style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign:"left"}}>Gender</TableCell>
                <TableCell style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign:"left"}}>
                  Blood Group
                </TableCell>
                <TableCell style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign:"left"}}>Address</TableCell>
                <TableCell style={{ fontWeight: '600', fontSize: '16px', color: '#05545e', textAlign:"left"}}>Date</TableCell>
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
                    <TableCell component="th" scope="row">
                      {row.sno}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.mobile}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell>{row.bloodGroup}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell>{row.date}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Pagination component */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, { label: "All", value: -1 }]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </Grid>
  );
};

export default Blood;