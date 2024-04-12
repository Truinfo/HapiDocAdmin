import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

function LabsDetailsEdit() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 'xl', margin: 'auto', padding: '20px' }}> {/* Add maxWidth="xl" */}
      <Typography variant="h5" gutterBottom>
        Edit Lab Details
      </Typography>
      <Typography variant="p1" gutterBottom>
        Address
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', marginBottom: 2 }}>
          <Box sx={{ marginRight: '10px', flex: 1 }}>
            <TextField label="Door No" fullWidth variant="outlined" />
          </Box>
          <Box sx={{ flex: 1 }}>
            <TextField label="Street" fullWidth variant="outlined" />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', marginBottom: 2 }}>
          <Box sx={{ marginRight: '10px', flex: 1 }}>
            <TextField label="Area" fullWidth variant="outlined" />
          </Box>
          <Box sx={{ flex: 1 }}>
            <TextField label="District" fullWidth variant="outlined" />
          </Box>
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField label="Pincode" fullWidth variant="outlined" />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField label="Lab Name" fullWidth variant="outlined" />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField type="file" fullWidth variant="outlined" />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField label="Phone Number" fullWidth variant="outlined" />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField label="Email" fullWidth variant="outlined" />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField label="Contact Person Name" fullWidth variant="outlined" />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField label="Rating" fullWidth variant="outlined" />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField label="Available Days" fullWidth variant="outlined" />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField label="Timings" fullWidth variant="outlined" />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField label="Description" multiline rows={4} fullWidth variant="outlined" />
        </Box>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
    </Box>
  );
}

export default LabsDetailsEdit;