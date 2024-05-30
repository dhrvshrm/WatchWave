import { Box, Typography } from "@mui/material";
import React from "react";

const STYLES = {
  footerContainer: {
    width: "100%",
    zIndex: 1,
    backgroundColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
    height: "8rem",
  },
};

function Footer() {
  return (
    <Box sx={STYLES.footerContainer}>
      <Typography variant="h6" component="h6" color="white">
        Footer
      </Typography>
    </Box>
  );
}

export default Footer;
