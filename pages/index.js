import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDo</title>
        <meta name="Helps you remember important tasks!" content="Here you can create, collect and mark as completed your different problems, tasks and goals!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.first}>
        a
      </div>
      <div className={styles.second}>
        b
      </div>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
