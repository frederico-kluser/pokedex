import Head from 'next/head';
import React, { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../../context/theme';
import Loader from '../../core/Loader';

import styles from './style.module.css';

interface InterfacePageContainer {
  children: ReactNode | ReactNode[];
  loader?: boolean;
  title: string;
};

const PageContainer = ({ children, loader, title }: InterfacePageContainer) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.container} style={{
      backgroundColor: theme === 'light' ? '#FFFFFF' : '#212121',
    }}>
      <Head>
        <title>{ title }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.content}>
        {loader && (
          <div className={styles.loaderContainer}>
            <Loader size={100} loading />
          </div>
        )}
        {!loader && children}
      </main>
    </div>
  );
};

export default PageContainer;
