import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../context/theme.context';
import Header from '../../components/Header/Header';
import styles from './Layout.module.css';
import { useContext } from 'react';
import cn from 'classnames';

const Layout = () => {
  const { theme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <>
      <Header />
      <div
        className={cn(styles['content'], {
          [styles['default-theme']]: theme === 'default',
          [styles['dark-theme']]: theme === 'dark',
        })}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
