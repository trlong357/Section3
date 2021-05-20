import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
function Expenses(props) {
  const data = props.expenses.map((expense) => {
    return (
      <Card key={expense.id} className="expenses">
        <ExpenseItem
          date={expense.date}
          amount={expense.amount}
          title={expense.title}
        />
      </Card>
    );
  });
  return data;
}

export default Expenses;
