import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMovieData } from "../hooks/useBrowseMovie";
import { useUserStore } from "../store/userStore";

export const MainContainer = () => {
  const user = useUserStore((state) => state?.user);
  const movieData = useMovieData();
  console.log({ movieData });

  useEffect(() => {
    if (user) {
      toast.success(`Welcome ${user?.name}!`);
    }
  }, [user]);

  return (
    <Stack
      sx={{
        backgroundColor: "lightgray",
        height: "50rem",
        mt: "-10rem",
      }}
    >
      <ToastContainer />
    </Stack>
  );
};
