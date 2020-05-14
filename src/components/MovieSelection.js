import React from "react";
import { useDispatch } from "react-redux";
import { selectYear } from "../actions/userActions";

const MovieSelection = () => {
  const [year, setYear] = useState("2001");

  //Redux
  const dispatch = useDispatch();
  const updateStore = (year) => dispatch(selectYear(year));

  const handleSubmit = (e) => {
    e.preventDefault();
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
