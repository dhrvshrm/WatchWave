import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Box sx={{ p: 3, bgcolor: "background.paper" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Next.js!
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is a simple Next.js app with Material-UI and CSS Modules.
        </Typography>
      </Box>
    </main>
  );
}
