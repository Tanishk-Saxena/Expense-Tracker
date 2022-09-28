import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpense = () => {

  const { transactions } = useContext(GlobalContext);

  let expense, income;
  expense = income = 0.00;

  transactions.forEach(transaction => {
    if(transaction.amount<0){
      expense += (-1*transaction.amount)
    }else{
      income += transaction.amount
    }
  });

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  )
}