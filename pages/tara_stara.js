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
const Tara = () => {
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
          dropcap='T'
          text='he best climb is of course
        subjective. As I’ve noted before in this blog post, mountain climbs are
        a personal experience and every climb can deliver multiple experiences
        depending on the weather, your legs, your state of mind. The climb.'
        />
        <Row image={info[0].photos[0].src} />

        <Pasus
          text='The best climb is of course subjective. As I’ve noted before in this
          blog post, mountain climbs are a personal experience and every climb
          can deliver multiple experiences depending on the weather, your legs,
          your state of mind. The climb.'
        />
        <Row
          column
          image1={info[0].photos[1].src}
          image2={info[0].photos[2].src}
        />
        <Pasus
          text='A babbling river beside you, ice cold snow melt free after a winter
          frozen in captivity, rushing down the mountain as if there will be no
          tomorrow. That’ll be you later. First, I compete against myself and
          against the hill, not others. Every passing year is a vain (in both
          senses of the word) fight against time, decay and deterioration. Age
          is not kind to the hill climber. VO2max declines by 1% every year, our
          maximum heart rate slows, our muscles weaken and recovery takes
          longer. mountain as if there will be no tomorrow. That’ll be you
          later. First, I compete against myself and against the hill, not
          others. Every passing year is a vain (in both senses of the word)
          fight against time, decay and deterioration. Age is not kind to the
          hill climber. VO2max declines by 1% every year, our maximum heart rate
          slows, our muscles weaken and recovery takes longer.'
        />
        <Row
          column
          image1={info[0].photos[3].src}
          image2={info[0].photos[4].src}
        />

        <Pasus
          text='A babbling river beside you, ice cold snow melt free after a winter
          frozen in captivity, rushing down the mountain as if there will be no
          tomorrow. That’ll be you later. First, I compete against myself and
          against the hill, not others. Every passing year is a vain (in both
          senses of the word) fight against time, decay and deterioration. Age
          is not kind to the hill climber. VO2max declines by 1% every year, our
          maximum heart rate slows, our muscles weaken and recovery takes
          longer. mountain as if there will be no tomorrow. That’ll be you
          later. First, I compete against myself and against the hill, not
          others. Every passing year is a vain (in both senses of the word)
          fight against time, decay and deterioration. Age is not kind to the
          hill climber. VO2max declines by 1% every year, our maximum heart rate
          slows, our muscles weaken and recovery takes longer.'
        />

        <Row
          column
          image1={info[0].photos[5].src}
          image2={info[0].photos[6].src}
        />

        <Pasus
          text='A babbling river beside you, ice cold snow melt free after a winter
          frozen in captivity, rushing down the mountain as if there will be no
          tomorrow. That’ll be you later. First, I compete against myself and
          against the hill, not others. Every passing year is a vain (in both
          senses of the word) fight against time, decay and deterioration. Age
          is not kind to the hill climber. VO2max declines by 1% every year, our
          maximum heart rate slows, our muscles weaken and recovery takes
          longer. mountain as if there will be no tomorrow. That’ll be you
          later. First, I compete against myself and against the hill, not
          others. Every passing year is a vain (in both senses of the word)
          fight against time, decay and deterioration. Age is not kind to the
          hill climber. VO2max declines by 1% every year, our maximum heart rate
          slows, our muscles weaken and recovery takes longer.'
        />
      </div>
    </>
  );
};

export default Tara;
