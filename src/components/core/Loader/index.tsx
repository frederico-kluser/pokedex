import React from 'react';

import styles from './style.module.css';

interface InterfaceLoader {
  color?: string;
  loading?: boolean;
  transparentColor?: string;
  size: number;
};

const Loader = ({ color = '#000000', loading, transparentColor = '#FFFFFF', size }: InterfaceLoader) => (
  <div className={`${styles.loader} ${loading && styles.animation}`} style={{
    backgroundColor: color,
    height: size,
    width: size,
  }}>
    <div className={styles.horizontalDivisor} style={{
      backgroundColor: transparentColor,
      height: size/10,
    }}></div>
    <div className={styles.centerBall} style={{
      backgroundColor: color,
      borderColor: transparentColor,
      borderWidth: size/10,
      height: size/2,
      width: size/2,
    }}></div>
  </div>
);

export default Loader;
