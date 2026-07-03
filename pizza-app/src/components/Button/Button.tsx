import styles from './Button.module.css';
import type { ButtonProps } from './Button.props';
import cn from 'classnames';

function Button({ children, className, onClick, ...props }: ButtonProps) {
  return (
    <button className={cn(styles['button'], styles['accent'], className)} {...props} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
