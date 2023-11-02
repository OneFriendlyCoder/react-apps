import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState.js'
const Balance = () => {

  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transactions => transactions.amount);
  const total = amounts.reduce((acc, item) => (acc+=item),0).toFixed(2);

  return (
    <>
        <h4>Balance</h4> 
        <h1 id="balance">${total}</h1>
    </>
  )
}

export default Balance
