import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "e1", 
      title: "Food", 
      location: "Bengalore",
      date: new Date(2022, 5, 12),
      amount: 10,
    },
    {
      id: "e2",
      title: "Petrol",
      location: "Electronic-city",
      date: new Date(2022, 6, 12),
      amount: 200,
    },
    { id: "e3", 
      title: "Movies", 
      location: "Kings-Cenima",
      date: new Date(2022, 7, 12),
      amount: 350,
    },
    {
      id: "e4",
      title: "Electricity",
      location: "JC-Nagar",
      date: new Date(2022, 8, 12),
      amount: 17350,
    },
  ];

  return (
    <div>
      <h2>Expense Items</h2>
      <ExpenseItem
        title={expenses[0].title}
        location={expenses[0].location}
        date={expenses[0].date}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        location={expenses[1].location}
        date={expenses[1].date}
        amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        location={expenses[2].location}
        date={expenses[2].date}
        amount={expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        location={expenses[3].location}
        date={expenses[3].date}
        amount={expenses[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
