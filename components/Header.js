import styles2 from '../styles/story.module.css';
import styles from '../styles/home.module.css';

const Header = ({ info }) => {
  const { heading, css_class, text } = info;
  return (
    <div className={styles2['header-content']}>
      <div className={`${styles2.header} ${styles[css_class]}`}>
        <div className={styles2['content']}>
          <h1 className={styles2['naslov']}>{heading}</h1>
          <p className={styles2['podnaslov']}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
