import { useEffect, useState } from "react";
import axios from "axios";
import { TBMD_URL, TMDB_ACCESS_TOKEN } from "../utils";
import { toast } from "react-toastify";

export const useMovieData = () => {
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching data...");
      try {
        const response = await axios.get(TBMD_URL, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
          },
        });
        setMovieData(response.data.results[0]);
      } catch (error) {
        toast.error("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return movieData;
};
