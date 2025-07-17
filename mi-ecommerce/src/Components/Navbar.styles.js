import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  padding: 1rem 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled(Link)`
  color: #b1b2b2ff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled(Link)`
  color: #858787ff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: #bdd7ea;
  }
`;

