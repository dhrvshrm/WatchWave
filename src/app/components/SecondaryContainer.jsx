import { Stack } from "@mui/material";
import { MovieList } from "../components/MovieList";
import { useMovieData } from "../hooks/useBrowseMovie";

export const SecondaryContainer = () => {
  const movieData = useMovieData();
  console.log({ movieData });
  return (
    <Stack
      sx={{
        height: "100%",
        width: "99vw",
      }}
    >
      <MovieList title="Movie List" movieData={movieData} />
    </Stack>
  );
};
