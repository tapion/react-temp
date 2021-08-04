import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [yearSelected, setYear] = useState("2021");
  // const [filteredExpenses, setFiltered] = useState(props.expenses);

  const getYear = (year) => {
    setYear(year);
    // setFiltered(prevState => {
    //   return props.expenses.filter(exp => exp.date.getFullYear() == year);
    // });
  };

  const filteredExpenses = props.expenses.filter(exp => exp.date.getFullYear().toString() === yearSelected);

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter onChangeYear={getYear} defaultYear={yearSelected} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
      ;
    </li>
  );
}

export default Expenses;
