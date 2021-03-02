import React, { useState } from 'react';

const Header = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  return(
    <header className='header-container'>
      <a href='#home' className='header-logo'>Logo</a>
      <div className='header-menu'>
        <a href='#news' className='header-menus'>news</a>
        <a href='#contact' className='header-menus'>contact</a>
        <a href='#about' className='header-menus'>about</a>
      </div>
      <div className='header-menu-button' onClick={undefined}>
        <i className='fa fa-bars'></i>
      </div>
    </header>
  );
}

export default Header;
