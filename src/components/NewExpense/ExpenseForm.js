import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const titleChangeHandler = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(formData);

    setFormData(() => {
      return {
        title: '',
        amount: '',
        date: '',
      };
    });
  };

  const cancelFormHandler = (event) => {
    event.preventDefault();
    props.onCancel();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={formData.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={formData.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelFormHandler}>Cancel</button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
