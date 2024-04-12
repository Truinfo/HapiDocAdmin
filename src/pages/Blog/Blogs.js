import React, { useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Menu, Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Card, Breadcrumbs, Link,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { ArrowDropDown, MoreVert } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const Blogs = () => {
  const navigate = useNavigate();

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [blog, setBlog] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [image, setImage] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [editBlogData, setEditBlogData] = useState(null); // Data for editing

  const handleMenuOpen = (event, blog) => {
    setMenuAnchorEl(event.currentTarget);
    setBlog(blog);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setBlog(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenCreateDialog = () => {
    setOpenCreateDialog(true);
    handleClose();
  };

  const handleCloseCreateDialog = () => {
    setOpenCreateDialog(false);
  };


  const handleOpenEditDialog = (blogData) => {
    setEditBlogData(blogData);
    setOpenEditDialog(true);
    handleClose();
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const redirectToBlogDetails = (index) => {
    setSelectedCardIndex(index);
    navigate(`/blog-details/${index}`);
  };

  // Dummy data for additional cards
  const additionalCards = Array.from({ length: 6 }, (_, index) => index);

  const handleEditSave = () => {
    // Handle edit save action here
    handleCloseEditDialog(); // Close the edit dialog
  };

  const handleCreateSave = () => {
    // Handle create save action here
    handleCloseCreateDialog(); // Close the create dialog
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, }}>
      {/* <Box
        sx={{
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ color: "#033043", textDecoration: "none" }}
        >
          Blogs
        </Typography>
        <Box> */}
          
          {/* <Button
              id="categories-button"
              aria-label="categories"
              aria-controls="categories-menu"
              aria-haspopup="true"
              onClick={handleClick}
              sx={{
                borderRadius: "4px",
                padding: "10px",
              }}
            >
              Categories <ArrowDropDown />
            </Button> */}
          {/* <Menu
            id="categories-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Heat Conditions</MenuItem>
            <MenuItem onClick={handleClose}>Weight Management</MenuItem>
            <MenuItem onClick={handleClose}>Mental Health</MenuItem>
            <MenuItem onClick={handleClose}>Skin Care</MenuItem>
          </Menu>
        </Box>
      </Box> */}
      <Grid style={{
         backgroundImage: "linear-gradient(to right, #fff, #36c0d3)", height: "60px", display: "flex",
        flexDirection: "row", justifyContent: "space-between", alignItems: "center",
      }} >
        <Grid style={{ flexDirection: "column", padding: "0 0 0 15px", }}><Typography variant="h5" style={{
          fontFamily: "sans-serif", fontSize: "24px", fontWeight: 600,
          color: "#05445E"
        }}>Blog</Typography>
          <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "12px", }}>
            <Link underline="hover" color="inherit" href="/dashboard">
              Home
            </Link>
            <Typography color="#189ab4">Blog</Typography>
          </Breadcrumbs>

        </Grid>
        <Button
            onClick={handleOpenCreateDialog}
            sx={{
              backgroundColor: "#DC7844", color: "#FFFFFF",
              borderRadius: "4px",
              padding: "10px",
            }}
          >
            Create
          </Button>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {additionalCards.map((index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 400,
              margin: "0 20px 40px 0",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <CardContent onClick={() => redirectToBlogDetails(index + 1)}>
              <img
                src={`https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/orange-juice-1296x728-feature.jpg?w=1155&h=1528`}
                alt="Orange Juice"
                style={{ width: "100%" }}
              />
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "black", textDecoration: "none" }}
              >
                Top 10 uses of Drinking JUices in Summer
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontStyle="italic"
                sx={{ color: "black", textDecoration: "none" }}
              >
                Category: Category Name
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "black", textDecoration: "none" }}
              >
                Published by: Author Name
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "black", textDecoration: "none" }}
              >
                Date of Published: {/* Add date here */}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "black", textDecoration: "none" }}
              >
                Updated Date: {/* Add date here */}
              </Typography>
            </CardContent>
            <IconButton
              aria-label="more"
              aria-controls="blog-menu"
              aria-haspopup="true"
              onClick={(event) => handleMenuOpen(event, blog)}
              sx={{ position: "absolute", right: 5, bottom: 5 }}
            >
              <MoreVert />
            </IconButton>
            <Menu
              id="blog-menu"
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
              <MenuItem onClick={() => handleOpenEditDialog(blog)}>
                Edit
              </MenuItem>
              <MenuItem>Delete</MenuItem>
            </Menu>
          </Card>
        ))}
      </Box>
      {/* Create Blog Dialog */}
      <Dialog open={openCreateDialog} onClose={handleCloseCreateDialog}>
        <DialogTitle>Create Blog</DialogTitle>
        <DialogContent>
          <label htmlFor="upload-file">
            <Button
              component="span"
              sx={{
                backgroundColor: "#DC7844",
                color: "white",
                "&:hover": {
                  backgroundColor: "#DC7844",
                  boxShadow: "none",
                },
              }}
            >
              Choose File
            </Button>
          </label>
          <input
            id="upload-file"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <TextField label="Heading" fullWidth margin="normal" />
          <TextField label="Published By" fullWidth margin="normal" />
          <TextField
            label="Date of Upload"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Updated Date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <Button
            onClick={handleCreateSave}
            sx={{
              backgroundColor: "#DC7844",
              color: "white",
              "&:hover": {
                backgroundColor: "#DC7844",
                boxShadow: "none",
              },
            }}
          >
            Save
          </Button>
        </DialogContent>
      </Dialog>
      {/* Edit Blog Dialog */}
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Blog</DialogTitle>
        <DialogContent>
          <label htmlFor="upload-file">
            <Button
              component="span"
              sx={{
                backgroundColor: "#DC7844",
                color: "white",
                "&:hover": {
                  backgroundColor: "#DC7844",
                  boxShadow: "none",
                },
              }}
            >
              Choose File
            </Button>
          </label>
          <input
            id="upload-file"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <TextField label="Heading" fullWidth margin="normal" />
          <TextField label="Published By" fullWidth margin="normal" />
          <TextField
            label="Date of Upload"
            type="date"
            fullWidth
            margin="normal"

            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Updated Date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <Button
            onClick={handleEditSave}
            sx={{
              backgroundColor: "#DC7844",
              color: "white",
              "&:hover": {
                backgroundColor: "#DC7844",
                boxShadow: "none",
              },
            }}
          >
            Save
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Blogs;