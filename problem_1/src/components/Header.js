import React, { useState } from 'react';

const Header = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  return(
    <header className='header-container'>
      <a href='#home' className='header-logo'><p>Logo</p></a>
      <div className={ isMenuOpen ? 'header-menu' : 'header-menu-none'}>
        <a href='#news' className='header-menus'><p>News</p></a>
        <a href='#contact' className='header-menus'><p>Contact</p></a>
        <a href='#about' className='header-menus'><p>About</p></a>
      </div>
      <div className='header-menu-button' onClick={() => setMenuOpen(!isMenuOpen)}>
        <i className='fa fa-bars'></i>
      </div>
    </header>
  );
}

export default Header;
