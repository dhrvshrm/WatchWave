import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { TBMD_URL, TMDB_ACCESS_TOKEN } from "../constants";

export const useMovieData = () => {
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(TBMD_URL, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
          },
        });
        setMovieData(response.data.results);
      } catch (error) {
        toast.error("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return movieData;
};
