import React from 'react';

import styles from './style.module.css';

interface InterfaceLoader {
  size: number;
  loading?: boolean;
};

const Loader = ({ size, loading }: InterfaceLoader) => (
  <div className={`${styles.loader} ${loading && styles.animation}`} style={{
    width: size,
    height: size,
  }}>
    <div className={styles.horizontalDivisor} style={{
      height: size/10,
    }}></div>
    <div className={styles.centerBall} style={{
      borderWidth: size/10,
      height: size/2,
      width: size/2,
    }}></div>
  </div>
);

export default Loader;
