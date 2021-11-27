import { FaTimesCircle } from 'react-icons/fa';
import styles from '../styles/modal.module.scss';

const Modal = ({ img, showModal }) => {
  return (
    <div className={styles.modal}>
      <FaTimesCircle onClick={() => showModal(false)} />
      <img src={img} alt='' />
    </div>
  );
};

export default Modal;
