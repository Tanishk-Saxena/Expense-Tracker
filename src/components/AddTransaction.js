import React, { useState } from 'react'

export const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleOnChangeText = (e) => {
    text = setText(e.target.value);
  }

  const handleOnChangeAmount = (e) => {
    amount = setAmount(e.target.value);
  }

  return (
    <>
     <h3>Add new transaction</h3>
      <form id="form">
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
