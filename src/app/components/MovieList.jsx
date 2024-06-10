import { Stack, Typography } from "@mui/material";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movieData }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        overflow: "hidden",
        height: "40rem",
      }}
      direction="column"
      gap={1}
    >
      <Typography
        variant="h5"
        sx={{ color: "white", fontWeight: 600, ml: 6, my: 0.2 }}
      >
        {title}
      </Typography>
      <Stack sx={{ height: "50rem" }}>
        {movieData?.length > 0 && (
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
        )}
      </Stack>
    </Stack>
  );
};
