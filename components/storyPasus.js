import styles from '../styles/story.module.css';

const Pasus = ({ text, dropcap = null }) => {
  return (
    <div className={styles['story-text']}>
      <p>
        {dropcap && (
          <span className={styles.dropcap}>{dropcap.toUpperCase()}</span>
        )}
        {text}
      </p>
    </div>
  );
};

export default Pasus;
