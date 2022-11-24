import React, {useState} from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  const dummyExpenses = [
    
  ];
  const [expenses, setExpenses] = useState(dummyExpenses)


  const addExpenseHandler = (expense) =>{
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses]
    });
  }

  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
