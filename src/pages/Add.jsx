// src/components/TransactionForm.js
import React, { useState, useContext } from 'react';
import { FinanceContext } from '../context/Context';
import styled from 'styled-components';

const TransactionForm = () => {
  const { addTransaction } = useContext(FinanceContext);
  const [transaction, setTransaction] = useState({ description: '', amount: '', type: 'income' });

  const handleChange = e => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTransaction(transaction);
    setTransaction({ description: '', amount: '', type: 'income' }); // Clear form fields
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <label>Description:</label>
        <Input
          type="text"
          name="description"
          value={transaction.description}
          onChange={handleChange}
          placeholder="Enter description"
          required
        />
      </FormField>
      <FormField>
        <label>Amount:</label>
        <Input
          type="number"
          name="amount"
          value={transaction.amount}
          onChange={handleChange}
          placeholder="Enter amount"
          required
        />
      </FormField>
      <FormField>
        <label>Type:</label>
        <Select name="type" value={transaction.type} onChange={handleChange}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Select>
      </FormField>
      <SubmitButton type="submit">Add Transaction</SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default TransactionForm;
