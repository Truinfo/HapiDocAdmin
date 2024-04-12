import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Select, MenuItem as MuiMenuItem, Card, CardContent, Breadcrumbs, Badge, CardMedia, Grid, IconButton, Menu, ListItemIcon, ListItemText } from '@mui/material';
import stamp from '../../assets/icons/approved.png'

import { BsChatTextFill } from "react-icons/bs";
import StarIcon from '@mui/icons-material/Star';
import HospitalsEditDialog from './HospitalsEditDialog';
import HospitalsCreateDialog from './HospitalsCreateDialog';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { GrAdd } from "react-icons/gr";
const hospitalsData = [
  { id: 1,type:"verify", name: 'Hospital 1', location: 'Delhi', doctors: 25, address: 'Durganagar, Midhilapuri Vuda Colony, Madhurawada, Visakhapatnam, Andhra Pradesh 530048', rating: 4, imageUrl: 'https://www.apollohospitals.com/bangalore/wp-content/uploads/2021/08/Bannerghatta-Road-Banglore-768x476.jpg' },
  { id: 2,type:"pending", name: 'Hospital 2', location: 'Mumbai', doctors: 30, address: '456 Elm StrDurganagar, Midhilapuri Vuda Colony, Madhurawada, Visakhapatnam, Andhra Pradesh 530048eet', rating: 3, imageUrl: 'https://images.apollo247.in/pd-cms/cms/2022-08/Apollo%20Clinic%20Vizag.jpg?tr=w-250,q-80,f-webp,dpr-2.625,c-at_max' },
  { id: 3,type:"verify", name: 'Hospital 3', location: 'Bangalore', doctors: 20, address: '789 OaDurganagar, Midhilapuri Vuda Colony, Madhurawada, Visakhapatnam, Andhra Pradesh 530048k Street', rating: 5, imageUrl: 'https://images1-fabric.practo.com/dwaraka-medical-centre-visakhapatnam-1466578922-576a37ea3e88f.jpg' },
  { id: 4,type:"verify", name: 'Hospital 4', location: 'Chennai', doctors: 35, address: '101 PineDurganagar, Midhilapuri Vuda Colony, Madhurawada, Visakhapatnam, Andhra Pradesh 530048 Street', rating: 2, imageUrl: 'https://medicarehospitals.info/wp-content/uploads/2023/08/edt-1024x702.jpg' },
  // Add more hospital objects as needed
];


// Dummy data for locations
const locations = ['All Locations', 'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad'];

// Dummy data for ratings
const ratings = [
  { value: 'All Ratings', stars: null },
  { value: 1, stars: <StarIcon sx={{ color: '#05445E' }} /> },
  { value: 2, stars: <><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /></> },
  { value: 3, stars: <><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /></> },
  { value: 4, stars: <><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /></> },
  { value: 5, stars: <><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /></> },
];

