import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import FilterExpense from "./Filter/FilterExpense";
import { useState } from "react";
export default function Expense(props) {
  const [filterdYear, setfilterdYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setfilterdYear(selectedYear);
  };

  const FilteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });
  return (
    <>
      <div className="container bg-dark Expense-wrapper pt-1 pb-1">
        <FilterExpense
          selectedYear={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        {FilteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </>
  );
}
