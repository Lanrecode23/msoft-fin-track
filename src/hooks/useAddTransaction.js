import React from 'react'
import { Auth, db } from '../config/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Swal from 'sweetalert2'


function useAddTransaction() {

    const collectionRef = collection(db, "transactions")

    const addTransaction = async ({ description, amount, type }) => {

        // Add the transaction to the database with the current user's ID
        try {
            const userId = Auth.currentUser.uid;
            await addDoc(collectionRef, {
                userId,
                description,
                amount,
                type,
                // createdAt: serverTimestamp()
            })
            const Toast = Swal.mixin({
                toast: true,
                position: "top-center",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Created successfully"
              });
        } catch (error) {

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "error",
                title: "An error occured"
              });
        }

    }
    return (

        { addTransaction }

    )
}

export default useAddTransaction
