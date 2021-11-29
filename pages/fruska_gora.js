//<Row image={info[0].photos[1].src} /> || path(x)
//<Pasus text='<string>' />
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
const Fruska = () => {
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
        <Pasus
          dropcap='t'
          text='he best climb is of course subjective. As I’ve noted before in this blog post, mountain climbs are a personal experience and every climb can deliver multiple experiences depending on the weather, your legs, your state of mind. The climb. '
        />
        <Row image={path(0)} />
        <Pasus text=' The best climb is of course subjective. As I’ve noted before in this blog post, mountain climbs are a personal experience and every climb can deliver multiple experiences depending on the weather, your legs, your state of mind. The climb. ' />
        <Row image={path(1)} />
        <Pasus text=' The best climb is of course subjective. As I’ve noted before in this blog post, mountain climbs are a personal experience and every climb can deliver multiple experiences depending on the weather, your legs, your state of mind. The climb. ' />
        <Row image={path(2)} />
        <Pasus text=' The best climb is of course subjective. As I’ve noted before in this blog post, mountain climbs are a personal experience and every climb can deliver multiple experiences depending on the weather, your legs, your state of mind. The climb. ' />
        <Pasus text=' The best climb is of course subjective. As I’ve noted before in this blog post, mountain climbs are a personal experience and every climb can deliver multiple experiences depending on the weather, your legs, your state of mind. The climb. ' />
        <Row
          column
          image1={path(3)}
          image2={path(4)}
          image3={path(3)}
          image4={path(1)}
        />
        <Pasus text=' The best climb is of course subjective. As I’ve noted before in this blog post, mountain climbs are a personal experience and every climb can deliver multiple experiences depending on the weather, your legs, your state of mind. The climb. ' />
        <Pasus text=' The best climb is of course subjective. As I’ve noted before in this blog post, mountain climbs are a personal experience and every climb can deliver multiple experiences depending on the weather, your legs, your state of mind. The climb. ' />
        <Row image={path(5)} />
      </div>
    </>
  );
};

export default Fruska;
