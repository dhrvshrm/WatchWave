"use client";
import { Box, Stack } from "@mui/material";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const STYLES = {
  vignette: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      "linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8))",
  },
  page: {
    position: "relative",
    backgroundImage:
      "url('https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
  },
};

function Home() {
  return (
    <Stack sx={STYLES.page} direction="column">
      <Box sx={STYLES.vignette} />
      <Header />
      <LoginForm />
    </Stack>
  );
}

export default Home;
