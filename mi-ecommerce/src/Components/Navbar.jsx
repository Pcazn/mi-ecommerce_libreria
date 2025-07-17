import React from 'react';
import { NavbarContainer, Logo, NavLinks, NavLink } from './Navbar.styles';

export default function Navbar({ cartItemCount }) {
  return (
    <NavbarContainer>
      <Logo to="/">📚 Librería</Logo>
      <NavLinks>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/profile">Perfil</NavLink></li>
        <li>
          <NavLink to="/cart">
            Carrito {cartItemCount > 0 && `(${cartItemCount})`}
          </NavLink>
        </li>
      </NavLinks>
    </NavbarContainer>
  );
}
