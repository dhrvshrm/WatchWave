import { Stack, Typography } from "@mui/material";
import React from "react";

export const SecondaryContainer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "cyan",
        height: "200vh",
      }}
    >
      <Typography variant="h3" sx={{ color: "white" }}></Typography>
    </Stack>
  );
};
