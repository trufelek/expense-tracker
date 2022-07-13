import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  let [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (formData) => {
    const expenseData = {
      ...formData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const addNewExpenseHandler = () => {
    setShowExpenseForm(true);
  };

  const cancelNewExpenseHandler = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {showExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelNewExpenseHandler}
        />
      )}
      {!showExpenseForm && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
