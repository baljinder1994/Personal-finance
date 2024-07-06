// src/components/TransactionForm.js
import React, { useState, useContext, useEffect } from 'react';
import { FinanceContext } from '../context/Context';
import { useNavigate, useParams } from 'react-router-dom';

const TransactionForm = () => {
  const { addTransaction, updateTransaction, transactions } = useContext(FinanceContext);
  const [transaction, setTransaction] = useState({ description: '', amount: '', type: 'income' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const transactionToEdit = transactions.find(t => t.id === parseInt(id));
      if (transactionToEdit) setTransaction(transactionToEdit);
    }
  }, [id, transactions]);

  const handleChange = e => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      updateTransaction(transaction);
    } else {
      addTransaction(transaction);
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input type="text" name="description" value={transaction.description} onChange={handleChange} required />
      </label>
      <label>
        Amount:
        <input type="number" name="amount" value={transaction.amount} onChange={handleChange} required />
      </label>
      <label>
        Type:
        <select name="type" value={transaction.type} onChange={handleChange}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </label>
      <button type="submit">{id ? 'Update' : 'Add'} Transaction</button>
    </form>
  );
};

export default TransactionForm;
