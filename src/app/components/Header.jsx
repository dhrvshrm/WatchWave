import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const logo = `https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png`;

const STYLES = {
  header: {
    width: "100%",
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "transparent",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const Header = () => {
  return (
    <Stack direction="row" sx={STYLES.header}>
      <Image alt="logo" src={logo} width={190} height={90} />
    </Stack>
  );
};

export default Header;
