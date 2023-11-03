import { Box, CircularProgress } from "@mui/material";
import React from "react";
const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "80vh",
        width:"100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
