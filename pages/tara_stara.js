/* eslint-disable @next/next/no-img-element */
import data from '../data';
import { useState } from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { Date } from '../components/date';
import { Intro } from '../components/intro';
import { Author } from '../components/author';
import styles from '../styles/story.module.css';
import Pasus from '../components/storyPasus';
import Row from '../components/imageRow';

const Tara = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(data);
  const info = data.filter((item) => item.name === 'tara-Stara');

  return (
    <>
      <Header info={info[0]} />
      <Date date={info[0].datum} />
      <div className={styles.story}>
        <Intro intro={info[0].intro} />
        <Author autor={info[0].autor} />
        {showModal && <Modal />}
        <Pasus
          dropcap='T'
          text='he best climb is of course
        subjective. As I’ve noted before in this blog post, mountain climbs are
        a personal experience and every climb can deliver multiple experiences
        depending on the weather, your legs, your state of mind. The climb.'
        />
        <Row image='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1637969974/ciklogen/tara1_hi51po.jpg' />

        <Pasus
          text='The best climb is of course subjective. As I’ve noted before in this
          blog post, mountain climbs are a personal experience and every climb
          can deliver multiple experiences depending on the weather, your legs,
          your state of mind. The climb.'
        />
        <Row
          column
          image1='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1637969974/ciklogen/tara2_q4loao.jpg'
          image2='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1637969974/ciklogen/tara3_pt8wfd.jpg'
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
          image1='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1637969974/ciklogen/tara4_bgldbn.jpg'
          image2='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1637969974/ciklogen/tara5_xclmfk.jpg'
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
          image1='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1637969974/ciklogen/tara6_mzhy7v.jpg'
          image2='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1637969974/ciklogen/tara7_iuibic.jpg'
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
