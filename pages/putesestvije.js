import data from '../data';
import { useState } from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { Date } from '../components/date';
import { Intro } from '../components/intro';
import { Author } from '../components/author';
import styles from '../styles/story.module.css';

const Putesestvije = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(data);
  const info = data.filter((item) => item.name === 'putešestvije');

  return (
    <>
      <Header info={info[0]} />
      <Date date={info[0].datum} />
      <div className={styles.story}>
        <Intro intro={info[0].intro} />
        <Author autor={info[0].autor} />
      </div>
      {showModal && <Modal />}
    </>
  );
};

export default Putesestvije;
