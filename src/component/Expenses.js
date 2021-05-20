import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const data = props.expenses.map((expense) => {
    return (
      <div className="expenses">
        <ExpenseItem
          date={expense.date}
          amount={expense.amount}
          title={expense.title}
          key={expense.id}
        />
      </div>
    );
  });
  return data;
}

export default Expenses;
