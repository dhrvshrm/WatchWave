import { Box } from "@mui/material";
import React from "react";

const STYLES = {
  vignette: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `
      linear-gradient(to top, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8)),
      linear-gradient(to right, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8)),
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8)),
      linear-gradient(to left, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8))
    `,
    backgroundSize: "100% 30%, 30% 100%, 100% 30%, 30% 100%",
    backgroundPosition: "top, right, bottom, left",
    backgroundRepeat: "no-repeat",
    zIndex: 1,
  },
};

export const VignetteWrapper = () => {
  return <Box sx={STYLES.vignette} />;
};
