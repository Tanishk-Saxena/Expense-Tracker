import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    transactions: []
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {   //destructuring of props
    const [state, dispatch] = useReducer(AppReducer, initialState); //allows initialState to be accessed as state and dispatch is used to call actions

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    
    return (
        <GlobalContext.Provider value = {{  //value is the attribute that is made accessible to all the children of the Provider component.
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }} >
            { children }
        </GlobalContext.Provider>
    )

}