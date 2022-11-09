import React from "react";
import "./ExpenseItem.css";
export default function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="container wrapper mt-3">
      <div className="row">
        <div className="col-2 date-box">
          <h4>
            <div className="col-12">{month}</div>
            <div className="col-12">{day}</div>
            <div className="col-12">{year}</div>
          </h4>
        </div>
        <div className="col-8 title-box">
          <h2>{props.title}</h2>
        </div>
        <div className="col-2 amount-box">
          <h2>${props.amount}</h2>
        </div>
      </div>
    </div>
  );
}
