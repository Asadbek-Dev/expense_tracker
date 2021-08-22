import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
    const {transactions}=useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction=>( 
                    <li key={transaction.id} className='minus'>
                        {transaction.text}<span>{transaction.amount<0?'-':'+'}${Math.abs(transaction.amount)}</span><button className='delete-btn'>x</button>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}
