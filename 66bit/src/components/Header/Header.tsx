import cn from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme.context';
import ToggleButton from '../ToggleButton/ToggleButton';
import styles from './Header.module.css';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <header
        className={cn(styles['wrapper'], {
          [styles['default-theme']]: theme === 'default',
          [styles['dark-theme']]: theme === 'dark',
        })}
      >
        <div className={styles['wrapper-inner']}>
          <img
            className={styles['header-logo']}
            src="/66bit-logo.svg"
            alt="логотип"
          />
          <div className={styles['contact-info-theme-toggle-container']}>
            <a href="tel:+73432908476">+7 343 290 84 76</a>
            <a href="mailto:info@66bit.ru">info@66bit.ru</a>
            <ToggleButton />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
