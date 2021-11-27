import styles from '../styles/story.module.css';

const Pasus = (props) => {
  return (
    <div className={styles['story-text']}>
      <p>
        {props.dropcap && (
          <span className={styles.dropcap}>{props.dropcap.toUpperCase()}</span>
        )}
        {props.text}
      </p>
    </div>
  );
};

export default Pasus;
