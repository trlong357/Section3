import React from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2019, 4, 27),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 300.2,
      date: new Date(2020, 5, 27),
    },
    {
      id: "e3",
      title: "TV",
      amount: 93.34,
      date: new Date(2021, 4, 27),
    },
    {
      id: "e4",
      title: "AC",
      amount: 200.12,
      date: new Date(2022, 4, 27),
    },
  ];

  //Under the hood code
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Hello world"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
  //------ JSX code--------

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
