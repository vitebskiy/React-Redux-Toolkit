import styles from './Button.module.css';
import type { ButtonProps } from './Button.props';
import cn from 'classnames';

function Button({ children, className, appearence = 'small', onClick, ...props }: ButtonProps) {
  return (
    <button className={cn(styles['button'], styles['accent'], className, {
      [styles['small']] : appearence === 'small',
      [styles['big']] : appearence === 'big',
    })} {...props} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
