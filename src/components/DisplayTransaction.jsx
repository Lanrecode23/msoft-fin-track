import React from 'react'
import useGetTransaction from '../hooks/useGetTransaction'

function DisplayTransaction() {
    const { transactions, loading, error } = useGetTransaction()
    return (
        <div>
            <div className="transaction_list">
                {loading && (
                    <div className='text-center mt-5'>
                        <div class="spinner-border text-center" style={{width: "3rem", height:" 3rem"}} role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow" style={{width: "3rem", height:" 3rem"}}  role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                {error && <h5 className='text-center' style={{color:"red", marginTop:'6rem'}}>Error: {error}</h5>}
                <ul>
                    {!loading && transactions.map(transaction => (
                        <li key={transaction.id}>
                            <div>{transaction.description}</div>
                            <div>{transaction.amount} - {transaction.type}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DisplayTransaction
