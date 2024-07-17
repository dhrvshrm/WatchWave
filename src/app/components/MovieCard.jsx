import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const STYLES = {
  cardContainer: {
    width: 185,
    borderRadius: 3,
    backgroundColor: "black",
    height: 310,
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "all 0.3s ease",
    },
    border: "1px solid #333",
    mt: 2,
  },
  img: {
    borderRadius: "12px 12px 0 0",
    objectFit: "cover",
    objectPosition: "center",
  },
  title: { fontSize: "1rem", fontWeight: "bold", color: "white", p: 1 },
};

export const MovieCard = ({ data }) => {
  console.log({ data });
  return (
    <Stack sx={STYLES.cardContainer} direction="column">
      <Image
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt={data.title}
        width={185}
        height={240}
        style={STYLES.img}
      />
      <Stack sx={{ width: "100%" }}>
        <Typography variant="h6" sx={STYLES.title}>
          {data.title}
        </Typography>
      </Stack>
    </Stack>
  );
};
