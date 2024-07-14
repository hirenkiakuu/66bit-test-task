import cn from 'classnames';
import { InputProps } from './InputProps.interface';
import styles from './Input.module.css';

const Input = ({ className, ...props }: InputProps) => {
  return (
    <>
      <input {...props} className={cn(styles['input'], className)} />
    </>
  );
};

export default Input;
