import { Stack, Typography } from "@mui/material";
import { MovieCard } from "./MovieCard";
import "./styles.css"; // Import your CSS file

export const MovieList = ({ title, movieData }) => {
  return (
    <Stack className="scroll-container">
      <Typography
        variant="h5"
        sx={{ color: "white", fontWeight: 600, ml: 6, my: 0.2 }}
      >
        {title}
      </Typography>
      <Stack className="scroll-content">
        {movieData?.length > 0 ? (
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={1}
          >
            {movieData.map((data) => (
              <Stack key={data.id}>
                <MovieCard data={data} />
              </Stack>
            ))}
          </Stack>
        ) : (
          <Typography variant="h6">No Movies Found</Typography>
        )}
      </Stack>
    </Stack>
  );
};
