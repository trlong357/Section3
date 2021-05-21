import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import Filter from "./Filter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  const yearChoosen = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const data = yearChoosen.map((expense) => {
    return (
      <ExpenseItem
        date={expense.date}
        amount={expense.amount}
        title={expense.title}
        key={expense.id}
      />
    );
  });
  return (
    <Card className="expenses">
      <Filter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {data}
    </Card>
  );
};

export default Expenses;
