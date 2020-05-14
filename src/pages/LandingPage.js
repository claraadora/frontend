import React from "react";
import MovieTable from "../components/MovieTable.js";
import MovieSelection from "../components/MovieSelection";

function LandingPage() {
  return (
    <div>
      <h1>Movies by Release Year</h1>
      <MovieSelection />
      <MovieTable />
    </div>
  );
}

export default LandingPage;
