import { useState, useEffect } from "react";

export const useFetchMovieDetail = (id) => {
  const [singleVideoData, setSingleVideoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDQ3NTUwOTE5NjZiN2Q1NzVkM2Y0NmIxYjk2N2NiMCIsInN1YiI6IjY2NWU2ZWFiMzk3ZGVhZWNjZjIzM2I1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dOIazya5Reh5qD7-xQUW8pK5Fjhdyj0HCQ8pJW-9wo",
          },
        };
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          options
        );
        const data = await response.json();
        setSingleVideoData(data.results[0]);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  return { singleVideoData, loading };
};
