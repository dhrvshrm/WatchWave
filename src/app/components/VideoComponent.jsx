import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useFetchMovieDetail } from "../hooks/useFetchMovieDetail";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const STYLES = {
  mainCont: { width: "100%", height: "100vh", mt: -30, position: "relative" },
  typography: {
    title: {
      color: "white",
      mt: 10,
      fontWeight: 600,
      fontFamily: "Outfit, sans-serif",
    },
    overview: {
      color: "white",
      mt: 5,
      fontWeight: 400,
      fontSize: 19,
      fontFamily: "Outfit, sans-serif",
    },
  },
  buttonBase: {
    width: "fit-content",
    py: 1.25,
    textTransform: "none",
    fontFamily: "Outfit, sans-serif",
  },
  playButton: {
    backgroundColor: "lightgray",
    color: "black",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  infoButton: {
    backgroundColor: "rgba(210, 210, 210, 0.3)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(210, 210, 210, 0.6)",
    },
    alignItems: "center",
  },
  titleAndButtons: {
    position: "absolute",
    top: 370,
    left: 100,
    width: "35%",
    height: 1000,
    zIndex: 1,
  },
  vignetteContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 890,
    background: "radial-gradient(circle, transparent, black)",
    zIndex: 0,
  },
};

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
        <Box sx={STYLES.mainCont}>
          <iframe
            width="100%"
            height={900}
            src={`https://www.youtube.com/embed/${singleVideoData.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&fs=0&loop=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            autoPlay={1}
            hideInfo
            loop={1}
            marginTop={10}
            frameBorder="0"
          />
          <Box sx={STYLES.vignetteContainer} />
          <Box sx={STYLES.titleAndButtons}>
            <Typography variant="h4" sx={{ ...STYLES.typography.title }}>
              {videoCompData.title}
            </Typography>
            <Typography variant="h5" sx={{ ...STYLES.typography.overview }}>
              {videoCompData.overview}
            </Typography>
            <Stack direction="row" gap={2} mt={3}>
              <Button
                variant="contained"
                sx={{
                  ...STYLES.buttonBase,
                  ...STYLES.playButton,
                }}
              >
                <PlayArrowRoundedIcon />
                <Typography sx={{ ml: 0.5, fontWeight: 550 }}>Play</Typography>
              </Button>
              <Button
                variant="contained"
                sx={{
                  ...STYLES.buttonBase,
                  ...STYLES.infoButton,
                }}
              >
                <InfoOutlinedIcon fontSize="small" />
                <Typography sx={{ ml: 1, fontWeight: 550 }}>
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
