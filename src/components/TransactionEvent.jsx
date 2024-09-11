import React from 'react'
import useGetTransaction from '../hooks/useGetTransaction'

function TransactionEvent() {
  const { transactionsTotal}= useGetTransaction()
  const{balance, expense, income} = transactionsTotal
  return (
    <div className='mt-4'>
      <div className="balance">
        <h4>Balance</h4>
        <p>${balance}</p>
      </div>
      <div className="income">
        <h4>Income</h4>
        <p>${income}</p>
      </div>
      <div className="expenses">
        <h4>Expenses</h4>
        <p>${expense}</p>
      </div>
    </div>
  )
}

export default TransactionEvent
