import "./ExpensesList.css"
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
    if( props.items.length === 0 ) {
        return (
            <h2 className="expenses-list__fallback">No expenses on this year!!</h2>
        )
    }
  return (
    <ul className="expenses-list">
        {props.items.map(expense => {
        return (
            <ExpenseItem 
                key={expense.id}
                id={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
            />
        )})
    }
    </ul>
  )
  
}

export default ExpensesList;