import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useFetchMovieDetail } from "../hooks/useFetchMovieDetail";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const VideoComponent = ({ videoCompData }) => {
  const id = videoCompData?.id;
  const { singleVideoData, loading } = useFetchMovieDetail(id);

  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {singleVideoData && (
        <Box
          sx={{ width: "100%", height: "100vh", mt: -30, position: "relative" }}
        >
          <iframe
            width="100%"
            height={880}
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
              height: 890,
              background: "radial-gradient(circle, transparent, black)",
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 370,
              left: 100,
              width: "35%",
              height: 1000,
              zIndex: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                mt: 10,
                fontWeight: 600,
                fontFamily: "Outfit, sans-serif",
              }}
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
                fontFamily: "Outfit, sans-serif",
              }}
            >
              {videoCompData.overview}
            </Typography>
            <Stack direction="row" gap={2} mt={3}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "lightgray",
                  color: "black",
                  width: "fit-content",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                  py: 1.25,
                }}
              >
                <PlayArrowRoundedIcon />
                <Typography
                  sx={{
                    fontWeight: 550,
                    fontFamily: "Outfit, sans-serif",
                    textTransform: "none",
                    ml: 0.5,
                  }}
                >
                  Play
                </Typography>
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "rgba(210, 210, 210, 0.3)",
                  color: "white",
                  width: "fit-content",
                  "&:hover": {
                    backgroundColor: "rgba(210, 210, 210, 0.6)",
                  },
                  py: 1.25,
                  alignItems: "center",
                }}
              >
                <InfoOutlinedIcon fontSize="small" />
                <Typography
                  sx={{
                    fontWeight: 550,
                    fontFamily: "Outfit, sans-serif",
                    textTransform: "none",
                    ml: 1,
                  }}
                >
                  More Info
                </Typography>
              </Button>
            </Stack>
          </Box>
        </Box>
      )}
    </Stack>
  );
};
