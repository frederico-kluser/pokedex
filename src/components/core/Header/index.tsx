import React, { ReactNode } from 'react';

import style from './style.module.css';

interface InterfaceHeader {
  children: ReactNode | ReactNode[];
};

const Header = ({ children }: InterfaceHeader) => {

  return (
    <header className={style.container}>
      {children}
    </header>
  );
}

export default Header;
