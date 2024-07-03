import styles from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles['wrapper']}>
        <div className={styles['wrapper-inner']}>
          <img
            className={styles['header-logo']}
            src="/66bit-logo.svg"
            alt="логотип"
          />
          <div className={styles['contact-info-theme-toggle-container']}>
            <a href="tel:+73432908476">+7 343 290 84 76</a>
            <a href="mailto:info@66bit.ru">info@66bit.ru</a>
            <button>Смена темы</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
