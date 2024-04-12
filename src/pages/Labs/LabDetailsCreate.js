import React from "react";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";

function LabDetailsCreate({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create Lab</DialogTitle>
      <DialogContent>
        {/* Upload Picture */}
        <input type="file" accept="image/*" />
        {/* Lab Name */}
        <TextField margin="dense" label="Lab Name" fullWidth />
        {/* Address */}
        <TextField margin="dense" label="Address" fullWidth />
        {/* Email */}
        <TextField margin="dense" label="Email" fullWidth />
        {/* Phone Number */}
        <TextField margin="dense" label="Phone Number" fullWidth />
        {/* Rating */}
        <TextField margin="dense" label="Rating" fullWidth />
        {/* Available Days */}
        <TextField margin="dense" label="Available Days" fullWidth />
        {/* Timings */}
        <TextField margin="dense" label="Timings" fullWidth />
        {/* Description */}
        <TextField margin="dense" label="Description" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

export default LabDetailsCreate;