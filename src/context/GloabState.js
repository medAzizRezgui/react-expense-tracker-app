import React, { createContext, useReducer } from 'react';
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
    return (
        <GlobalContext.Provider
            value={
                {
                    transactions: state.transactions, removeTrans, addTrans,
                }
            }
        >
            {children}
        </GlobalContext.Provider>
    )
}