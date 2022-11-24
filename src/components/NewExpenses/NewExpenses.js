import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

export default function NewExpenses(props) {
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData= {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setIsEditing(false)
    };

    const [isEditing, setIsEditing] = useState(false);
    const isEditingHandler=()=>{
      setIsEditing(true);
    }
    const isCancelingHandler=()=>{
      setIsEditing(false);
    }
  return (
    <div className='new-expense'>
        {!isEditing && <button onClick={isEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onCancel={isCancelingHandler} saveExpenseData={saveExpenseDataHandler}/>}
    </div>
  )
}
