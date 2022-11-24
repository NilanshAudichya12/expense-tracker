import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedyear) => {
    setFilteredYear(selectedyear);
  };
  const expenses = props.expenses;

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onDropdownSave={filterChangeHandler}
      />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
