import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>9ART.ru</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Portfolio&nbsp;
            <code className={styles.code}>Muzyk0</code>
          </p>
          <div>
            <a
              href="https://github.com/muzyk0"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              {/*<Image*/}
              {/*  src="/vercel.svg"*/}
              {/*  alt="Vercel Logo"*/}
              {/*  className={styles.vercelLogo}*/}
              {/*  width={100}*/}
              {/*  height={24}*/}
              {/*  priority*/}
              {/*/>*/}
              Muzyka Vladislav
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.thirteen}>
            <Image
              src="/muzyk0-start-wars.png"
              alt="Muzyka Vladislav"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://github.com/muzyk0/NestJS-Blogs-API"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Blog platform <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              API service for website blog platform.
            </p>
          </a>

          <a
            href="https://github.com/muzyk0/Todolist-GraphQL-Course"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              GraphQL Course <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about GraphQL in an interactive course with React.
            </p>
          </a>

          <a
            href="https://github.com/muzyk0/Todolist-GraphQL-server"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Todolist API<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Backend service for GraphQL Course.
            </p>
          </a>

          <a
            href="https://github.com/muzyk0"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              View GitHub <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Make me an offer right now, without registration and sms.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
