/* eslint-disable @next/next/no-img-element */

import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import styles1 from '../styles/resp_img.module.css';
const Modal = ({ src, showmodal }) => {
  return (
    <div className={styles1['modal-overlay']}>
      <img className={styles1['modal-img']} src={src} alt='' />

      <div className={styles1['btns']}>
        <button className={`${styles1.left} ${styles1.btn}`}>
          <FaChevronLeft />
        </button>
        <button className={`${styles1.right} ${styles1.btn}`}>
          <FaChevronRight />
        </button>
      </div>

      <button
        className={styles1['close-modal']}
        onClick={() => showmodal(false)}
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default Modal;
