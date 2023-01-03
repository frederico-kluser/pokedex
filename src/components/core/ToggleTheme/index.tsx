import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/theme';

import styles from './style.module.css';

const ToggleTheme = () => {
  const {
    theme,
    setTheme
  } = useContext(ThemeContext);

  return <button className={styles.button} onClick={() => {
    setTheme((prev) => {
      return prev !== 'light' ? 'light' : 'dark'
    });
  }}>{theme !== 'light' ? 'light' : 'dark'} mode</button>;
}

export default ToggleTheme;
