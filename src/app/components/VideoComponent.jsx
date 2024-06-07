import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

export const VideoComponent = ({ videoCompData }) => {
  const id = videoCompData?.id;
  const [singleVideoData, setSingleVideoData] = useState();
  console.log({ singleVideoData });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ3NTUwOTE5NjZiN2Q1NzVkM2Y0NmIxYjk2N2NiMCIsInN1YiI6IjY2NWU2ZWFiMzk3ZGVhZWNjZjIzM2I1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dOIazya5Reh5qD7-xQUW8pK5Fjhdyj0HCQ8pJW-9wo",
    },
  };
  const randomNumber = Math.floor(Math.random() * 7) + 1;
  console.log({ randomNumber });

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        options
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSingleVideoData(data.results[randomNumber]);
      console.log(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  return (
    <Stack
      sx={{
        width: "100%",
        position: "relative",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
      }}
    >
      {singleVideoData && (
        <Box sx={{ width: "100%", height: "100%", mt: -30 }}>
          <iframe
            width={1750}
            height={1000} // ?rel=0&amp;fs=0&amp;showinfo=0
            src={`https://www.youtube.com/embed/${singleVideoData.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&fs=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            autoPlay={1}
            hideInfo
            marginTop={10}
          />
        </Box>
      )}
    </Stack>
  );
};
