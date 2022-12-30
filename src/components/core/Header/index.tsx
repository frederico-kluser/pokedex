import Image from 'next/image';
import React from 'react';

import logo from '../../../assets/logo.png';
import style from './style.module.css';

const Header = () => {

  return (
    <header className={style.container}>
      <input placeholder='Search pokemon' className={style.inputSearch} />
    </header>
  );
}

export default Header;
