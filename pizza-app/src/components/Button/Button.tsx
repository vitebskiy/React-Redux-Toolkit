import '.Button.module.css';
import type { ButtonProps } from './Button.props';
import cn from 'classnames';

function Button({ children, className, onClick, ...props }: ButtonProps) {
  return (
    <button className={cn('button accent', className)} {...props} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
