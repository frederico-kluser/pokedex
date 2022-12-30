import Head from 'next/head';
import React, { ReactNode } from 'react';
import Loader from 'src/components/core/Loader';

import styles from './style.module.css';

interface InterfacePageContainer {
  children: ReactNode | ReactNode[];
  loader?: boolean;
  title: string;
};

const PageContainer = ({ children, loader, title }: InterfacePageContainer) => (<div className={styles.container}>
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
</div>);

export default PageContainer;
