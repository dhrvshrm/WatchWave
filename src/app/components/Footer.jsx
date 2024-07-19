import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, IconButton, Typography } from "@mui/material";

const STYLES = {
  footerContainer: {
    width: "100%",
    zIndex: 1,
    backgroundColor: "#000",
    justifyContent: "space-between",
    alignItems: "center",
    height: "auto",
    mt: "auto",
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    padding: "1rem 0",
  },
  footerContent: {
    width: "100%",
    maxWidth: "1300px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem",
    border: "1px solid #fff",
  },
  footerLinks: {
    display: "flex",
    gap: "1rem",
    marginTop: { xs: "1rem", sm: 0 },
    color: "#fff",
    alignItems: "space-between",
  },
  footerText: {
    color: "#fff",
    mb: "0.5rem",
  },
};

export const Footer = () => {
  return (
    <Box sx={STYLES.footerContainer}>
      <Box sx={STYLES.footerContent}>
        <Box sx={STYLES.footerLinks}>
          <Typography variant="body2" color="inherit">
            shrmadhruv!11@gmail.com
          </Typography>
          <Typography variant="body2" color="inherit">
            +91 978XX 2XXXX
          </Typography>
          <Typography variant="body2" color="inherit">
            Ajmer, Rajasthan, India
          </Typography>
        </Box>
        <IconButton href="https://facebook.com" color="primary">
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://twitter.com" color="primary">
          <TwitterIcon />
        </IconButton>
        <IconButton href="https://linkedin.com" color="primary">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://instagram.com" color="primary">
          <InstagramIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={STYLES.footerText}>
        &copy; {new Date().getFullYear()} Dhruv Media and Co.. All rights
        reserved.
      </Typography>
    </Box>
  );
};
