import React, { useState } from "react";

import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItem=(props) => {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);

    const editHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };

    const updateHandler = () => {
        setAmount('100');
        console.log(amount);
    }

    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails amount={amount} location={props.location} title={title} />
            <button onClick={editHandler}>Edit</button>
            <button onClick={updateHandler}>Update</button>
        </Card>
    );
}

export default ExpenseItem;