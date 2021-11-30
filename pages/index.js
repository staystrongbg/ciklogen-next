import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.css';
import data from '../data';
import Link from 'next/link';

export default function Home() {
  console.log(data);
  return (
    <>
      <Head>
        <title>C I K L O G E N C R E W - Welcome</title>
        <meta
          name='description'
          content='ciklogen | spuštamo se da bismo se peli'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {data.map(({ heading, css_class, text, url }, idx) => (
        <div
          key={idx}
          className={`${styles['bg-image']} ${styles.sepia} ${styles[css_class]}`}
        >
          <div className={styles['bg-text']}>
            <h3 className={styles['heading']}>{heading}</h3>
            <p className={styles['desc']}>{text}</p>
          </div>
          <div>
            <Link href={url}>
              <a>
                <button className={styles['read-more']}>Read more</button>
              </a>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
// <div className={`${styles.proslaveCL} ${styles.service}`}></div>;
