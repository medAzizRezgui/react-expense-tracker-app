import React, { useContext } from 'react'
import { GlobalContext } from '../context/GloabState';
function Transaction(props) {

    const { removeTrans } = useContext(GlobalContext)


    let sign = false;
    if (props.amount > 0) {
        sign = true;
    }
    else {
        sign = false;
    }
    return (
        <div>
            <li className={sign ? 'plus' : 'minus'}>
                {props.text} <span>${props.amount}</span>
                <button
                    onClick={() => removeTrans(props.id)}
                    className="delete-btn">x</button>
            </li>
        </div>
    )
}

export default Transaction
