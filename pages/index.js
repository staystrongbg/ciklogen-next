import Articles from '../components/Articles';
import Meta from '../components/Meta';
import data from '../data';
import fotke from '../fotke';
export default function Home({ data, fotke }) {
  console.log(data, fotke);

  return (
    <>
      <Meta title='D o b r o d o s l i !' />
      {data.map((item, idx) => (
        <Articles item={item} key={idx} />
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  // const resData = await fetch('http://localhost:3000/api/data');
  // const resFotke = await fetch('http://localhost:3000/api/fotke');
  // const data = await resData.json();
  // const fotke = await resFotke.json();
  return {
    props: {
      data,
      fotke,
    },
  };
};
