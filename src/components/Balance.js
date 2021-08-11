import React, { useContext } from 'react';
import { GlobalContext } from '../context/GloabState';

function Balance() {

    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    let total = amounts.reduce((acc, item) => (acc += item), 0);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </>
    )
}

export default Balance
