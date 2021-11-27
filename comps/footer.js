import styles from '../styles/footer.module.scss';
import Link from 'next/link';
import { useGlobalContext } from '../context';

import {
  FaFacebookSquare,
  FaIdCard,
  FaInstagramSquare,
  FaMapMarker,
  FaPhone,
  FaSitemap,
} from 'react-icons/fa';

const Footer = ({ color = '#121212' }) => {
  const {
    data: { links },
  } = useGlobalContext();
  return (
    <footer className={styles.footer}>
      <div className={styles['mapa']}>
        <FaMapMarker />
        <h2>Kako do nas?</h2>

        <Link
          href='https://goo.gl/maps/HkxK9LoQs1FMSduH8'
          title='Open Google maps'
        >
          <a
            target='_blank'
            style={{
              textDecoration: 'none',
              color: color,
              margin: '1rem 0',
            }}
          >
            27. Marta 15a, Beograd
          </a>
        </Link>
      </div>
      <div className={styles['kontakt']}>
        <FaIdCard />
        <h2>Kontakt</h2>
        <div>Za sve informacije, kontaktirajte nas.</div>
        <div style={{ fontSize: '1rem', paddingBottom: '0' }}>Ketering</div>
        <div style={{ fontSize: '2rem' }}>
          <span>
            <FaPhone />
          </span>
          <Link href='tel:062 222 132'>
            <a style={{ textDecoration: 'none', color: color }}>062 222 132</a>
          </Link>
        </div>

        <div style={{ fontSize: '1rem', paddingBottom: '0' }}>Sala</div>
        <div style={{ fontSize: '2rem' }}>
          <span>
            <FaPhone />
          </span>
          <Link href='tel:061 30 10 400'>
            <a style={{ textDecoration: 'none', color: color }}>
              061 30 10 400
            </a>
          </Link>
          <br />
          <span>
            <FaPhone />
          </span>
          <Link href='tel:069 30 10 400'>
            <a style={{ textDecoration: 'none', color: color }}>
              069 30 10 400
            </a>
          </Link>
        </div>

        <div>
          <b>Email:</b>
          <Link href='mailto:keteringkameleon@gmail.com'>
            <a style={{ textDecoration: 'none', color: color }}>
              keteringkameleon@gmail.com
            </a>
          </Link>
        </div>
        <div className={styles['social-icons']}>
          <div className={styles['instagram']}>
            <Link href='https://www.instagram.com/keteringkameleon2021/'>
              <a>
                <FaInstagramSquare />
              </a>
            </Link>
          </div>
          <div className={styles['facebook']}>
            <FaFacebookSquare />
          </div>
        </div>
      </div>
      <div className={styles['linkovi']}>
        <FaSitemap />
        <h2>Mapa sajta</h2>
        <ul className={styles['links']}>
          {links.map((link, idx) => (
            <li className={styles['link']} key={idx}>
              <Link href={link.path}>
                <a>{link.link}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <span
        style={{
          position: 'absolute',
          textAlign: 'center',
          bottom: '0',
          width: '100%',
          fontWeight: '200',
          background: 'crimson',
        }}
      >
        &copy;KAMELEON 2021 | by{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://devox-portfolio.netlify.app'
        >
          devox
        </a>
      </span>
    </footer>
  );
};

export default Footer;
