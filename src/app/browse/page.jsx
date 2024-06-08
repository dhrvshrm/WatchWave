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
        height: "200vh",
        width: "99vw",
        overflow: "hidden",
        zIndex: 0,
        my: -1,
        ml: -2,
        backgroundColor: "black",
      }}
    >
      <Header logOutEnable={true} />
      <MainContainer />
      <SecondaryContainer />
      <Footer />
    </Stack>
  );
}
