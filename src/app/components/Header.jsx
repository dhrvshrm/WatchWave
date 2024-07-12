import { Button, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../utils";

const logo = `https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png`;

const STYLES = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "transparent",
    justifyContent: "space-between",
    alignItems: "center",
    py: "1.35rem",
    px: "1.5rem",
  },
  logOutBtnStyle: {
    color: "white",
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "crimson",
    },
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    height: "2.5rem",
    textTransform: "none",
    zIndex: 1,
  },
};

export const Header = ({ logOutEnable = false }) => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      toast.error("Error signing out");
    }
  };

  const handleGPTSearch = () => {
    router.push("/gpt-search");
  };

  return (
    <Stack direction="row" sx={STYLES.header}>
      <Image alt="logo" src={logo} width={200} height={105} />
      {logOutEnable && (
        <Stack direction="row" spacing={2}>
          <Button
            color="primary"
            onClick={handleGPTSearch}
            sx={STYLES.logOutBtnStyle}
          >
            GPT Search
          </Button>
          <Button
            color="secondary"
            onClick={handleSignOut}
            sx={STYLES.logOutBtnStyle}
          >
            Log Out
          </Button>
        </Stack>
      )}
    </Stack>
  );
};
