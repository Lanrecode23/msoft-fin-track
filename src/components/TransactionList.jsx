import React, { useState } from 'react'
import '../css/transaction.css'
import Header from './Header'
import TransactionEvent from './TransactionEvent'

function TransactionList() {
    const [transactionName, setTransactionName] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        const details = [
            {
                transact_name : transactionName,
                Amount: amount,
            }
        ]
        console.log(details);
        setTransactionName("")
        setAmount("")
    }
    
    return (
        <>
        <Header/>
            <div className='Transaction_list mt-5'>
                <div className="Transaction_header">
                    <h5>transaction list</h5>
                    <TransactionEvent/>
                </div>
                <div className="Add_Transaction">
                    <h5>Add a Transaction</h5>
                    <form action="" onSubmit={handleSubmit} className='Form_transaction text-white'>
                        <label htmlFor="">Transaction name:</label><br />
                        <input type="text" name="" id="" 
                        value={transactionName} onChange={(e)=>setTransactionName(e.target.value)} required/> <br /> <br />
                        <label htmlFor="">Amount ($):</label><br />
                        <input type="number" name="" id="" 
                        value={amount} onChange={(e)=>setAmount(e.target.value)} required/> <br /><br />
                        <button>Add Transaction</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default TransactionList
