import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter(item => 
    item.date.getFullYear().toString() === filteredYear
  )





  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFIlter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpense}/>
      
   <ExpensesList items={filteredExpense}/>
      
    </Card>
  );
};

export default Expenses;
