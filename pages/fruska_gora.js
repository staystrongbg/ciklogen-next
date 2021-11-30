import Sablon from '../components/sablon';
import Head from 'next/dist/shared/lib/head';
const Fruska = (fotke) => {
  return (
    <>
      <Head>
        <title>C I K L O G E N C R E W - Fruska Gora</title>
        <meta
          name='description'
          content='ciklogen | spuštamo se da bismo se peli'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sablon content={fotke.fruskaGora} />
    </>
  );
};

export default Fruska;
