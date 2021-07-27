import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    // const [dateExp,setDatexp] = useState('');

    const [inputData,setInputs] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const titleHandler = (event) =>{
        setInputs((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            }
        });
        // setInputs({
        //     ...inputData,
        //     title: event.target.value,
        // });
    }

    const amountHandler = (event) =>{
        setInputs({
            ...inputData,
            amount: event.target.value,
        });
    }
    const dateHandler = (event) =>{
        // console.log('year ',event.target.value)
        // setDatexp(event.target.value);
        setInputs({
            ...inputData,
            date: event.target.value,
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        // setInputs((prevState) => {
        //     return {
        //         ...prevState,
        //         date: new Date(prevState.date),
        //     }
        // });
        const obj = {
            ...inputData,
            date: new Date(inputData.date),
        }
        props.onSendExpense(obj);
        setInputs(prevState => {
            return {
                title: '',
                amount: '',
                date: '',
            }
        });
        // setInputs({
        //     title: '',
        //     amount: '',
        //     date: '',
        // });
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={inputData.title} onChange={titleHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" value={inputData.amount} step="0.01" onChange={amountHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date </label>
                <input 
                    type="date" 
                    value={inputData.date}
                    // value={dateExp}
                    min="01-01-2021" 
                    max="31-12-2022"
                    onChange={dateHandler} />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
        </div>
    </form>;
}

export default ExpenseForm;