import Head from 'next/head'
import PageContainer from 'src/components/template/PageContainer'
import PokemonCard from 'src/components/ui/PokemonCard'

import styles from './index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageContainer>
          <PokemonCard />
          <PokemonCard />
          <PokemonCard /> 
          <PokemonCard /> 
          <PokemonCard /> 
          <PokemonCard /> 
          <PokemonCard /> 
          <PokemonCard /> 
        </PageContainer>
      </main>
    </div>
  )
}
