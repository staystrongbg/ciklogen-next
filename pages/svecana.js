import styles from '../styles/svecana-info.module.scss';
import FsSlider from '../comps/fsSlider';
import Head from 'next/head';
const Svecana = () => {
  const fsSala = [
    {
      imgSrc: '/sala/kameleon-sala-1.jpg',
      title: 'svečana sala',
      text: 'Idealne za venčanja kapaciteta od 80 do 300 mesta',
    },
    { imgSrc: '/sala/kameleon-sala-2.jpg', title: '', text: '' },
    { imgSrc: '/sala/kameleon-sala-3.jpg', title: '', text: '' },
  ];

  return (
    <>
      <Head>
        <title>KAMELEON 2021 - Svečana Sala</title>
      </Head>
      <FsSlider fsPhotos={fsSala} />
      <div className={styles.fotoContainer}>
        <div className={styles.katInfo}>
          <section className={styles.svecanaInfo}>
            <div className={styles.wrapper}>
              <p>
                Eksluzivna svečana velika sala kapaciteta <b>od 80 do 300</b>{' '}
                mesta idealne za organizaciju venčanja ili svadbi, punoletstva,
                krštenja, kao i za sve vrste drugih proslava i svečanosti.
                <br />U okviru kompleksa nalaze se LUX apartmani za mladence sa
                velikim osvetljenim parkingom koji može prihvatiti sve Vaše
                goste.
              </p>
              <h2>
                Kontaktirajte nas za sve informacije
                <br />
                <span className={styles.telbig}> 061 30 10 400</span>,
                <br />
                <span className={styles.telbig}> 069 30 10 400</span>
              </h2>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Svecana;
