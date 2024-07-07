"use client";

import { Box, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";

const STYLES = {
  page: {
    position: "relative",
    backgroundImage:
      "url('https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
    backgroundSize: "cover",
    height: "100vh",
    width: "98.6vw",
    overflow: "hidden",
    zIndex: 0,
    m: -1,
  },
};

export default function Page() {
  const Header = dynamic(() =>
    import("../components/Header").then((mod) => mod.Header)
  );

  const VignetteWrapper = dynamic(() =>
    import("../components/VignetteWrapper").then((mod) => mod.VignetteWrapper)
  );

  const Footer = dynamic(() =>
    import("../components/Footer").then((mod) => mod.Footer)
  );

  if (typeof window !== "undefined") {
    return (
      <Stack sx={STYLES.page} direction="column">
        <Header logOutEnable={true} />
        <VignetteWrapper />
        <Footer />
      </Stack>
    );
  } else {
    return null;
  }
}
