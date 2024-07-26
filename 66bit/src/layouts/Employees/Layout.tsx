import cn from 'classnames';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../context/theme.context';
import { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import styles from './Layout.module.css';

const Layout = () => {
  const { theme } = useContext(ThemeContext);

  console.log(theme);

  useEffect(() => {
    document.documentElement.className =
      theme === 'dark' ? 'dark-theme' : 'default-theme';
  }, [theme]);

  return (
    <>
      <Header />
      <BreadCrumbs />
      <div
        className={cn(styles['content'], {
          'default-theme': theme === 'default',
          'dark-theme': theme === 'dark',
        })}
      >
        <div className={styles['content-inner']}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
