import { Stack, Typography } from "@mui/material";
import exp from "constants";
import Image from "next/image";
import React from "react";

export const MovieCard = ({ data }) => {
  return (
    <Stack
      sx={{
        width: 185,
        borderRadius: 3,
        backgroundColor: "black",
        height: 310,
        cursor: "pointer",

        "&:hover": {
          transform: "scale(1.05)",
          transition: "all 0.3s ease",
        },
      }}
      direction="column"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt="Kingdom of the Planet of the Apes"
        width={185}
        height={240}
        style={{
          borderRadius: "12px 12px 0 0",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <Stack sx={{ width: "100%" }}>
        <Typography
          variant="h6"
          sx={{ fontSize: "1rem", fontWeight: "bold", color: "white", p: 1 }}
        >
          {data.title}
        </Typography>
      </Stack>
    </Stack>
  );
};
