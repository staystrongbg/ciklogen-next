import Sablon from '../components/sablon';
import Head from 'next/head';

const Putesestvije = (fotke) => {
  console.log(fotke);
  return (
    <div>
      <Head>
        <title>C I K L O G E N C R E W - Putesestvije</title>
        <meta
          name='description'
          content='ciklogen | spuštamo se da bismo se peli'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Sablon content={fotke.putesestvije} />
    </div>
  );
};

export default Putesestvije;
