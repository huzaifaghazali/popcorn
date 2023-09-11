import React, { useState } from 'react';
import Search from './Search';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className='nav-bar'>
      <Logo />
      <Search />
    </nav>
  );
}
