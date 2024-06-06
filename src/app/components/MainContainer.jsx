import { Stack } from "@mui/material";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMovieData } from "../hooks/useBrowseMovie";
import { useUserStore } from "../store/userStore";
import { VideoComponent } from "./VideoComponent";

function getRandomVideoCompData(movieData) {
  if (!movieData) {
    return null;
  } else if (movieData.length === 0) {
    toast.error("No movie data found");
    return null;
  } else if (movieData.length) {
    const randomIndex = Math.floor(Math.random() * movieData?.length);
    return movieData[randomIndex];
  }
}

export const MainContainer = () => {
  const movieData = useMovieData();
  const videoCompData = getRandomVideoCompData(movieData);

  return (
    <Stack
      sx={{
        backgroundColor: "lightgray",
        height: "50rem",
        mt: "-10rem",
      }}
    >
      <VideoComponent videoCompData={videoCompData} />
      <ToastContainer />
    </Stack>
  );
};
