import React, { useState } from 'react'
import '../css/transaction.css'
import Header from './Header'
import TransactionEvent from './TransactionEvent'
import useAddTransaction from '../hooks/useAddTransaction'
import DisplayTransaction from './DisplayTransaction'

function TransactionList() {
    const [transactionName, setTransactionName] = useState("")
    const [amount, setAmount] = useState("")
    const [transactionType, setTransactionType] = useState("")

    // get the custom add transaction hook
    const {addTransaction} = useAddTransaction()

 // handle form submission for adding a new transaction
    const handleSubmit = (e)=>{
        e.preventDefault();
        addTransaction({
            description: transactionName,
            amount: Number(amount) ,
            type: transactionType
        })
        
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
                        <label htmlFor="expenses">
                            <input type="radio" name="trasactionType" id=""  value='expenses'
                            onChange={(e)=>setTransactionType(e.target.value)}/> Expenses &nbsp;  &nbsp; &nbsp; 
                        </label>
                        <label htmlFor="income">
                            <input type="radio" name="trasactionType" id="" value='income' 
                            onChange={(e)=>setTransactionType(e.target.value)}/> Income
                        </label> <br /> <br />
                        <button>Add Transaction</button>
                    </form>
                </div>
            </div>

            <DisplayTransaction/>
        </>
    )
}

export default TransactionList
