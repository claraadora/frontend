import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./MovieTable.css";

const fetchData = async (year) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=3d11b524210f982d818a201741cb8205&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=${year}`
  );
  const json = await res.json();
  return json.results;
};

const MovieTable = () => {
  const year = useSelector((state) => state.selectedYear.year);
  const [movieDetails, setMovieDetails] = useState([]);

  //Update table data when user changed the year selection
  useEffect(() => {
    const updateMovieDetails = async () => {
      const json = await fetchData(year);
      setMovieDetails(json);
    };
    updateMovieDetails();
  }, [year]);

  return (
    <table>
      <thead>
        <tr key="category">
          <th>Title</th>
          <th>Release Date</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {movieDetails.map((row) => (
          <tr>
            <td>{row.title}</td>
            <td>{row.release_date}</td>
            <td>{row.vote_average}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
