import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'NewsPaper', amount: '500.00', date: new Date(2023, 7, 11), },
  { id: 'e2', title: 'New TV', amount: '15000.00', date: new Date(2023, 6, 11), },
  { id: 'e3', title: 'Car Insurance', amount: '6500.00', date: new Date(2023, 8, 11), },
  { id: 'e4', title: 'New Wooden Desk', amount: '4000.00', date: new Date(2023, 9, 11) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};
export default App;