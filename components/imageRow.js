/* eslint-disable @next/next/no-img-element */
import resimgs from '../styles/resp_img.module.css';
const Row = ({
  image = null,
  image1 = null,
  image2 = null,
  image3 = null,
  column = null,
}) => {
  return (
    <div className={resimgs.row}>
      {column && (
        <>
          <div className={resimgs.column}>
            <img src={image1} alt='' />
            {image3 && <img src={image3} alt='' />}
          </div>
          <div className={resimgs.column}>
            <img src={image2} alt='' />
          </div>
        </>
      )}

      <img
        className={resimgs.gridImg}
        src={image}
        alt=''
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default Row;
