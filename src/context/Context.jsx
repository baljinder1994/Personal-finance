// src/context/FinanceContext.js
import React, { createContext, useState, useEffect } from 'react';

export const FinanceContext = createContext();

const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    // Retrieve transactions from localStorage if available, otherwise default to an empty array
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    return storedTransactions || [];
  });

  useEffect(() => {
    // Update localStorage whenever transactions change
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, { ...newTransaction, id: Date.now() }]);
  };

  const updateTransaction = (updatedTransaction) => {
    setTransactions(transactions.map(transaction => (transaction.id === updatedTransaction.id ? updatedTransaction : transaction)));
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <FinanceContext.Provider value={{ transactions, addTransaction, updateTransaction, deleteTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
};

export default FinanceProvider;
