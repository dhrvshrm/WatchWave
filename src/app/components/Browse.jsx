import React, { useEffect } from "react";
import { useUserStore } from "../store/userStore";
import { Stack, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Browse = () => {
  const user = useUserStore((state) => state?.user);
  console.log({ user });

  useEffect(() => {
    if (user) {
      toast.success(`Welcome ${user?.name}!`);
    }
  }, [user]);

  return (
    <Stack>
      <Typography variant="h1" component="h1" color="gray">
        Browse
      </Typography>{" "}
      <ToastContainer />
    </Stack>
  );
};
