"use client";

import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Browse } from "../components/Browse";
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
      <Browse />
      <Footer />
    </Stack>
  );
}
