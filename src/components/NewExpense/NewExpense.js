import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {

const [isClicked, setIsClicked] = useState(false)

  function SaveExpenseData(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData)
    setIsClicked(false)
  }

function handleClick() {
    setIsClicked(true)
}

function goBack() {
  setIsClicked(false)
}

  return (
    <div className="new-expense">
      {isClicked ? 
      <ExpenseForm button={goBack} onSaveExpenseData={SaveExpenseData} /> 
      : <button onClick={handleClick}>Add new Expense</button>}
    </div>
  );
}

export default NewExpense;
