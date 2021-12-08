import Sablon from '../components/sablon';
import Head from 'next/head';

const Kosmaj = (fotke) => {
  console.log(fotke);
  return (
    <>
      <Head>
        <title>C I K L O G E N C R E W - Kosmaj</title>
        <meta
          name='description'
          content='ciklogen | spuštamo se da bismo se peli'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sablon content={fotke.kosmaj} />
    </>
  );
};

export default Kosmaj;
