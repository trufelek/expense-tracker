import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [expensesYear, setExpensesYear] = useState('2020');

  const filterExpensesHandler = (year) => {
    setExpensesYear(year);
  };

  const filteredItems = props.items.filter((item) => {
    const date = new Date(item.date);
    return date.getFullYear().toString() === expensesYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={expensesYear}
          onFilterByYear={filterExpensesHandler}
        />
        <ExpensesList items={filteredItems}/>
      </Card>
    </div>
  );
};

export default Expenses;
