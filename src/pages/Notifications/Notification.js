import { Avatar, Box, Divider, List, ListItem, Typography } from "@mui/material";
import React from "react";

const Notification = () => {
  return (
    <Box sx={{ marginTop: "2px" }}>
      <List>
        <ListItem>
          <Box>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Avatar>U</Avatar>
                <Typography variant="h6" sx={{ marginLeft: "10px" }}>User Name</Typography>
              </div>
              <div>
                <Typography variant="body2" sx={{ marginLeft: "10px" }}>2 mins ago</Typography>
              </div>
            </div>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' , marginTop:"8px" , marginLeft:"20px"}}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Box>
        </ListItem>
        <Divider />

        {/* Second ListItem */}
        <ListItem>
          <Box>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Avatar>U</Avatar>
                <Typography variant="h6" sx={{ marginLeft: "10px" }}>User Name</Typography>
              </div>
              <div>
                <Typography variant="body2" sx={{ marginLeft: "10px" }}>2 mins ago</Typography>
              </div>
            </div>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' , marginTop:"8px" , marginLeft:"20px"}}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Box>
        </ListItem>

        <Divider />
        {/* Third ListItem */}
        <ListItem>
          <Box>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Avatar>U</Avatar>
                <Typography variant="h6" sx={{ marginLeft: "10px" }}>User Name</Typography>
              </div>
              <div>
                <Typography variant="body2" sx={{ marginLeft: "10px" }}>2 mins ago</Typography>
              </div>
            </div>
            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' , marginTop:"8px" , marginLeft:"20px"}}>
              It is a long established fact that a reader will be distracted
            </Typography>
          </Box>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
}

export default Notification;
