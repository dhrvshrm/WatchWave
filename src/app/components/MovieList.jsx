import { Stack, Typography } from "@mui/material";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ movieData }) => {
  return (
    <Stack
      sx={{
        width: "100%",
        overflow: "auto",
        pt: 1,
      }}
    >
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
