// src/components/BudgetOverview.js
import React, { useContext } from 'react';
import { FinanceContext } from '../context/Context';

const BudgetOverview = () => {
  const { transactions } = useContext(FinanceContext);

  const income = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
  const expenses = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
  const balance = income - expenses;

  return (
    <div>
      <h2>Budget Overview</h2>
      <p>Income: ${income}</p>
      <p>Expenses: ${expenses}</p>
      <p>Balance: ${balance}</p>
    </div>
  );
};

export default BudgetOverview;
