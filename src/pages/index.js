import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Bárdos Richárd</title>
        <meta name="description" content="Bemutatkozó weboldalam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/man.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Oldal</p>
        </div>
      </main>
    </>
  )
}
