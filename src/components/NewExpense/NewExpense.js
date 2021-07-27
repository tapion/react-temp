import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

    const getExpense = (expense) => {
        const newExpense = {
            ...expense,
            id: Math.random().toString(),
        };
        props.onUpdateExpense(newExpense);
    }

    return <div className="new-expense">
        <ExpenseForm onSendExpense={getExpense}></ExpenseForm>
    </div>
}

export default NewExpense;