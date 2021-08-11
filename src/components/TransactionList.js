import React, { useContext } from 'react'
import { GlobalContext } from '../context/GloabState';
import Transaction from './Transaction';
function TransactionList() {

    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map(trans => (
                        <Transaction
                            id={trans.id}
                            key={trans.id}
                            amount={trans.amount}
                            text={trans.text}
                        />
                    ))
                }

            </ul>
        </>
    )
}

export default TransactionList
