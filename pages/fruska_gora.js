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

const Fruska = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(data);
  const info = data.filter((item) => item.name === 'fruška gora');
  console.log(info);
  return (
    <>
      <Header info={info[0]} />
      <Date date={info[0].datum} />
      <div className={styles.story}>
        <Intro intro={info[0].intro} />
        <Author autor={info[0].autor} />
        {showModal && <Modal />}
        <Pasus
          dropcap='t'
          text='he best climb is of course subjective. As I’ve noted before in this blog post, mountain climbs are a personal experience and every climb can deliver multiple experiences depending on the weather, your legs, your state of mind. The climb. '
        />
        <Row image='https://lh3.googleusercontent.com/SDCRdn8N252s3NXbc1Ie66av2AUdmDBM6VfJs-pWg71qWYAcYxhLkK51J7R3h7hggqW1ani7_-dt4jlRFCqz5r61QIwLQy6DuC6K4s0VvEFd-E11JQvRzEH6XYjPJMigas4j-m6-LImvR2-QNf5zHo_R7ICzGo6MGbo0-Tj1jXXrDGBlN8YeeywK5xMUycIkqGd5eZ8pbRfXfuz2KQ3lVgjp4UumOvNgwC6D6i8jAsS9scqluf0A88QpnvT_O7yxyLc-w4gu5Wv-4E0utp1ylowODRVe0emU6n-R3QopYjjDZcJrYowBImoDcIQ7JePfpxXWln1TBZ_65rw37aK1LI4S_o1k8wIwINk66jgfmF5RNH6c17Mn9hlmLZO854fu3B6GMvTLgIyH5wzhHMLX4a48WRPJgJzQfdaxSXx4EyLwCh-pRkiSQV-19OgFzf7RMO0OI561845D32m66njwy0f44SVKiDaIqw9QSt2k_t1puLNJmKG6STr-JA6P5J2b-4x7D_tPX2NTDEFbiSqlSYP2CL8m98k-shzCoakMilaODFXi8PjI-FePtFxufeOT7JGCQyAPOYmYxdG-v2pbLfl03V0YbPC5b0KgRVt8RHwBE_X1v32flxOnlH_zTmINwNyNCwuMk9JFE7C06UF4sVC-GjZFTXpb6lOMZpu89RsUlOqfs_EYCSTUdISSMuPIOiUVZfFyTWd8w6LP3MOpOVY=w1264-h948-no?authuser=0' />
        <Pasus text=' The best climb is of course subjective. As I’ve noted before in this blog post, mountain climbs are a personal experience and every climb can deliver multiple experiences depending on the weather, your legs, your state of mind. The climb. ' />
      </div>
    </>
  );
};

export default Fruska;
