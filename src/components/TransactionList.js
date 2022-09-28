import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {

  const { transactions } = useContext(GlobalContext);

  return (
    <>
        <h3>History</h3>
        <ul className="list">
            {/* <li className="minus">
            Cash <span>-$400</span><button className="delete-btn">x</button>
            </li> */}
            {transactions.map( (transaction) => {
              // return (<li key={transaction.id} className="minus">
              // {transaction.text} <span>-${transaction.amount}</span><button className="delete-btn">x</button>
              // </li>)
              return <Transaction key={transaction.id} transaction={transaction} />
            })}
        </ul>
    </>
  )
}
