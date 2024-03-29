import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'next-i18next';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    const { t } = useTranslation('home')

    return (
        <>
            <Head>
                <title>9ART.ru</title>
                <meta name="description" content="Portfolio"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <p>
                        {t('title')}&nbsp;
                        <code className={styles.code}>Muzyk0</code>
                    </p>
                    <div>
                        <a
                            href="https://github.com/muzyk0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {/*<Image*/}
                            {/*  src="/vercel.svg"*/}
                            {/*  alt="Vercel Logo"*/}
                            {/*  className={styles.vercelLogo}*/}
                            {/*  width={100}*/}
                            {/*  height={24}*/}
                            {/*  priority*/}
                            {/*/>*/}
                            {t('author')}
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
                        href={t('cards.first.link') ?? '#'}
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            {t('cards.first.title')} <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            {t('cards.first.description')}
                        </p>
                    </a>

                    <a
                        href={t('cards.second.link') ?? '#'}
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            {t('cards.second.title')} <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            {t('cards.second.description')}
                        </p>
                    </a>

                    <a
                        href={t('cards.third.link') ?? '#'}
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            {t('cards.third.title')} <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            {t('cards.third.description')}
                        </p>
                    </a>

                    <a
                        href={t('cards.fourth.link') ?? '#'}
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            {t('cards.fourth.title')} <span>-&gt;</span>
                        </h2>
                        <p className={inter.className}>
                            {t('cards.fourth.description')}
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}

export async function getStaticProps({locale}: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'home',
            ])),
            // Will be passed to the page component as props
        },
    }
}