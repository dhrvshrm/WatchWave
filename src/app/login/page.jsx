"use client";
import React from "react";
import { Box, Stack } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const STYLES = {
  vignette: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `
      linear-gradient(to top, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8)),
      linear-gradient(to right, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8)),
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8)),
      linear-gradient(to left, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.8))
    `,
    backgroundSize: "100% 30%, 30% 100%, 100% 30%, 30% 100%",
    backgroundPosition: "top, right, bottom, left",
    backgroundRepeat: "no-repeat",
    zIndex: 1,
  },
  page: {
    position: "relative",
    backgroundImage:
      "url('https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
    backgroundSize: "cover",
    height: "150vh",
    width: "100vw",
    overflow: "hidden",
    zIndex: 0,
    m: -1,
  },
};

export default function Page() {
  return (
    <Stack sx={STYLES.page} direction="column">
      <Box sx={STYLES.vignette} />
      <Header />
      <LoginForm />
      <Footer />
    </Stack>
  );
}
