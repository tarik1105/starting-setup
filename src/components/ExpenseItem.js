import './ExpenseItem.css'

function ExpenseItem(props){
    return(
        <div className='expense-item'>
            <h2 className='expense-item__description'>{props.title}</h2>
            <div className='expense-item__description'>{props.location} on {props.date.toISOString()}</div>
            <div className='expense-item__price'>Rs {props.amount}</div>
        </div>
    );
}

export default ExpenseItem;