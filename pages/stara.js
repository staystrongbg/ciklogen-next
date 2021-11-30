import Sablon from '../components/sablon';
import Head from 'next/head';
const Stara = (fotke) => {
  return (
    <>
      <Head>
        <title>C I K L O G E N C R E W - Stara</title>
        <meta
          name='description'
          content='ciklogen | spuštamo se da bismo se peli'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sablon content={fotke.stara} />
    </>
  );
};

export default Stara;
