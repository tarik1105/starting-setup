import './ExpenseItem.css'

function ExpenseItem(){
    const expenseDate = new Date (2023, 2, 28);
    const locationOfExpenditure = 'Bengalore '

    return(
        <div>
            <h2 className='expense-item h2'>Expense Item!</h2>
            <div className='expense-item'>
                <h2 className='expense-item__description'>Food</h2>
                <div className='expense-item__description'>{locationOfExpenditure}on {expenseDate.toISOString()}</div>
                <div className='expense-item__price'>Rs 10</div>
            </div>
            <div className='expense-item'>
                <h2 className='expense-item__description'>Petrol</h2>
                <div className='expense-item__description'>{locationOfExpenditure}on {expenseDate.toISOString()}</div>
                <div className='expense-item__price'>Rs 100</div>
            </div>
            <div className='expense-item'>
                <h2 className='expense-item__description'>Movies</h2>
                <div className='expense-item__description'>{locationOfExpenditure}on {expenseDate.toISOString()}</div>
                <div className='expense-item__price'>Rs 200</div>
            </div>
        </div> 
    );
}

export default ExpenseItem;