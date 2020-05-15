import React from "react";
import "./MovieTable.css";

const MovieTable = ({ movieDetails }) => {
  return (
    <table>
      <thead>
        <tr>
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
