import styles from '../styles/story.module.css';

export const Pasus = (props) => {
  return (
    <div className={styles['story-text']}>
      {props.blockquote && (
        <div className={styles.blockquote}>
          <div className={styles.quotes}>&quot;</div>
          <div className={styles['divider-px']}></div>
          {props.blockquote}
        </div>
      )}
      <p>
        {props.dropcap && (
          <span className={styles.dropcap}>
            {props.text.charAt(0).toUpperCase()}
          </span>
        )}
        {props.text}
      </p>
    </div>
  );
};

Pasus.defaultProps = {
  blockquote: '',
  dropcap: false,
  text: 'Add some text',
};
