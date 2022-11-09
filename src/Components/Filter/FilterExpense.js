import React from "react";
import "./FilterExpense.css";
export default function FilterExpense(props) {
  const filterHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 Filter-Year pb-2 pt-4">
          <h3>Filter By Year</h3>
        </div>
        <div className="col-8 Filter-botton pt-2 pb-2">
          <select
            name=""
            id=""
            value={props.selectedYear}
            className="Select-Group"
            onChange={filterHandler}
          >
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>
    </div>
  );
}
