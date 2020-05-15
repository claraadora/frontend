import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectYear } from "../actions/userActions";

const MovieSelection = () => {
  //States
  c;
  const [year, setYear] = useState("2001");

  //Redux
  const dispatch = useDispatch();
  const updateStore = (year) => {
    return dispatch(selectYear(year));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(year);
    updateStore(year);
  };

  const onChange = (e) => {
    setYear(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputYear"> Year: </label>
        <input
          type="text"
          name="year"
          value={year}
          onChange={onChange}
          id="inputYear"
        />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default MovieSelection;
