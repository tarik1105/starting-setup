import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const items = [
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

  const addExpenseHandler = expense => {
    console.log('inside App.js');
    console.log(expense);
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
    <Expenses items={items} />
  </div>

  );
}

export default App;
