import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [Edited, setEdited] = useState(false);

  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEdited(false);
  };
  const EditingHandler = () => {
    setEdited(true);
    console.log(Edited);
  };
  const NotEditingHandler = () => {
    setEdited(false);
    console.log(Edited);
  };

  return (
    <div className="new-expense">
      {!Edited && <button onClick={EditingHandler}>Add New Expense</button>}
      {Edited && (
        <ExpenseForm
          onCancel={NotEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
