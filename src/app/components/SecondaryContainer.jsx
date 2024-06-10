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
        backgroundColor: "gray",
        mt: 8,
        px: 4,
        py: 3,
      }}
      direction="column"
      gap={2}
    >
      {MOvieListCOnfig.map((config) => (
        <MovieList key={config.id} title={config.title} movieData={movieData} />
      ))}
    </Stack>
  );
};

const MOvieListCOnfig = [
  { title: "Movie List", id: "movie" },
  { title: "Series List", id: "series" },
  { title: "asdd List", id: "asdd" },
  { title: "Movsdfgie List", id: "Movsdfgie" },
  { title: "asd List", id: "asd" },
];
