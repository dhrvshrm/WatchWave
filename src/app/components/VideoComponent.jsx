import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import YouTube from "react-youtube";

export const VideoComponent = ({ videoCompData }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ3NTUwOTE5NjZiN2Q1NzVkM2Y0NmIxYjk2N2NiMCIsInN1YiI6IjY2NWU2ZWFiMzk3ZGVhZWNjZjIzM2I1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dOIazya5Reh5qD7-xQUW8pK5Fjhdyj0HCQ8pJW-9wo",
    },
  };

  const movieId = 1290938;

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const res = {
    iso_639_1: "en",
    iso_3166_1: "US",
    name: "Coming May 24, 2024",
    key: "oR52jRR0r0c",
    site: "YouTube",
    size: 1080,
    type: "Teaser",
    official: true,
    published_at: "2024-05-15T18:00:35.000Z",
    id: "6644f913a8faaaac103d392c",
  };

  fetchMovieDetails();
  console.log({ videoCompData });
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
      {res && (
        <YouTube
          videoId={res.key}
          opts={{
            width: "1550rem",
            height: "650rem",
            playerVars: {
              controls: 0,
              autoplay: 1,
              modestbranding: 1,
              showinfo: 0,
              // loop: 1,
            },
          }}
        />
      )}
      {/* <Image
        src={`https://image.tmdb.org/t/p/w500${videoCompData?.poster_path}`}
        alt={videoCompData?.title}
        width={500}
        height={500}
      /> */}
      {/* {videoCompData?.title} */}
    </Stack>
  );
};
