import ExpenseItem from "./component/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 4, 27),
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
      date: new Date(2020, 4, 27),
    },
    {
      id: "e4",
      title: "AC",
      amount: 200.12,
      date: new Date(2020, 4, 27),
    },
  ];
  const data = expenses.map((expense) => {
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
    <div>
      <h1>Hello world</h1>
      {data}
    </div>
  );
}

export default App;
