// src/components/TransactionList.js
import React, { useContext } from 'react';
import { FinanceContext } from '../context/Context';
import { Link } from 'react-router-dom';

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(FinanceContext);

  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.description} - ${transaction.amount}
            <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
            <Link to={`/edit/${transaction.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
