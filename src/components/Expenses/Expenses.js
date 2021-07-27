import { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

function Expenses(props) {
  const [yearSelected, setYear] = useState("2021");

  const getYear = (year) => {
    setYear(year);
    console.log(yearSelected);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeYear={getYear} defaultYear={yearSelected} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
      ;
    </div>
  );
}

export default Expenses;
