import React, { ReactNode } from 'react';

import styles from './style.module.css';

interface InterfacePageContainer {
  children: ReactNode;
}

const PageContainer = (props: InterfacePageContainer) => (<div className={styles.container}>{props.children}</div>)

export default PageContainer;
