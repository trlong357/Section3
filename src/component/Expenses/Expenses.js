import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React from "react";

const Expenses = (props) => {
  const data = props.expenses.map((expense) => {
    return (
      <ExpenseItem
        date={expense.date}
        amount={expense.amount}
        title={expense.title}
        key={expense.id}
      />
    );
  });
  return <Card className="expenses">{data}</Card>;
};

export default Expenses;