function Hospitals() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedRating, setSelectedRating] = useState('All Ratings');
  const [anchorEl, setAnchorEl] = useState(null); // State for menu anchor
  const [selectedHospital, setSelectedHospital] = useState(null); // State for selected hospital
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };



  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
  };

  const handleCreateClick = () => {
    setIsCreateDialogOpen(true);
  };

  const handleCloseCreateDialog = () => {
    setIsCreateDialogOpen(false);
  };

  const handleMenuOpen = (event, hospital) => {
    setAnchorEl(event.currentTarget);
    setSelectedHospital(hospital);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEditOptionClick = () => {
    console.log("clicking")
    handleMenuClose();
    setIsEditDialogOpen(true);
  };

  const handleDeleteOptionClick = () => {
    // Implement delete functionality here
    handleMenuClose();
  };
  const RatingStars = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<StarIcon key={i} sx={{ color: '#ebc20c' }} />);
      } else {
        stars.push(<StarBorderIcon key={i} sx={{ color: '#b0afac' }} />);
      }
    }
    return (
      <div>
        {stars}
      </div>
    );
  };
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>

      <Box>
        <Grid style={{
           backgroundImage: "linear-gradient(to right, #fff, #36c0d3)", height: "60px", display: "flex",
          flexDirection: "row", justifyContent: "space-between", alignItems: "center",
        }} >
          <Grid style={{ flexDirection: "column", padding: "0 0 0 15px", }}><Typography variant="h5" style={{
            fontFamily: "sans-serif", fontSize: "24px", fontWeight: 600,
            color: "#05445E"
          }}>Clinics</Typography>
            <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px", }}>
              <Link style={{ color: "inherit", textDecoration: "none" }} to="/dashboard">
                Home
              </Link>
              <Typography color="#189ab4">Clinics</Typography>
            </Breadcrumbs>
          </Grid>
          <IconButton sx={{ marginRight: "10px" }}>
          <Link to="/clinic-request">
            <Badge badgeContent={4} color="warning">
              <BsChatTextFill style={{ color: "#05445E" }} />
            </Badge>
            </Link>
          </IconButton>

        </Grid>

        {/* </Box> */}
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: 5, mt: 2 }}>
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ width: '25%', height: '40px' }}
            InputProps={{
              sx: { height: '40px' }
            }}
          />
          <Box sx={{ display: 'flex', flex: '1', justifyContent: 'flex-end', gap: '10px', alignItems: 'center' }}>
            <Select
              id="location"
              label="Location"
              value={selectedLocation}
              onChange={handleLocationChange}
              variant="outlined"
              sx={{ height: '40px' }}
            >
              {locations.map((location) => (
                <MuiMenuItem key={location} value={location}>{location}</MuiMenuItem>
              ))}
            </Select>
            <Select
              id="ratings"
              label="Ratings"
              value={selectedRating}
              onChange={handleRatingChange}
              variant="outlined"
              sx={{ height: '40px' ,width:"18%"}}
            >
              {ratings.map((rating) => (

                <MuiMenuItem key={rating.value} value={rating.value}>

                  {rating.stars}
                </MuiMenuItem>
              ))}
            </Select>
            <Button variant="contained" color="primary" sx={{ bgcolor: '#DC7844'}} onClick={handleCreateClick}>
           < GrAdd  style={{fontSize:"25px"}}/>
            </Button>
          </Box>
        </Box>
        <Grid container spacing={3}>
          {hospitalsData.map((hospital) => (
            <Grid item xs={12} sm={6} key={hospital.id}>

              <Card sx={{ maxHeight: 500, width: '100%', position: 'relative' }}>
                <Link to={`/clinic-profile/${hospital.id}`} style={{ textDecoration: 'none' }}>
                  <CardMedia
                    component="img"
                    height={300}
                    image={hospital.imageUrl}
                    alt={hospital.name}
                  />
                  {hospital.type === 'verify' && (
                                    <img src={stamp} alt="stamp" style={{ position: 'absolute', top: 0, left: 0, width: 40, height: 40 }} />
                                )}
                </Link>

                <CardContent>
                  <Typography color="#123456" gutterBottom variant="h6" component="div">
                    {hospital.name}
                  </Typography>
                  <Typography>
                    <strong>Doctors:</strong> {hospital.doctors}<br />
                  </Typography>
                  <Typography>
                    <strong>Address:</strong> {hospital.address}<br />
                  </Typography>
                  <Typography style={{ display: "flex", justifyContent: "flex-start" }}>
                    <strong>Rating:</strong> <RatingStars rating={hospital.rating} />
                  </Typography>
                </CardContent>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={(event) => handleMenuOpen(event, hospital)}
                  sx={{ position: 'absolute', bottom: 0, right: 0 }}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MuiMenuItem onClick={handleEditOptionClick}>Edit</MuiMenuItem>
                  <MuiMenuItem onClick={handleDeleteOptionClick}>
                    <ListItemIcon>
                      <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Delete" />
                  </MuiMenuItem>
                </Menu>
              </Card>

            </Grid>
          ))}
        </Grid>
        <HospitalsEditDialog open={isEditDialogOpen} handleClose={handleCloseEditDialog} hospital={selectedHospital} />
        <HospitalsCreateDialog open={isCreateDialogOpen} handleClose={handleCloseCreateDialog} />
      </Box>
    </Box>
  );
}

export default Hospitals;