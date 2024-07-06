import { Stack, Typography } from "@mui/material";
import { MovieList } from "../components/MovieList";
import { useMovieData } from "../hooks/useBrowseMovie";

export const SecondaryContainer = () => {
  const movieData = useMovieData();
  console.log({ movieData });
  return (
    <Stack
      sx={{
        height: "120rem",
        mt: 30,
        overflow: "auto",
      }}
    >
      {MovieListConfig.map((config) => (
        <>
          <Typography variant="h5" sx={{ color: "white", m: 1, ml: 5 }}>
            {config.title}
          </Typography>
          <MovieList key={config.id} movieData={movieData} />
        </>
      ))}
    </Stack>
  );
};

const MovieListConfig = [
  { title: "Movie List", id: "movie" },
  { title: "Series List", id: "series" },
  { title: "asdd List", id: "asdd" },
  { title: "Movsdfgie List", id: "Movsdfgie" },
  { title: "asd List", id: "asd" },
];
