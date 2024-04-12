// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { Box, Button, Grid, IconButton, Menu, MenuItem, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Select, FormControl, InputLabel } from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import StarIcon from '@mui/icons-material/Star';
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
// import LabDetailsCreate from "./LabDetailsCreate"; // Import LabDetailsCreate component

// function Labs() {
//   const [selectedLocation, setSelectedLocation] = useState(""); // State for selected location
//   const [menuAnchorEl, setMenuAnchorEl] = useState(null); // State for menu anchor element
//   const [editFormOpen, setEditFormOpen] = useState(false); // State for edit form visibility
//   const [editedLab, setEditedLab] = useState(null); // State for currently edited lab
//   const [createDialogOpen, setCreateDialogOpen] = useState(false); // State for create dialog visibility
//   const [labsData, setLabsData] = useState([
//     {
//       name: "Lab A",
//       address: "House No: 123, Main Street, ABC Nagar, XYZ City, ABC District, XYZ State - 123456",
//       rating: 4.5,
//       availableDays: "Mon - Sat", // Added available days
//       image: "https://img.freepik.com/free-photo/hand-with-protective-gloves-holding-blood-samples-covid-test_23-2148958363.jpg?t=st=1709205640~exp=1709209240~hmac=bb4b75e1a323943fcbf256f06cfe9a3ec16d3ec20bc2f5850bbe16a6a25d5e7d&w=740",
//     },
//     // Add more lab data
//     {
//       name: "Lab B",
//       address: "House No: 456, Main Street, ABC Nagar, XYZ City, ABC District, XYZ State - 123456",
//       rating: 4.0,
//       availableDays: "Mon - Fri", // Added available days
//       image: "https://t3.ftcdn.net/jpg/01/43/71/22/360_F_143712208_CWBM4PQpcIuxC3XnlSWn52ILR0YXUrWW.jpg",
//     },
//     {
//       name: "Lab C",
//       address: "House No: 789, Main Street, ABC Nagar, XYZ City, ABC District, XYZ State - 123456",
//       rating: 3.8,
//       availableDays: "Mon - Sun", // Added available days
//       image: "https://t3.ftcdn.net/jpg/01/43/71/22/360_F_143712208_CWBM4PQpcIuxC3XnlSWn52ILR0YXUrWW.jpg",
//     },
//     {
//       name: "Lab D",
//       address: "House No: 1011, Main Street, ABC Nagar, XYZ City, ABC District, XYZ State - 123456",
//       rating: 4.2,
//       availableDays: "Mon - Thu", // Added available days
//       image: "https://t3.ftcdn.net/jpg/01/43/71/22/360_F_143712208_CWBM4PQpcIuxC3XnlSWn52ILR0YXUrWW.jpg",
//     },
//   ]);

//   const handleMenuOpen = (event, lab) => {
//     setMenuAnchorEl(event.currentTarget);
//     setEditedLab(lab);
//   };

//   const handleMenuClose = () => {
//     setMenuAnchorEl(null);
//     setEditedLab(null);
//   };

//   const handleEditClick = () => {
//     setEditFormOpen(true);
//     handleMenuClose();
//   };

//   const handleDeleteClick = () => {
//     console.log("Delete clicked");
//     handleMenuClose();
//   };

//   const handleFormClose = () => {
//     setEditFormOpen(false);
//     setEditedLab(null);
//   };

//   const handleFormSubmit = () => {
//     console.log("Form submitted with edited data:", editedLab);
//     handleFormClose();
//   };

//   const handleLocationChange = (event) => {
//     setSelectedLocation(event.target.value);
//   };

//   const handleCreateDialogOpen = () => {
//     setCreateDialogOpen(true);
//   };

//   const handleCreateDialogClose = () => {
//     setCreateDialogOpen(false);
//   };

//   return (
//  <>
//  <Grid style={{
//         backgroundColor: "#ffffff", height: "60px", display: "flex",
//         flexDirection: "row", justifyContent: "space-between", alignItems: "center",
//       }} > <Typography variant="h5" style={{
//         fontFamily: "sans-serif", fontSize: "18px", fontWeight: 600,
//         padding: "0 0 0 15px", color: "#05445E"
//       }}>  Laboratories</Typography>
//       </Grid>
//         {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}> */}
//           {/* <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '24px', color: '#05445E' }}>
//             Laboratories
//           </Typography> */}
         
