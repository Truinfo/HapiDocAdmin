import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';

const BlogDetails = () => {
  const { id } = useParams();
  const blogDetails = {
    id: id,
    title: "Top 10 Benefits of Eating Fruits for Skin",
    category: "Skin Care",
    author: "Paavan",
    publishedDate: "2024-03-16",
    updatedDate: "2024-03-16",
    image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/orange-juice-1296x728-feature.jpg?w=1155&h=1528",
    paragraph1Heading: "Heading 1",
    paragraph1Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae malesuada leo. Nam eget quam eu lorem maximus fermentum. Nam ullamcorper nunc at lorem rhoncus, et auctor velit pharetra. Nullam interdum orci et lectus malesuada, quis sagittis nisi dictum. Nam accumsan tortor vel augue condimentum tristique. Donec blandit ipsum non magna mattis, nec rhoncus nunc vulputate. Suspendisse potenti.",
    paragraph2Heading: "Heading 2",
    paragraph2Content: "Phasellus nec dolor nec elit rhoncus varius. Donec finibus massa ut nibh rutrum, a facilisis magna tincidunt. Morbi sit amet vehicula nibh. Vivamus eu luctus ipsum. Maecenas convallis sem vitae urna luctus, vitae fermentum est tincidunt. Integer laoreet lorem in justo bibendum, at ultrices urna accumsan. Aenean mattis lacus non orci vestibulum, vitae ultricies enim sodales. Fusce viverra nulla sit amet tortor pulvinar varius.",
    paragraph3Heading: "Heading 3",
    paragraph3Content: "Third paragraph content goes here...",
    likes: 10,
    dislikes: 2,
    comments: [
      { id: 1, user: "User1", comment: "First comment" },
      { id: 2, user: "User2", comment: "Second comment" },
      { id: 3, user: "User3", comment: "Third comment" },
    ],
    tags: ["Health", "Skin Care", "Fruits", "Diet"]
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box style={{ display: 'flex' }}>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // Center items horizontally
          maxWidth: "100%", // Limit the width of the container for better readability
        }}
      >
        <h1 style={{ marginTop: "60px", marginBottom: "20px", textAlign: "start",
         paddingLeft: "3%",fontFamily:"sans-serif", color:"#02264d", fontSize:"30px" }}>
          {blogDetails.title}</h1>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }} >

          <img
            src={blogDetails.image}
            alt="Blog"       
            style={{
              width: "80%", // Fill the width of the container
              marginBottom: "10px", // Adjust the space between the image and the title
              marginTop: "30px" // Adjust the space between the title and the image
            }}
          />

          <div style={{ display: "flex", marginBottom: "20px" }}>
            <p style={{fontFamily:"sans-serif", color:"#191f1f", fontSize:"18px"}}>Date of Publish: {blogDetails.publishedDate}</p>
            <p style={{ marginLeft: "10px", marginRight: "10px" , fontSize:"18px"}}>|</p> {/* Divider */}
            <p style={{fontFamily:"sans-serif", color:"#191f1f", fontSize:"18px"}}>Published By: {blogDetails.author}</p>
            <p style={{ marginLeft: "10px", marginRight: "10px" , fontSize:"18px"}}>|</p> {/* Divider */}
            <p style={{fontFamily:"sans-serif", color:"#191f1f", fontSize:"18px"}}>Updated on: {blogDetails.updatedDate}</p>
            <p style={{ marginLeft: "10px", marginRight: "10px" , fontSize:"18px"}}>|</p> {/* Divider */}
            <p style={{fontFamily:"sans-serif", color:"#191f1f", fontSize:"18px"}}>Category: {blogDetails.category}</p>
          </div>

          <Box style={{ textAlign: "start", paddingLeft: "3%", paddingRight:"3%"}}>
            <h2 style={{color:"#02264d"}}>{blogDetails.paragraph1Heading}</h2>
            <p>{blogDetails.paragraph1Content}</p>
            <h2 style={{color:"#02264d"}}>{blogDetails.paragraph2Heading}</h2>
            <p>{blogDetails.paragraph2Content}</p>
            <h2 style={{color:"#02264d"}}>{blogDetails.paragraph3Heading}</h2>
            <p>{blogDetails.paragraph3Content}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ThumbUpIcon style={{ marginRight: "5px", color: "blue" }} />
              <span>{blogDetails.likes}</span>
              <ThumbDownIcon style={{ marginLeft: "20px", marginRight: "5px", color: "red" }} />
              <span>{blogDetails.dislikes}</span>
              <CommentIcon style={{ marginLeft: "20px", marginRight: "5px", color: "green" }} />
              <span>{blogDetails.comments.length} Comments</span>
            </div>

            <div>
              <h2>Tags:</h2>
              {blogDetails.tags.map(tag => (
                <span key={tag} style={{ marginRight: "10px" }}>{tag}</span>
              ))}
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BlogDetails;