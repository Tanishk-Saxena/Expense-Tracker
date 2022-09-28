import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

  let balance = 0.00;

  const { transactions } = useContext(GlobalContext);
  transactions.forEach(transaction => {
    balance += transaction.amount;
  });

  // const amounts = transactions.map((transaction) => (transaction.amount));   //another way to solve the same problem of mapping
  // const total = amounts.reduce((acc, item)=>(acc+=item), 0).toFixed(2);

  return (
    <>
        <h4>Your Balance</h4>
        <h1>${balance}</h1>
    </>
  )
}
