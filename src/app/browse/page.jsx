"use client";

import { Stack } from "@mui/material";
import { Footer } from "../components/Footer";
import dynamic from "next/dynamic";

export default function Page() {
  const MainContainer = dynamic(
    () =>
      import("../components/MainContainer").then((mod) => mod.MainContainer),
    { ssr: false }
  );
  const Header = dynamic(
    () => import("../components/Header").then((mod) => mod.Header),
    { ssr: false }
  );

  const SecondaryContainer = dynamic(
    () =>
      import("../components/SecondaryContainer").then(
        (mod) => mod.SecondaryContainer
      ),
    { ssr: false }
  );
  return (
    <Stack
      sx={{
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
