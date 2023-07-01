import React from "react";

import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

const ExpenseItem=(props) => {
    // const [title, setTitle] = useState(props.title);
    // const [amount, setAmount] = useState(props.amount);

    // const editHandler = () => {
    //     setTitle('Updated!');
    //     console.log(title);
    // };

    // const updateHandler = () => {
    //     setAmount('100');
    //     console.log(amount);
    // }

    return(
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <ExpenseDetails amount={props.amount} location={props.location} title={props.title} />
                {/* <button onClick={editHandler}>Edit</button>
                <button onClick={updateHandler}>Update</button> */}
            </Card>
        </li>
    );
}

export default ExpenseItem;