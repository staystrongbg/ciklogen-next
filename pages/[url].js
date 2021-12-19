import Header from '../components/Header';
import { Date } from '../components/date';
import { Intro } from '../components/intro';
import { Author } from '../components/author';
import { Pasus } from '../components/storyPasus';
import { Row } from '../components/imageRow';
import styles from '../styles/story.module.css';
import { useEffect, useState } from 'react';
import Meta from '../components/Meta';
import fotke from '../fotke.json';
import data from '../data';

const Article = ({ page, fotke }) => {
  const [elements, setelements] = useState({
    pageContent: fotke[page.url],
    header: page,
    datum: page.datum,
    intro: page.intro,
    autor: page.autor,
  });
  useEffect(() => {
    setelements({
      pageContent: fotke[page.url],
      header: page,
      datum: page.datum,
      intro: page.intro,
      autor: page.autor,
    });
  }, [page, fotke]);

  console.log(elements.pageContent);
  return (
    <>
      <Meta title={page.heading} />
      <Header header={elements.header} />
      <Date date={elements.datum} />
      <div className={styles.story}>
        <Intro intro={elements.intro} />
        <Author autor={elements.autor} />
        {elements.pageContent.map((item) => (
          <div key={item.id}>
            <Pasus
              text={item.text}
              dropcap={item.dropcap && item.dropcap}
              blockquote={item.blockquote && item.blockquote}
            />
            <Row
              column={item.column && item.column}
              image={item.image && item.image}
              image1={item.image1 && item.image1}
              image2={item.image2 && item.image2}
              image3={item.image3 && item.image3}
              image4={item.image4 && item.image4}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Article;

export const getStaticProps = async (context) => {
  // const resData = await fetch('http://localhost:3000/api/data');
  // const resFotke = await fetch('http://localhost:3000/api/fotke');

  // const data = await resData.json();
  // const fotke = await resFotke.json();
  return {
    props: {
      page: data.find((i) => i.url === context.params.url),
      fotke,
    },
  };
};

export const getStaticPaths = async () => {
  // const resData = await fetch('http://localhost:3000/api/data');
  // const data = await resData.json();
  return {
    paths: data.map((item) => {
      return {
        params: { url: item.url },
      };
    }),
    fallback: false,
  };
};
