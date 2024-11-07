import React, { useEffect, useState } from 'react';
import { Auth, db } from '../config/firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

function useGetTransaction() {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [transactionsTotal, setTransactionsTotal] = useState({
        balance: 0.0,
        income: 0.0,
        expense: 0.0,
    });

    useEffect(() => {
        const getTransaction = async () => {
            try {
                // Initialize balance, income, expense to 0
                let balance = 0;
                let income = 0;
                let expense = 0;

                // Get the current user
                const user = Auth.currentUser;
                if (user) {
                    // Get the user id
                    const userId = user.uid;
                    const collectionRef = collection(db, 'transactions');
                    const q = query(collectionRef, where('userId', '==', userId));
                //Got through the collection and return the items in that collection
                    const unsubscribe = onSnapshot(q, (snapshot) => {
                        const transactionsList = snapshot.docs.map(doc => {
                            const data = doc.data();
                            const amount = data.amount;
                            
                            // Update balance, income, expense
                            if (data.type === 'income') {
                                income += amount;
                            } else if (data.type === 'expenses') {
                                expense += amount;
                            }
                            balance = income - expense;

                            return {
                                id: doc.id,
                                ...data
                            };
                        });

                        setTransactions(transactionsList);
                        setTransactionsTotal({ balance, income, expense });
                        setLoading(false);
                    }, (err) => {
                        setError(err.message);
                        setLoading(false);
                    });

                    // Clean up subscription on unmount
                    return () => unsubscribe();

                } else {
                    setLoading(false);
                    setTransactions([]);
                    setError("User not logged in");
                }
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getTransaction();
    }, []);

    return { transactions, loading, error, transactionsTotal };
}

export default useGetTransaction;
