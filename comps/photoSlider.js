import styles from '../styles/photoslider.module.scss';
import { useEffect, useRef, useState } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import Modal from './modal';

const PhotoSlider = () => {
  const { importAll } = useGlobalContext();

  const s = importAll(
    require.context('/public/sala', false, /\.(png|jpe?g|svg)$/)
  );
  const [fotke] = useState(
    s.map((img) => img.default).map((image) => image.src)
  );
  const [idx] = useState(0);
  const [ratio, setRatio] = useState(null);
  const [imageSlides, setImageSlides] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const imageSlidesTemp = useRef();

  useEffect(() => {
    setImageSlides(imageSlidesTemp.current);
    setRatio(Math.floor(window.innerWidth / 310));
  }, []);

  function handleClick(direction) {
    if (direction.includes('left')) {
      idx > 0 ? idx-- : (idx = fotke.length - ratio);
    } else {
      idx < fotke.length - ratio ? idx++ : (idx = 0);
    }
    imageSlides.style.transform = `translate(-${idx * 310}px)`;
  }

  return (
    <>
      <div className={styles['photo-slider']}>
        <h2>Galerija slika</h2>
        <div className='straight-line'></div>
        <div className={styles['photos']}>
          <div ref={imageSlidesTemp} className={styles['img-slides']}>
            {fotke.map((fotka, i) => (
              <img
                key={i}
                src={fotka}
                alt={`kamaleon ${i}`}
                onClick={(e) => {
                  setModalImage(e.currentTarget.src);
                  setShowModal(true);
                }}
              />
            ))}
          </div>
          <div className={styles['btn-container']}>
            <button
              id={styles['left']}
              className={styles['btn-left']}
              onClick={(e) => handleClick(e.currentTarget.id)}
            >
              <FaArrowCircleLeft />
            </button>
            <button
              id={styles['right']}
              className={styles['btn-right']}
              onClick={(e) => handleClick(e.currentTarget.id)}
            >
              <FaArrowCircleRight />
            </button>
          </div>
        </div>
      </div>
      {showModal && <Modal img={modalImage} showModal={setShowModal} />}
    </>
  );
};

export default PhotoSlider;
