const fun = (state, action) => {
    switch(action.type){
        default:
            return state;
        case 'DELETE_TRANSACTION':
            return {
                ...state,   //... -> spread function
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
    }
}

export default fun;