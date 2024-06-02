import React from "react";
import { useUserStore } from "../store/userStore";
import { Typography } from "@mui/material";

function Browse() {
  const user = useUserStore((state) => state?.user);

  console.log(user);

  return <Typography>Browse</Typography>;
}

export default Browse;
