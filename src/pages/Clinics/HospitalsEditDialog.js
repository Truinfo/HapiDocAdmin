import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem, FormControl, InputLabel, Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function HospitalsEditDialog({ open, handleClose }) {
  // Dummy data for ratings
  const ratings = [
    { value: 1, stars: <StarIcon sx={{ color: '#05445E' }} /> },
    { value: 2, stars: <><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /></> },
    { value: 3, stars: <><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /></> },
    { value: 4, stars: <><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /></> },
    { value: 5, stars: <><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /><StarIcon sx={{ color: '#05445E' }} /></> },
  ];

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Hospital</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          // You can use state variables and handlers to manage the input values
        />
        <TextField
          label="Number of Doctors"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          // You can use state variables and handlers to manage the input values
        />
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', '& > *': { marginRight: '15px', marginBottom: '10px' }, flexGrow: 1 }}>
          <TextField
            label="Door/Flat no"
            variant="outlined"
            margin="normal"
            // You can use state variables and handlers to manage the input values
          />
          <TextField
            label="Area"
            variant="outlined"
            margin="normal"
            // You can use state variables and handlers to manage the input values
          />
          <TextField
            label="City"
            variant="outlined"
            margin="normal"
            // You can use state variables and handlers to manage the input values
          />
          <TextField
            label="District"
            variant="outlined"
            margin="normal"
            // You can use state variables and handlers to manage the input values
          />
          <TextField
            label="State"
            variant="outlined"
            margin="normal"
            // You can use state variables and handlers to manage the input values
          />
          <TextField
            label="Pincode"
            variant="outlined"
            margin="normal"
            // You can use state variables and handlers to manage the input values
          />
        </Box>
        <Box sx={{ mt: 2, width: '100%' }}>
          <FormControl fullWidth>
            <InputLabel>Ratings</InputLabel>
            <Select
              // You can use state variables and handlers to manage the selected rating
              defaultValue={1}
              label="Ratings"
            >
              {ratings.map((rating) => (
                <MenuItem key={rating.value} value={rating.value}>
                  {rating.stars}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" gutterBottom>
            Upload Image
          </Typography>
          {/* Implement file upload functionality */}
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
}

export default HospitalsEditDialog;