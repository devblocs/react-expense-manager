import { useState } from 'react';

import Card from "../../UI/Card";

import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseChart from '../ExpenseChart/ExpenseChart';

import "./Expenses.css";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
