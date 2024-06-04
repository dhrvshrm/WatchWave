import { Box, Typography } from "@mui/material";
import React from "react";

const STYLES = {
  footerContainer: {
    width: "100%",
    zIndex: 1,
    backgroundColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
    height: "15rem",
    mt: "auto",
  },
};

export const Footer = () => {
  return (
    <Box sx={STYLES.footerContainer}>
      <Typography variant="h6" component="h6" color="white">
        Footer
      </Typography>
    </Box>
  );
};
