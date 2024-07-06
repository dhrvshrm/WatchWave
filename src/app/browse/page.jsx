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
        width: "100vw",
        overflow: "hidden",
        backgroundColor: "black",
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
