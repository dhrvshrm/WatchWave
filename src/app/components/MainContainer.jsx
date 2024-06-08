import { Stack } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMovieData } from "../hooks/useBrowseMovie";
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
        height: "80%",
        backgroundColor: "black",
      }}
    >
      <VideoComponent videoCompData={videoCompData} />
      <ToastContainer />
    </Stack>
  );
};
