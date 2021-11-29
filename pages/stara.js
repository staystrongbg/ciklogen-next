import { useRouter } from 'next/router';
import { useState } from 'react';
import data from '../data';
import Header from '../components/Header';
import { Date } from '../components/date';
import { Intro } from '../components/intro';
import { Author } from '../components/author';
import { Pasus } from '../components/storyPasus';
import { Row } from '../components/imageRow';
import styles from '../styles/story.module.css';
const Stara = () => {
  const [loc] = useState(useRouter().pathname);
  const [info] = useState(data.filter((item) => item.url === loc));
  const [elementi] = useState({
    header: info[0],
    datum: info[0].datum,
    intro: info[0].intro,
    autor: info[0].datum,
  });
  const path = (x) => {
    return info[0].photos[x].src;
  };

  return (
    <>
      <Header header={elementi.header} />
      <Date date={elementi.datum} />
      <div className={styles.story}>
        <Intro intro={elementi.intro} />
        <Author autor={elementi.autor} />
      </div>
    </>
  );
};

export default Stara;
