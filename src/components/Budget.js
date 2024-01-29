import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [newBudget, setNewBudget] = useState(budget);
    const maxLimit = 20000;
    
    const handleBudgetChange = (event) => {
        if(event.target.value>maxLimit) {
            alert("This value cannot exceed the limit of "+ Intl.NumberFormat().format(maxLimit));
            setNewBudget(maxLimit);
        } else if(event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spendings");
            setNewBudget(totalExpenses);
        } else {
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
