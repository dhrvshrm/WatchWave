import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMovieData } from "../hooks/useBrowseMovie";
import { useUserStore } from "../store/userStore";
import { TMDB_IMAGE_URL } from "../utils";

export const Browse = () => {
  const user = useUserStore((state) => state?.user);
  const movieData = useMovieData();
  console.log({ movieData });

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
