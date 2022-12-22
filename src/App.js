import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const initial_expenses = [
  {
  id: 1,
  date: new Date(2022, 2, 28),
  title: "Seguro do Carro",
  amount: "300"
}, {
  id: 2,
  date: new Date(2022, 5, 30),
  title: "Aniversário",
  amount: "500"
}, {
  id: 3,
  date: new Date(2022, 10, 26),
  title: "Dentista",
  amount: "50"
}, {
  id: 4,
  date: new Date(2022, 11, 2),
  title: "Revisão do carro",
  amount: "400"
}]



function App() {

const [expenses, setNewExpense] = useState(initial_expenses)



function addExpense(expense) {
      setNewExpense(prevExpenses => {
        return [expense, ...prevExpenses]
      })
}

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses 
       array={expenses}
      />
    </div>
  );
}

export default App;
