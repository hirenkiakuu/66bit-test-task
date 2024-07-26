import cn from 'classnames';
import { ButtonProps } from './Button.interface';
import styles from './Button.module.css';

const Button = ({ appearance, onClick, children }: ButtonProps) => {
  return (
    <>
      <button
        className={cn(styles['button'], {
          [styles['big']]: appearance === 'big',
          [styles['small']]: appearance === 'small',
        })}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
