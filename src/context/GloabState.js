import React, { createContext, useReducer, useState } from 'react';
import { reducer } from './AppReducer'
// Initial state
const initialState = {
    transactions: [
    ],
}


//  Create Context

export const GlobalContext = createContext(initialState);




// Provider component 

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const addTrans = (trans) => {
        dispatch({
            type: 'ADD-TRANS',
            payload: trans
        })
    };
    const removeTrans = (transId) => {
        dispatch({
            type: 'REMOVE-TRANS',
            payload: transId
        })
    }

    const [balance, setbalance] = useState(0)
    const [income, setincome] = useState(0)
    const [expense, setexpense] = useState(0)

    return (
        <GlobalContext.Provider
            value={
                {

                    transactions: state.transactions, removeTrans, addTrans,
                    balance, setbalance, income, setincome, expense, setexpense
                }
            }
        >
            {children}
        </GlobalContext.Provider>
    )
}