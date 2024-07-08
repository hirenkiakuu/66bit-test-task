import cn from 'classnames';
import { useState } from 'react';
import styles from './ToggleButton.module.css';

const ToggleButton = () => {
  const [isSun, setIsSun] = useState(false);

  const handleToggle = () => {
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
