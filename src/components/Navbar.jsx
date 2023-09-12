import React from 'react';
import Search from './Search';
import Logo from './Logo';
import NumbResults from './NumbResults';

export default function Navbar() {
  return (
    <nav className='nav-bar'>
      <Logo />
      <Search />
      <NumbResults />
    </nav>
  );
}
