import React from "react";

const MovieSelection = ({ year, setYear }) => {
  return (
    <div>
      <form>
        <lable for="inputYear"> Year: </lable>
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
