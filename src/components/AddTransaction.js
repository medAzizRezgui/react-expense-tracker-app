import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GloabState';

function AddTransaction() {


    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    let { addTrans, balance, expense, income, setincome, setbalance, setexpense } = useContext(GlobalContext);


    const NewTrans = {
        id: Math.random(),
        text: text,
        amount: parseInt(amount),
    }


    const addTransHandler = (e) => {
        e.preventDefault();
        addTrans(NewTrans);

        if (amount < 0) {

            setexpense(expense - amount)


        }
        else {

            setincome(income + parseInt(amount))

        }


    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form">
                <div className="form-control">
                    <label >Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.currentTarget.value)}
                        placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label>
                        Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.currentTarget.value)}
                        placeholder="Enter amount..." />
                </div>
                <button
                    onClick={(e) => addTransHandler(e)}
                    className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
