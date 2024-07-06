import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Navbar = () => {
  return (
    <Nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/add">Add Transaction</NavLink>
  </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 10px;
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
