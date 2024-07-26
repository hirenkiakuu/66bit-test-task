import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/theme.context';
import styles from './ToggleButton.module.css';

const ToggleButton = () => {
  const [isSun, setIsSun] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'default' : 'dark');
    console.log(theme);
    setIsSun(!isSun); // Переключение темы
  };

  return (
    <>
      <input
        type="checkbox"
        className={styles['checkbox']}
        id="checkbox"
        onClick={handleToggle}
      ></input>
      <label htmlFor="checkbox" className={styles['checkbox-label']}>
        <span className={styles['ball']}>
          <img
            src={isSun ? '/sun.svg' : '/moon.svg'}
            alt={isSun ? 'Солнце' : 'Луна'}
            className={styles['theme-image']}
          />
        </span>
      </label>
    </>
  );
};

export default ToggleButton;
