import React from 'react'
import { Auth, db } from '../config/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

function useAddTransaction() {

    const collectionRef = collection(db, "transactions")

    const addTransaction = async ({description, amount, type}) => {

        // Add the transaction to the database with the current user's ID
        const userId = Auth.currentUser.uid;
        await addDoc(collectionRef, {
            userId,
            description,
            amount,
            type,
            createdAt: serverTimestamp,
        });

    }
    return (

        { addTransaction }

    )
}

export default useAddTransaction
