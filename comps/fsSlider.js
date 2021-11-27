import styles from '../styles/fs_slider.module.scss';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const FsSlider = ({ fsPhotos, controls = null }) => {
  const slidesContainer = useRef();
  const [slides, setSlides] = useState(null);
  useEffect(() => {
    const slidesTemp = [...slidesContainer.current.children];
    setSlides(slidesTemp);
  }, []);

  let idx = 0;
  function slide(dir) {
    if (dir === 'sliderBtnLeft') {
      idx > 0 ? idx-- : (idx = slides.length - 1);
      slides.forEach(
        (slide) => (slide.style.transform = `translate(-${idx * 100}%)`)
      );
    }
    if (dir === 'sliderBtnRight') {
      idx < slides.length - 1 ? idx++ : (idx = 0);
      slides.forEach(
        (slide) => (slide.style.transform = `translate(-${idx * 100}%)`)
      );
    }
  }

  return (
    <div className={styles.top}>
      <div className={styles.wrapper} id={styles.sala}>
        <div className={styles.fsSlider} ref={slidesContainer}>
          {fsPhotos.map((img, index) => (
            <div key={index} className={styles.slideContainer}>
              <img src={img.imgSrc} alt={img.title} />
              <div className={styles.title}>
                <h1>{img.title}</h1>
                <small>{img.text}</small>
              </div>
            </div>
          ))}
        </div>

        {controls && (
          <div className={styles.controls}>
            <button
              className={styles.sliderBtnLeft}
              onClick={() => slide('sliderBtnLeft')}
            >
              <FaArrowCircleLeft />
            </button>
            <button
              className={styles.sliderBtnRight}
              onClick={() => slide('sliderBtnRight')}
            >
              <FaArrowCircleRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FsSlider;
