import styles from '../styles/Navigation.module.scss';
import Link from 'next/link';
import { useGlobalContext } from '../context';
const Dropdown = () => {
  const {
    data: { links },
  } = useGlobalContext();
  return (
    <div className={styles.dropdown}>
      {links.map(
        (link) =>
          link.sublinks &&
          link.sublinks.map((sublink, idx) => (
            <Link key={idx} href={`/ketering/#${sublink.hyperlink}`}>
              <a>{sublink.link}</a>
            </Link>
          ))
      )}
    </div>
  );
};

export default Dropdown;
