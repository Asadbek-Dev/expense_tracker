import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
    const {transactions}=useContext(GlobalContext);
    const {deleteTransaction}=useContext(GlobalContext)


    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction=>( 
                    <li key={transaction.id} className={transaction.amount < 0 ? 'minus':'plus'}>
                        {transaction.text}<span>{transaction.amount<0?'-':'+'}${Math.abs(transaction.amount)}</span><button className='delete-btn' onClick={()=>deleteTransaction(transaction.id)}>x</button>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}
