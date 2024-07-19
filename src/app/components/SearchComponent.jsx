import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const STYLES = {
  searchContainer: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    py: 4,
    position: "absolute",
    top: "30%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
  },
  textField: {
    width: "50%",
    "& label": {
      color: "rgba(255, 255, 255, 0.7)",
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius: "5px",
      "&.Mui-focused fieldset": {
        borderColor: "primary.main",
      },
    },
    input: {
      color: "black",
    },
  },
  button: {
    margin: "8px",
    textTransform: "none",
    width: "fit-content",
    backgroundColor: "#1976d2",
    "&:disabled": {
      backgroundColor: "rgba(25, 118, 210, 0.5)",
      color: "white",
      cursor: "not-allowed",
    },
    "&:hover": {
      backgroundColor: "#115293",
    },
    borderRadius: "5px",
  },
};

export default function SearchComponent({
  setSearchText,
  handleSearch,
  searchText,
  loading,
}) {
  return (
    <Stack sx={STYLES.searchContainer} gap={3}>
      <Typography variant="h4" sx={STYLES.title}>
        Search for your favorite movie/series here
      </Typography>
      <Stack direction="row" justifyContent="center" gap={2}>
        <TextField
          variant="outlined"
          onChange={(e) => setSearchText(e.target.value)}
          sx={STYLES.textField}
          autoComplete="off"
          placeholder="Type a movie/series name..."
        />
        <Button
          variant="contained"
          color="primary"
          sx={STYLES.button}
          onClick={handleSearch}
          disabled={!searchText || searchText.length < 4}
        >
          {loading ? (
            <>
              <Typography variant="body1" sx={{ color: "white" }}>
                Searching...{" "}
              </Typography>
              <CircularProgress size={24} sx={{ ml: 1, color: "white" }} />
            </>
          ) : (
            "Search"
          )}
        </Button>
      </Stack>
    </Stack>
  );
}
