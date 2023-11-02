import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState.js'
import Transactions from './Transactions.js';


const TransactionList = () => {

  const {transactions} = useContext(GlobalContext);


  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transactions key={transaction.id} transaction={transaction}/>))}
      </ul>
    </>
  )
}

export default TransactionList
