import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import styles1 from '../styles/resp_img.module.css';
import styles2 from '../styles/story.module.css';
const Modal = () => {
  return (
    <div className={styles2['modal-overlay']}>
      <img className={styles2['modal-img']} />

      <div className={styles1['btns']}>
        <button className={styles1['btn left']}>
          <FaChevronLeft />
        </button>
        <button className={styles1['btn right']}>
          <FaChevronRight />
        </button>
      </div>

      <button className={styles1['close-modal']}>
        <FaTimes />
      </button>
    </div>
  );
};

export default Modal;
