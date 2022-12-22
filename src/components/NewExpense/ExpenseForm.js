import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {


  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function enteredTitle(event) {
    const newTitle = event.target.value;
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: newTitle,
      };
    });
  }

  function enteredAmount(event) {
    const newAmount = event.target.value;
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: newAmount,
      };
    });
  }
  function enteredDate(event) {
    const newDate = event.target.value;
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: newDate,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date)
    };

    props.onSaveExpenseData(expenseData);
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={enteredTitle}
            type="text"
            value={userInput.title}
            name="title"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={enteredAmount}
            value={userInput.amount}
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={enteredDate}
            value={userInput.date}
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.button} type="button">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
