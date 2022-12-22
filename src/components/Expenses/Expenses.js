import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

const [year, setYear] = useState("2022")

    function filterYear(selectedYear) {
        setYear(selectedYear)
    }

  const expensesFilter = props.array.filter(expense => {
      return expense.date.getFullYear().toString() === year;
  })


  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={year} onFilter={filterYear}/>
      <ExpensesChart expense={expensesFilter}/>
      <ExpensesList items={expensesFilter}/>
      </Card>
    </div>
  );
}

export default Expenses;
