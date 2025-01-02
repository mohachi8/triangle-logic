import { Box, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/test")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "background.default",
        p: 3,
        // marginLeft: drawerWidth,
      }}
    >
      <Toolbar />
      <Typography paragraph>{message || "Loading..."}</Typography>
    </Box>
  );
};
export default App;
