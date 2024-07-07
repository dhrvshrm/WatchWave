import { Stack } from "@mui/material";
import { MovieCard } from "./MovieCard";
import { useEffect, useRef } from "react";

const STYLES = {
  container: {
    width: "100%",
    height: "50rem",
    overflow: "hidden",
    position: "relative",
  },
  movieList: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 1,
    px: 2,
    position: "absolute",
  },
};

export const MovieList = ({ movieData }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", (e) => {
        container.scrollLeft += e.deltaY;
      });
    }
  }, []);

  return (
    <Stack ref={containerRef} sx={STYLES.container}>
      <Stack sx={STYLES.movieList}>
        {movieData?.length > 0 &&
          movieData.map((data) => (
            <Stack key={data.id} sx={{ flex: "0 0 auto" }}>
              <MovieCard data={data} />
            </Stack>
          ))}
      </Stack>
    </Stack>
  );
};
