


export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD-TRANS':
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
            };
        case 'REMOVE-TRANS':
            return {
                ...state,
                transactions: state.transactions.filter((trans) => trans.id !== action.payload)
            }

        default:
            return state;
    }
}