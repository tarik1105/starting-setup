import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Food",
    location: "Bengalore",
    date: new Date(2022, 5, 15),
    amount: 10,
  },
  {
    id: "e2",
    title: "Petrol",
    location: "Electronic-city",
    date: new Date(2022, 6, 26),
    amount: 200,
  },
  {
    id: "e3",
    title: "Movies",
    location: "Kings-Cenima",
    date: new Date(2022, 7, 3),
    amount: 350,
  },
  {
    id: "e4",
    title: "Electricity",
    location: "JC-Nagar",
    date: new Date(2022, 8, 20),
    amount: 17350,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  //return React.createElement(
  //  "div",
  //  {},
  //  React.createElement("h2", {}, "Expense Items"),
  //  React.createElement(Expenses, {items: items})
  //);

  return (

  <div>
    <h2>Expense Items</h2>
    <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items={expenses} />
  </div>

  );
}

export default App;
