import React from 'react';
import Search from './Search';
import Logo from './Logo';
import NumbResults from './NumbResults';

export default function Navbar({ children }) {
  return (
    <nav className='nav-bar'>
      <Logo />
      {children}
    </nav>
  );
}
