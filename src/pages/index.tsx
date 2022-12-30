import Head from 'next/head'
import PageContainer from 'src/components/template/PageContainer'

import styles from './index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageContainer></PageContainer>
      </main>
    </div>
  )
}
