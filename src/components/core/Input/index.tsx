import React from 'react';

import styles from './style.module.css';

interface InterfaceInput {
  placeholder: string,
  state: string;
  setState: Function;
}

const Input = ({ placeholder, setState, state }: InterfaceInput) => <input placeholder={placeholder} value={state} className={styles.inputSearch} onChange={(event) => {
  setState(event.target.value);
}} />

export default Input;
