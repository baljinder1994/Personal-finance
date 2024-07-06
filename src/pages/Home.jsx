// src/pages/HomePage.js
import React from 'react';
import BudgetOverview from '../components/BudgetOverview';
import TransactionList from '../components/TransactionList';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <Container>
      <Header>
        <h1>Personal Finance Manager</h1>
        
      </Header>
      <BudgetOverview />
      <TransactionList />
    </Container>
  );
};

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddButton = styled.button`
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

export default HomePage;
