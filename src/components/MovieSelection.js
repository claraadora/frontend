import React from "react";
import { connect } from "react-redux";
import { selectYear } from "../actions/userActions";

const MovieSelection = ({ year, setYear }) => {
  return (
    <div>
      <form>
        <label for="inputYear"> Year: </label>
        <input
          type="text"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          id="inputYear"
        />
      </form>
    </div>
  );
};

export default MovieSelection;
