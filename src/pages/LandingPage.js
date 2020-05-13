import React, { useState, useEffect } from "react";
import MovieSelection from "../components/MovieSelection.js";
import MovieTable from "../components/MovieTable.js";

const fetchData = async (year) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=3d11b524210f982d818a201741cb8205&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}`
  );
  const json = await res.json();
  return json.results;
};

function LandingPage() {
  const [year, setYear] = useState("2001");
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const updateMovieDetails = async () => {
      const json = await fetchData(year);
      setMovieDetails(json);
    };
    updateMovieDetails();
  }, [year]);

  return (
    <div>
      <h1>Movies by Release Year</h1>
      <MovieSelection year={year} setYear={setYear} />
      <MovieTable movieDetails={movieDetails} />
    </div>
  );
}

export default LandingPage;
