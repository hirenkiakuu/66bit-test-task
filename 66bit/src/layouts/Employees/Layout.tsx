import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles['content']}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
