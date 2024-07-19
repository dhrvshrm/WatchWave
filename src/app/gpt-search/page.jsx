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
import SearchComponent from "../components/SearchComponent";

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
};

export default function Page() {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState([]);
  console.log(res);

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
      const gptQuery =
        'search for movie/series like "' +
        searchText +
        '"' +
        " and give me the names of the movies/series" +
        " and make a array of the movies/series ";

      try {
        const chatCompletion = await openai.chat.completions.create({
          messages: [{ role: "user", content: gptQuery }],
          model: "gpt-3.5-turbo",
        });
        const response = chatCompletion.choices[0].message.content;
        const parsedResponse = response.split("\n").filter((item) => item);
        setRes(parsedResponse);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
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
        <Footer />
      </Stack>
    );
  } else {
    return null;
  }
}
