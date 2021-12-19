import Head from 'next/head';
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
      <title>C I K L O G E N - {title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: 'C I K L O G E N',
  keywords: 'bicikle i priroda',
  description: 'Spustamo se da bismo se peli',
};
export default Meta;
