"use client";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import openai from "../utils/openai";

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
    "&:hover": {
      backgroundColor: "#115293",
    },
  },
};

function SearchComponent({ setSearchText, handleSearch }) {
  return (
    <Stack sx={STYLES.searchContainer} gap={3}>
      <Typography variant="h4" sx={STYLES.title}>
        Search for your favourite movies here
      </Typography>
      <Stack direction="row" justifyContent="center" gap={2}>
        <TextField
          variant="outlined"
          onChange={(e) => setSearchText(e.target.value)}
          sx={STYLES.textField}
          autoComplete="off"
          placeholder="Type a movie name..."
        />
        <Button
          variant="contained"
          color="primary"
          sx={STYLES.button}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Stack>
    </Stack>
  );
}

export default function Page() {
  const [searchText, setSearchText] = useState("");

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
      console.log("searchText", searchText);
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: searchText }],
        model: "gpt-3.5-turbo",
      });
      console.log("chatCompletion", chatCompletion.choices);
    }
  };

  if (typeof window !== "undefined") {
    return (
      <Stack sx={STYLES.page}>
        <Header logOutEnable={true} />
        <SearchComponent
          setSearchText={setSearchText}
          handleSearch={handleSearch}
        />
        {/* <VignetteWrapper /> */}
        <Footer />
      </Stack>
    );
  } else {
    return null;
  }
}