//         {/* </Box> */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', marginBottom: '20px' }}>
//           <TextField
//             id="outlined"
//             label="Outlined"
//             variant="outlined"
//             size="small"
//             sx={{ width: '140px', marginRight: '5px', borderColor: '#05445E', borderRadius: '5px' }}
//           />
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <FormControl sx={{ minWidth: 120, marginRight: '5px' }}>
//               <InputLabel id="location-label" sx={{ color: '#05445E' }}>Location</InputLabel>
//               <Select
//                 labelId="location-label"
//                 id="location-select"
//                 value={selectedLocation}
//                 onChange={handleLocationChange}
//                 sx={{ marginTop: '5px', color: '#05445E' }}
//                 variant="outlined"
//                 size="small"
//                 style={{ borderColor: '#05445E' }}
//               >
//                 <MenuItem value="">All Locations</MenuItem>
//                 <MenuItem value="Mumbai">Mumbai</MenuItem>
//                 <MenuItem value="Delhi">Delhi</MenuItem>
//                 <MenuItem value="Bangalore">Bangalore</MenuItem>
//                 <MenuItem value="Chennai">Chennai</MenuItem>
//                 <MenuItem value="Kolkata">Kolkata</MenuItem>
//               </Select>
//             </FormControl>
//             <FormControl sx={{ minWidth: 120 }}>
//               <InputLabel id="rating-label" sx={{ color: '#05445E' }}>Ratings</InputLabel>
//               <Select
//                 labelId="rating-label"
//                 id="rating-select"
//                 sx={{ marginTop: '5px', color: '#05445E' }}
//                 variant="outlined"
//                 size="small"
//                 style={{ borderColor: '#05445E' }}
//               >
//                 <MenuItem value="">All Ratings</MenuItem>
//                 <MenuItem value="1">
//                   <StarIcon sx={{ color: '#05445E' }} />
//                   <StarOutlineIcon sx={{ color: '#05445E' }} />
//                   <StarOutlineIcon sx={{ color: '#05445E' }} />
//                   <StarOutlineIcon sx={{ color: '#05445E' }} />
//                   <StarOutlineIcon sx={{ color: '#05445E' }} />
//                 </MenuItem>
//                 <MenuItem value="2">
//                   <StarIcon sx={{ color: '#05445E' }} />
//                   <StarIcon sx={{ color: '#05445E' }} />
//                   <StarOutlineIcon sx={{ color: '#05445E' }} />
//                   <StarOutlineIcon sx={{ color: '#05445E' }} />
//                   <StarOutlineIcon sx={{ color: '#05445E' }} />
//                 </MenuItem>
//                 <MenuItem value="3">
//                   <StarIcon sx={{ color: '#05445E' }} />
//                   <StarIcon sx={{ color: '#05445E' }} />
//                   <StarIcon sx={{ color: '#05445E' }} />
//                   <StarOutlineIcon sx={{ color: '#05445E' }} />
//                   <StarOutlineIcon sx={{ color: '#05445E' }} />
//                 </MenuItem>
//                 <MenuItem value="4">
//                   <StarIcon sx={{ color: '#05445E' }} />
//                   <StarIcon sx={{ color: '#05445E' }} />
//                   <StarIcon sx={{ color: '#05445E' }} />
//                   <StarIcon sx={{ color: '#05445E' }} />
//                   <StarOutlineIcon sx={{ color: '#05445E' }} />
//                 </MenuItem>
//                 <MenuItem value="5">
//                   <StarIcon sx={{ color: '#05445E' }} />
//                   <StarIcon sx={{ color: '#05445E' }} />
//                   <StarIcon sx={{ color: '#05445E' }} />
//                   <StarIcon sx={{ color: '#05445E' }} />
//                   <StarIcon sx={{ color: '#05445E' }} />
//                 </MenuItem>
//               </Select>
//             </FormControl>
//             <Button
//             variant="contained"
//             color="primary"
//             onClick={handleCreateDialogOpen}
//             sx={{marginLeft:1, backgroundColor: '#DC7844' }}
//           >
//             Create
//           </Button>
//           </Box>
//         </Box>
//         <Grid container spacing={2}>
//           {labsData.map((lab, index) => (
//             <Grid item xs={12} md={6} key={index}>
//               <Link to="/lab-details" style={{ textDecoration: 'none' }}>
//                 <Card
//                   sx={{
//                     width: "100%", // Full width
//                     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                     backgroundColor: "#fff",
//                     position: "relative", // Add position relative to enable absolute positioning of the IconButton
//                   }}
//                 >
//                   {/* Content of the card */}
//                   <CardContent
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       padding: "10px",
//                     }}
//                   >
//                     {/* Image and other content */}
//                     <img
//                       src={lab.image}
//                       alt="Lab"
//                       style={{
//                         width: "50%",
//                         height: "150px",
//                         marginRight: "20px",
//                         alignSelf: "center",
//                       }}
//                     />
//                     <div style={{ flex: 1 }}>
//                       {/* Lab details */}
//                       <Typography
//                         variant="h6"
//                         gutterBottom
//                         style={{ color: "#05445E", fontWeight: "bold" }}
//                       >
//                         {lab.name}
//                       </Typography>
//                       {/* Additional lab information */}
//                       <Typography variant="body1" gutterBottom style={{ color: "#05445E" }}>
//                         <strong>Ratings:</strong> {lab.rating}
//                       </Typography>
//                       <Typography variant="body1" gutterBottom style={{ color: "#05445E" }}>
//                         <strong>Available Days:</strong> {lab.availableDays}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         color="textSecondary"
//                         gutterBottom
//                         style={{ color: "#05445E" }}
//                       >
//                         <strong>Address:</strong> {lab.address}
//                       </Typography>
//                     </div>
//                     {/* MoreVertIcon */}
//                     <div style={{ position: "absolute", bottom: 0, right: 0 }}>
//                       <IconButton
//                         aria-label="more"
//                         aria-controls="lab-menu"
//                         aria-haspopup="true"
//                         onClick={(event) => {
//                           event.stopPropagation(); // Prevent event propagation to stop redirection
//                           handleMenuOpen(event, lab);
//                         }}
//                         style={{ position: "absolute", bottom: 0, right: 0 }}
//                       >
//                         <MoreVertIcon />
//                       </IconButton>

//                       <Menu
//                         id="lab-menu"
//                         anchorEl={menuAnchorEl}
//                         open={Boolean(menuAnchorEl)}
//                         onClose={handleMenuClose}
//                         anchorOrigin={{
//                           vertical: "top",
//                           horizontal: "right",
//                         }}
//                         transformOrigin={{
//                           vertical: "top",
//                           horizontal: "right",
//                         }}
//                       >
//                         <MenuItem onClick={handleEditClick}>Edit</MenuItem>
//                         <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
//                       </Menu>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </Link>
//             </Grid>
//           ))}
//         </Grid>
//       <LabDetailsCreate open={createDialogOpen} handleClose={handleCreateDialogClose} />
//    </>
//   );
// }

// export default Labs;