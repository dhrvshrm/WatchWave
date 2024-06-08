import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { useFetchMovieDetail } from "../hooks/useFetchMovieDetail";

export const VideoComponent = ({ videoCompData }) => {
  const id = videoCompData?.id;
  const { singleVideoData, loading } = useFetchMovieDetail(id);
  console.log({ singleVideoData, videoCompData });

  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
      }}
    >
      {singleVideoData && (
        <Box
          sx={{ width: "100%", height: "100vh", mt: -30, position: "relative" }}
        >
          <iframe
            width={1760}
            height={1000}
            src={`https://www.youtube.com/embed/${singleVideoData.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&fs=0&loop=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            autoPlay={1}
            hideInfo
            loop={1}
            marginTop={10}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: 1000,
              background: "radial-gradient(circle, transparent, black)",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 500,
              left: 100,
              width: "35%",
              height: 1000,
              zIndex: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: "white", mt: 10, fontWeight: 600 }}
            >
              {videoCompData.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                mt: 5,
                fontWeight: 400,
                fontSize: 19,
              }}
            >
              {videoCompData.overview}
            </Typography>
          </Box>
        </Box>
      )}
    </Stack>
  );
};
