import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleOnChangeText = (e) => {
    setText(e.target.value);
  }

  const handleOnChangeAmount = (e) => {
    setAmount(e.target.value);
  }

  const handleOnSubmit = (e) => {

    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random()*1000),
      text,
      // amount: +amount  //shorthand method to convert a string into an integer
      amount: parseInt(amount)  //another method for explicit typecasting
    }
    addTransaction(newTransaction);
  }

  return (
    <>
     <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleOnSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={handleOnChangeText} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={handleOnChangeAmount} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
