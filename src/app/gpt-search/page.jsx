"use client";

import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import openai from "../utils/openai";
import Loader from "../components/Loader";

const STYLES = {
  page: {
    backgroundImage:
      "url('https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    position: "relative",
    zIndex: 1,
    m: -1,
  },
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

function SearchComponent({ setSearchText, handleSearch, searchText, loading }) {
  return (
    <Stack sx={STYLES.searchContainer} gap={3}>
      <Typography variant="h4" sx={STYLES.title}>
        Search for your favourite movie/seriess here
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
              <CircularProgress size={24} sx={{ ml: 1 }} />
            </>
          ) : (
            "Search"
          )}
        </Button>
      </Stack>
    </Stack>
  );
}

export default function Page() {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState(null);
  console.log({ res });

  const Header = dynamic(() =>
    import("../components/Header").then((mod) => mod.Header)
  );

  const VignetteWrapper = dynamic(() =>
    import("../components/VignetteWrapper").then((mod) => mod.VignetteWrapper)
  );

  const Footer = dynamic(() =>
    import("../components/Footer").then((mod) => mod.Footer)
  );

  const handleSearch = async () => {
    if (searchText) {
      setLoading(true);
      console.log("searchText", searchText);
      const gptQuery =
        'search for movie/seriess like "' +
        searchText +
        '"' +
        " and give me a brief description of the movie/series" +
        " and give me the release date of the movie/series" +
        " and give them comma separated" +
        " and give me the genre of the movie/series" +
        " and give me the cast of the movie/series" +
        " and give me the duration of the movie/series" +
        " and give me the language of the movie/series" +
        " and give me the trailer of the movie/series" +
        " and give me the poster of the movie/series" +
        " and give me the backdrop of the movie/series" +
        " and give me the tagline of the movie/series" +
        " and give me the website of the movie/series" +
        " and give me the imdb rating of the movie/series" +
        " and need the movie/series details in json format and at least 10 items";

      console.log("gptQuery", gptQuery);
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      setRes(JSON.parse(chatCompletion.choices[0].message.content));
      setLoading(false);
    }
  };

  if (typeof window !== "undefined") {
    return (
      <Stack sx={STYLES.page}>
        <Header logOutEnable={true} />
        <SearchComponent
          setSearchText={setSearchText}
          handleSearch={handleSearch}
          searchText={searchText}
          loading={loading}
        />
        {/* <VignetteWrapper /> */}
        <Footer />
      </Stack>
    );
  } else {
    return null;
  }
}
