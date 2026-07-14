import { forwardRef } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import type { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({ isValid = true, className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(styles['input'], className, {
        [styles['invalid']]: isValid,
      })}
      {...props}
    />
  );
});

export default Search;
