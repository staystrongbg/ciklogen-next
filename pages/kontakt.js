import FsSlider from '../comps/fsSlider';
import styles2 from '../styles/ketering_info.module.scss';
import styles from '../styles/pitajte.module.scss';
import Head from 'next/head';

const Kontakt = () => {
  const kontaktTel = [
    { imgSrc: '/ketering-slike-nove/fon.webp', title: 'Kontakt', text: '' },
  ];
  return (
    <>
      <Head>
        <title>KAMELEON 2021 - Kontakt </title>
      </Head>
      <FsSlider fsPhotos={kontaktTel} />
      <div className={styles2.fotoContainer}>
        <div className={styles.pitajte} style={{ background: '#f1f1f4' }}>
          <h2>imate pitanje? Kontaktirajte nas!</h2>
          <div className='straight-line'></div>
          <form
            method='POST'
            action='https://formsubmit.co/staystrongbg@gmail.com'
            className={styles.form}
          >
            <input
              id={styles.ime}
              type='text'
              name='name'
              placeholder='ime*'
              required
            />
            <input
              id={styles.email}
              type='email'
              name='email'
              placeholder='email*'
              required
            />
            <textarea
              name='pitanje'
              id={styles.pitanje}
              placeholder='pitanje*'
              required
            ></textarea>
            <button id='submit-btn' type='submit'>
              Pošalji
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Kontakt;
