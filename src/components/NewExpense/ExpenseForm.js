import React, { useState } from "react";
import './ExpenseForm.css';
function ExpenseForm(props) {

    const [EnteredTitle, setEnteredTitle] = useState('');
    const [EnteredAmount, setEnteredAmount] = useState('');
    const [EnteredDate, setEnteredDate] = useState('');


    function titleChangehandler(event) {
        setEnteredTitle(event.target.value);
    };

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    };

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    };

    function submitHandler(event) {
        event.preventDefault();
        
        const expenseData = {
            title: EnteredTitle,
            amount: EnteredAmount,
            date: new Date(EnteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };

    return (

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={EnteredTitle} onChange={titleChangehandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={EnteredAmount} onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2021-01-01" max="2024-12-31" value={EnteredDate} onChange={dateChangeHandler} />
                </div>

                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>

            </div>

        </form>
    );


}

export default ExpenseForm;