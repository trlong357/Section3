import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
function Expenses(props) {
  const data = props.expenses.map((expense) => {
    return (
      <Card className="expenses">
        <ExpenseItem
          date={expense.date}
          amount={expense.amount}
          title={expense.title}
          key={expense.id}
        />
      </Card>
    );
  });
  return data;
}

export default Expenses;
