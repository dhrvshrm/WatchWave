"use client";

import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainContainer } from "../components/MainContainer";
import { SecondaryContainer } from "../components/SecondaryContainer";
import { Stack } from "@mui/material";

export default function Page() {
  return (
    <Stack
      sx={{
        position: "relative",
        backgroundColor: "lightblack",
        backgroundSize: "cover",
        height: "150vh",
        width: "99vw",
        overflow: "hidden",
        zIndex: 0,
        m: -1,
      }}
    >
      <Header logOutEnable={true} />
      <MainContainer />
      <SecondaryContainer />
      <Footer />
    </Stack>
  );
}
