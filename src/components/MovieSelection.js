import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectYear } from "../actions/userActions";

const MovieSelection = () => {
  const [year, setYear] = useState("");

  //To update store
  const dispatch = useDispatch();
  const updateStore = (year) => {
    return dispatch(selectYear(year));
  };

  //Update store when selection is submitted
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
