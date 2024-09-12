import React from 'react'
import useGetTransaction from '../hooks/useGetTransaction'
import '../css/transaction.css'

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
                {transactions.length == 0 && <h5 className='text-center mt-5'>No transactions Yet</h5>}
                <div className='transact_container text-center mt-5'>
                    {!loading && transactions.map(transaction => (
                        <div key={transaction.id}>
                            <div>{transaction.description}</div>
                            <div className='mb-3'>{transaction.amount} - {transaction.type}</div>
                        </div>     
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DisplayTransaction
