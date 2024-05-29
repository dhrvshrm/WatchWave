import { Box, Typography } from "@mui/material";
import React from "react";

const STYLES = {
  footerContainer: {
    width: "100%",
    position: "sticky",
    bottom: 0,
    zIndex: 100,
    backgroundColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
    height: "15rem",
  },
};

function Footer() {
  return (
    <Box sx={StyleSheet.footerContainer}>
      <Typography variant="h6" component="h6" gutterBottom>
        Footer
      </Typography>
    </Box>
  );
}

export default Footer;
