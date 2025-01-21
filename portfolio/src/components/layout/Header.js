import React from 'react';
import Navbar from './Navbar';

import styles from './Header.module.css'
import logo from '../../images/icons/j.png'


function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="Logomarca J" className={styles.logomarca}/>
      </div>

      <Navbar />
    </header>
  );
}

export default Header;
