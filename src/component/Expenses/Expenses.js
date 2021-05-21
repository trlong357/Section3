import ExpenseList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import Filter from "./Filter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const yearChoosen = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <Filter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={yearChoosen} />
    </Card>
  );
};

export default Expenses;
