"use client";

import { Stack } from "@mui/material";
import { Footer } from "../components/Footer";

export default function Page() {
  const Header = dynamic(() =>
    import("../components/Header").then((mod) => mod.Header)
  );

  const MainContainer = dynamic(() =>
    import("../components/MainContainer").then((mod) => mod.MainContainer)
  );

  const SecondaryContainer = dynamic(() =>
    import("../components/SecondaryContainer").then(
      (mod) => mod.SecondaryContainer
    )
  );
  return (
    <Stack
      sx={{
        height: "400vh",
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
