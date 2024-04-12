import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid } from '@mui/material';

function HospitalsCreateDialog({ open, handleClose, handleCloseCreateDialog }) {
  const [name, setName] = useState('');
  const [doctors, setDoctors] = useState('');
  const [doorFlat, setDoorFlat] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [rating, setRating] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDoctorsChange = (event) => {
    setDoctors(event.target.value);
  };

  const handleDoorFlatChange = (event) => {
    setDoorFlat(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = () => {
    // Create a new hospital with the provided data
    const newHospital = {
      name: name,
      doctors: doctors,
      address: {
        doorFlat: doorFlat,
        area: area,
        city: city,
        district: district,
        state: state,
        pincode: pincode
      },
      rating: rating
    };
    // Call the handleCloseCreateDialog function to pass the new hospital data
    handleCloseCreateDialog(newHospital);
    // Reset the form fields
    setName('');
    setDoctors('');
    setDoorFlat('');
    setArea('');
    setCity('');
    setDistrict('');
    setState('');
    setPincode('');
    setRating('');
    // Close the dialog
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create New Hospital</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          margin="dense"
          label="Number of Doctors"
          type="text"
          fullWidth
          value={doctors}
          onChange={handleDoctorsChange}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Door/Flat no"
              type="text"
              fullWidth
              value={doorFlat}
              onChange={handleDoorFlatChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Area"
              type="text"
              fullWidth
              value={area}
              onChange={handleAreaChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="City"
              type="text"
              fullWidth
              value={city}
              onChange={handleCityChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="District"
              type="text"
              fullWidth
              value={district}
              onChange={handleDistrictChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="State"
              type="text"
              fullWidth
              value={state}
              onChange={handleStateChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              label="Pincode"
              type="text"
              fullWidth
              value={pincode}
              onChange={handlePincodeChange}
            />
          </Grid>
        </Grid>
        <TextField
          margin="dense"
          label="Rating"
          type="text"
          fullWidth
          value={rating}
          onChange={handleRatingChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

export default HospitalsCreateDialog;