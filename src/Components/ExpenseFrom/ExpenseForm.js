import React, { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  const [etitle, setTitle] = useState("");
  const [eamount, setAmount] = useState("");
  const [edate, setDate] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const formSubmittion = (event) => {
    event.preventDefault();
    const expenseData = {
      id: Math.random(),
      title: etitle,
      amount: eamount,
      date: new Date(edate),
    };
    props.onSaveData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form action="" onSubmit={formSubmittion}>
      <div className="container mt-3 pt-3 bg-dark form-wrapper mb-3">
        <div className="row">
          <div className="col-6 form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Title"
              value={etitle}
              onChange={titleHandler}
            />
            <label htmlFor="floatingInput">Title</label>
          </div>

          <div className="col-6 form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Amount"
              value={eamount}
              onChange={amountHandler}
            />
            <label htmlFor="floatingInput">Amount</label>
          </div>
        </div>
        <div className="row">
          <div className="col-6 form-floating mb-3">
            <input
              type="date"
              className="form-control"
              id="floatingInput"
              placeholder="Date"
              value={edate}
              onChange={dateHandler}
            />
            <label htmlFor="floatingInput">Date</label>
          </div>
          <div className="col-6 form-floating mb-3">
            <input type="submit" className=" SubmitBotton" id="floatingInput" />
          </div>
        </div>
      </div>
    </form>
  );
}
