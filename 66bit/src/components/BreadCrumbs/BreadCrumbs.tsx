import { Link, useLocation } from 'react-router-dom';
import styles from './BreadCrumbs.module.css';

const BreadCrumbs = () => {
  const location = useLocation();
  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;
      console.log(currentLink);
      console.log(1);
      return (
        <div>
          <Link className={styles['crumb']} to={currentLink}>
            {crumb}
          </Link>
        </div>
      );
    });

  return (
    <>
      <nav>
        <div className={styles['crumbs-container']}>
          <div>
            <Link className={styles['crumb']} to="/employees">
              Главная
            </Link>
          </div>
          {crumbs}
        </div>
      </nav>
    </>
  );
};

export default BreadCrumbs;
