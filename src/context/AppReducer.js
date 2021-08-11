export const reducer = (state, action) => {
    console.log(state.transactions)
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