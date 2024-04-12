import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Badge from '@mui/material/Badge';
import {
  Box,
  Grid,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Select,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CloseIcon from "@mui/icons-material/Close";
import FaceIcon from '@mui/icons-material/Face';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import { InputAdornment } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BsChatTextFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { MdWifiCalling2 } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
function MedicalStoreList() {
  const [selectedLocation, setSelectedLocation] = useState(""); // State for selected location
  const [selectedVerify, setSelectedVerify] = useState("");
  const [menuAnchorEl, setMenuAnchorEl] = useState(null); // State for menu anchor element
  const [editFormOpen, setEditFormOpen] = useState(false); // State for edit form visibility
  const [time, setTime] = useState(""); // State for time input
  const [selectedDays, setSelectedDays] = useState([]);
  const [editedLab, setEditedLab] = useState(null); // State for currently edited lab
  const [labsData, setLabsData] = useState([
    {
      name: "PillPoint",
      address: "543, Pine Avenue, Jayanagar, Bangalore, Karnataka, India - 560001",
      rating: 4.5,
      email:"pillpoint@gmail.com",
      number:"9874563215",
      image: "https://www.jagdambaayurvedic.com/img/slider/4.jpg",
    },
    {
      name: "QuickCure",
      address: "321, Maple Lane, Andheri West, Mumbai, Maharashtra, India - 400001",
      rating: 4.5,
      email:"quickcure@gmail.com",
      number:"9874563215",
      image: "https://media.istockphoto.com/id/1137809104/photo/shelf-in-a-drugstore.jpg?s=612x612&w=0&k=20&c=wo71SZFiWIQeMoGv-PT6-g5fQ6sIEqcJWXafaQTJUx0=",
    },
    {
      name: "CureEase",
      address: "Maple Street, T Nagar, Chennai, Tamil Nadu, India - 600001",
      rating: 4.5,
      email:"cureease@gmail.com",
      number:"9874563215",
      image: "https://media.istockphoto.com/id/1151980433/photo/stocks-are-always-full-in-this-pharmacy.jpg?s=612x612&w=0&k=20&c=B1xctLgt-ufXtPecpPtce8EjXX5gylSCeApXFmmKQqg=",
    },
    {
      name: "BioCare",
      address: "567, Cedar Road, Karol Bagh, Delhi, India - 110001",
      rating: 4.5,
      email:"biocare@gmail.com",
      number:"9874563215",
      image: "https://media.istockphoto.com/id/1472256397/photo/shelves-with-medicaments-in-pharmacy.jpg?s=612x612&w=0&k=20&c=b29whWEtszmvfXLIksi4KQqLHX42ROABNeNrt30Y_bY=",
    },
    {
      name: "NewMed",
      address: "123, Elm Street, Park Street Area, Kolkata, West Bengal, India - 700001",
      rating: 4.2,
      email:"newmed@gmail.com",
      number:"9874563215",
      image: "https://media.istockphoto.com/id/1322693248/photo/cropped-shot-of-shelves-stocked-with-various-medicinal-products-in-a-pharmacy.jpg?s=612x612&w=0&k=20&c=EauALfspFqUWzs2frKMLe8CHvDoFpaZQCGUPJRtLV7s=",
    },
    {
      name: "HealWell",
      address: "789, Oak Avenue, Banjara Hills, Hyderabad, Telangana, India - 500001",
      rating: 4.8,
      email:"healwell@gmail.com",
      number:"9874563215",
      image: "https://img.freepik.com/free-photo/empty-drugstore-with-bottles-packages-full-with-medicaments-retail-shop-shelves-with-pharmaceutical-products-pharmacy-space-filled-with-medical-drugs-pills-vitamins-boxes_482257-62215.jpg",
    },
  ]);

  const navigate = useNavigate();
  const handleMenuOpen = (event, lab) => {
    setMenuAnchorEl(event.currentTarget);
    setEditedLab(lab);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setEditedLab(null);
  };

  const handleDaysChange = (event) => {
    setSelectedDays(event.target.value);
  };
  const handleVerify = (event) => {
    setSelectedVerify(event.target.value);
  };

  const handleEditClick = () => {
    setEditFormOpen(true);
    handleMenuClose();
  };
  const handleDeleteClick = () => {
    console.log("Delete clicked");
    handleMenuClose();
  };

  const handleFormClose = () => {
    setEditFormOpen(false);
    setEditedLab(null);
  };

  const handleFormSubmit = () => {
    console.log("Form submitted with edited data:", editedLab);
    handleFormClose();
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#DC7844', // Set your primary color here
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid style={{
         backgroundImage: "linear-gradient(to right, #fff, #36c0d3)", height: "60px", display: "flex",
        flexDirection: "row", justifyContent: "space-between", alignItems: "center",
      }} >
        <Grid style={{ flexDirection: "column", padding: "0 0 0 15px", }}><Typography variant="h5" style={{
          fontFamily: "sans-serif", fontSize: "24px", fontWeight: 600,
          color: "#05445E"
        }}> Medical Stores</Typography>
          <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px", }}>
            <Link underline="hover" color="inherit" to="/dashboard" 
            style={{textDecoration:"none", color:"inherit"}}>
              Home
            </Link>
            <Typography color="#189ab4">Medical Stores</Typography>
          </Breadcrumbs>
        </Grid>

        <IconButton sx={{ marginRight: "10px" }}>
        <Link to="/store-request">
                    <Badge badgeContent={4} color="warning">
            <BsChatTextFill style={{ color: "#05445E" }} />
          </Badge>
          </Link>
        </IconButton>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          size="small"
          sx={{
            width: "200px",
            marginRight: "5px",
            borderColor: "#05445E",
            borderRadius: "5px",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <FormControl sx={{ minWidth: 120, marginRight: "5px" }}>
            <InputLabel id="location-label" sx={{ color: "#05445E" }}>
              Location
            </InputLabel>
            <Select
              labelId="location-label"
              id="location-select"
              value={selectedLocation}
              onChange={handleLocationChange}
              sx={{ marginTop: "5px" }}
              variant="outlined"
              size="small"
              style={{ borderColor: "#05445E" }}
            >
              <MenuItem value="">All Locations</MenuItem>
              <MenuItem value="Mumbai">Mumbai</MenuItem>
              <MenuItem value="Delhi">Delhi</MenuItem>
              <MenuItem value="Bangalore">Bangalore</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
              <MenuItem value="Kolkata">Kolkata</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="rating-label" sx={{ color: "#05445E" }}>
              Ratings
            </InputLabel>
            <Select
              labelId="rating-label"
              id="rating-select"
              sx={{ marginTop: "5px" }}
              variant="outlined"
              size="small"
              style={{ borderColor: "#05445E" }}
            >
              <MenuItem value="">All Ratings</MenuItem>
              <MenuItem value="1">
                <StarIcon sx={{ color: "#05445E" }} />
                <StarOutlineIcon sx={{ color: "#05445E" }} />
                <StarOutlineIcon sx={{ color: "#05445E" }} />
                <StarOutlineIcon sx={{ color: "#05445E" }} />
                <StarOutlineIcon sx={{ color: "#05445E" }} />
              </MenuItem>
              <MenuItem value="2">
                <StarIcon sx={{ color: "#05445E" }} />
                <StarOutlineIcon sx={{ color: "#05445E" }} />
              </MenuItem>
              <MenuItem value="3">
                <StarIcon sx={{ color: "#05445E" }} />
                <StarIcon sx={{ color: "#05445E" }} />
                <StarIcon sx={{ color: "#05445E" }} />
                <StarOutlineIcon sx={{ color: "#05445E" }} />
                <StarOutlineIcon sx={{ color: "#05445E" }} />
              </MenuItem>
              <MenuItem value="4">
                <StarIcon sx={{ color: "#05445E" }} />
                <StarIcon sx={{ color: "#05445E" }} />
                <StarIcon sx={{ color: "#05445E" }} />
                <StarIcon sx={{ color: "#05445E" }} />
                <StarOutlineIcon sx={{ color: "#05445E" }} />
              </MenuItem>
              <MenuItem value="5">
                <StarIcon sx={{ color: "#05445E" }} />
                <StarIcon sx={{ color: "#05445E" }} />
                <StarIcon sx={{ color: "#05445E" }} />
                <StarIcon sx={{ color: "#05445E" }} />
                <StarIcon sx={{ color: "#05445E" }} />
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Grid container spacing={1}>
        {labsData.map((lab, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
                width: "auto",
                position: "relative",
                backgroundColor: "#fff",
              }}
            >

              <CardContent style={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <img
                      src={lab.image}
                      alt="Lab"
                      style={{
                        width: "100%",
                        height: "170px",
                        alignSelf: "center",
                        borderRadius: "5px",
                        cursor:"pointer"
                      }}
                      onClick={() => navigate("/store-profile")}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      {lab.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      gutterBottom
                      style={{ color: "#05445E", display:"flex", alignItems:"center" }}
                    >
                     <MdWifiCalling2 style={{ color: "#ffab01", fontSize: "18px" , marginRight:"3px"}}/> {lab.number}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      gutterBottom
                      style={{ color: "#05445E", display:"flex", alignItems:"center" }}
                    >
                       <MdOutlineMarkEmailRead  style={{ color: "#ffab01", fontSize: "18px", marginRight:"3px"}}/> {lab.email}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      gutterBottom
                      style={{ color: "#05445E" }}
                    >
                      {lab.address}
                    </Typography>
                    <div style={{ display: "flex", color: "#05445E" }}>
                      {[...Array(Math.round(lab.rating))].map((_, i) => (
                        <StarIcon
                          key={i}
                          sx={{ color: "#DC7844", fontSize: "20px" }}
                        />
                      ))}
                      {[...Array(5 - Math.round(lab.rating))].map((_, i) => (
                        <StarOutlineIcon
                          key={i}
                          sx={{ color: "#05445E", fontSize: "20px" }}
                        />
                      ))}
                    </div>
                  </Grid>
                </Grid>
                {/* Icon button for menu */}
                <IconButton
                  aria-controls={`lab-menu-${index}`}
                  aria-haspopup="true"
                  onClick={(event) => handleMenuOpen(event, lab)}
                  style={{ position: "absolute", top: 0, right: 0 }}
                >
                  <MoreVertIcon />
                </IconButton>
                {/* Menu component */}
                <Menu
                  id={`lab-menu-${index}`}
                  anchorEl={menuAnchorEl}
                  open={Boolean(menuAnchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleEditClick}>Edit</MenuItem>
                  <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
                </Menu>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>


      <Dialog open={editFormOpen} onClose={handleFormClose}>
        <DialogTitle style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" style={{ flexGrow: 1, color: "#033043", fontFamily: "Lato", fontSize: "28px", }}>
            Edit Medical Store
          </Typography>
          <CloseIcon onClick={handleFormClose} style={{ cursor: 'pointer', }} />
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="text"
                fullWidth
                value={editedLab ? editedLab.name : ""}
                onChange={(e) =>
                  setEditedLab({ ...editedLab, name: e.target.value })
                }
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
                margin="dense"
                id="email"
                label="Email"
                type="text"
                fullWidth
                value={editedLab ? editedLab.email : ""}
                onChange={(e) =>
                  setEditedLab({
                    ...editedLab,
                    email: e.target.value,
                  })
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                id="phonenumber"
                label="Phone Number"
                type="text"
                fullWidth
                value={editedLab ? editedLab.phonenumber : ""}
                onChange={(e) =>
                  setEditedLab({ ...editedLab, phonenumber: e.target.value })
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CallIcon />
                    </InputAdornment>
                  ),
                }}

              />
            </Grid>
            <Grid item xs={6}>
              <Select
                labelId="Verify"
                id="Verify"
                value={selectedVerify}
                onChange={handleVerify}
                sx={{ marginTop: "5px" }}
                variant="outlined"
                size="small"
                style={{
                  width: "100%",
                  height: "60px",
                  padding: "7px",
                }}
                displayEmpty
              >
                <MenuItem value="" disabled>Select</MenuItem>
                <MenuItem value="verify">Verify</MenuItem>
                <MenuItem value="not verify">Not Verify</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                id="address"
                label="Adress"
                type="text"
                fullWidth
                value={editedLab ? editedLab.address : ""}
                onChange={(e) =>
                  setEditedLab({ ...editedLab, address: e.target.value })
                }

              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                id="area"
                label="Area"
                type="text"
                fullWidth
                value={editedLab ? editedLab.area : ""}
                onChange={(e) =>
                  setEditedLab({ ...editedLab, area: e.target.value })
                }

              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                id="cityortown"
                label="City or Town"
                type="text"
                fullWidth
                value={editedLab ? editedLab.cityortown : ""}
                onChange={(e) =>
                  setEditedLab({ ...editedLab, cityortown: e.target.value })
                }

              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                id="postalcode"
                label="Postal Code"
                type="text"
                fullWidth
                value={editedLab ? editedLab.postalcode : ""}
                onChange={(e) =>
                  setEditedLab({ ...editedLab, cityortown: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                margin="none"
                id="state"
                label="State"
                type="text"
                fullWidth
                value={editedLab ? editedLab.state : ""}
                onChange={(e) =>
                  setEditedLab({ ...editedLab, state: e.target.value })
                }

              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="none"
                id="country"
                label="Country"
                type="text"
                fullWidth
                value={editedLab ? editedLab.country : ""}
                onChange={(e) =>
                  setEditedLab({ ...editedLab, country: e.target.value })
                }
                I
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                margin="dense"
                id="rating"
                label="Rating"
                type="number"
                fullWidth
                value={editedLab ? editedLab.rating : ""}
                onChange={(e) =>
                  setEditedLab({ ...editedLab, rating: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                id="orders"
                label="No of Orders"
                type="number"
                fullWidth
                value={editedLab ? editedLab.orders : ""}
                onChange={(e) =>
                  setEditedLab({ ...editedLab, orders: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={6} justifyContent="center">
              <TextField
                margin="dense"
                label="Time"
                type="time"
                fullWidth
                value={time}
                onChange={(e) => setTime(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={6} justifyContent="center">
              <FormControl fullWidth>
                <InputLabel id="selected-days-label">Select Day</InputLabel>
                <Select
                  labelId="selected-days-label"
                  id="selected-days"
                  multiple
                  value={selectedDays}
                  onChange={handleDaysChange}
                  sx={{ marginTop: "5px" }}
                  variant="outlined"
                  size="small"
                  style={{
                    borderColor: "#05445E",
                    width: "100%",
                    padding: "7px",
                  }}
                >
                  <MenuItem value="" disabled>Select Days</MenuItem>
                  <MenuItem value="Sunday">Sunday</MenuItem>
                  <MenuItem value="Monday">Monday</MenuItem>
                  <MenuItem value="Tuesday">Tuesday</MenuItem>
                  <MenuItem value="Wednesday">Wednesday</MenuItem>
                  <MenuItem value="Thursday">Thursday</MenuItem>
                  <MenuItem value="Friday">Friday</MenuItem>
                  <MenuItem value="Saturday">Saturday</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormSubmit} sx={{ border: '1px solid #DC7844', color: "#DC7844" }}>Cancel</Button>
          <Button onClick={handleFormSubmit} sx={{ border: '1px solid #DC7844', color: "#DC7844" }}>Save</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider >
  );
}

export default MedicalStoreList;