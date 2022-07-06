import { useState } from 'react';

import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditable, setIsEditable] = useState(false);

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    const startEditHandler = () => {
        setIsEditable(true);
    };

    const stopEditHandler = () => {
        setIsEditable(false);
    };

    return (
        <div className='new-expense'>
            {!isEditable && <button onClick={startEditHandler}>Add New Expense</button>}

            {isEditable && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={stopEditHandler} />}
        </div>
    );
};

export default NewExpense;