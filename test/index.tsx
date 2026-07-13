// IconButton.props.ts
// **Описание**: Объявите интерфейс пропсов для компонента IconButton в отдельном файле.
//
// **Ограничения**:
// - Интерфейс должен расширять React.ButtonHTMLAttributes<HTMLButtonElement>
// - Пропы icon и variant — обязательные
// - Проп variant типизировать как литеральный union 'primary' | 'secondary'
// - Запрещено использовать any

import type React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  variant: 'primary' | 'secondary';
  children?: React.ReactNode;
}

// Ваш код здесь

// IconButton.tsx
// **Описание**: Создайте функциональный компонент IconButton, использующий интерфейс из IconButton.props.ts.
//
// **Входные данные**: Пропсы компонента IconButton:
// - icon — строка (обязательный)
// - variant — 'primary' | 'secondary' (обязательный)
// - children — React.ReactNode (необязательный)
// - Любые стандартные HTML-атрибуты элемента <button>
//
// **Выходные данные**: Компонент рендерит <button> со следующей структурой:
// - Атрибут data-variant равен значению пропа variant
// - Внутри кнопки: <span> с содержимым icon, затем текст children (если передан)
// - Все остальные переданные HTML-атрибуты применяются к корневому <button>
//
// **Ограничения**:
// - Использовать деструктуризацию: явно извлечь icon, variant, children, остальные пропы через rest-оператор
// - Компонент экспортировать как именованный экспорт
// - Запрещено использовать any

import React from 'react';
import { IconButtonProps } from './IconButton.props';

export function IconButton({ icon, variant, children, ...props }: IconButtonProps) {
  return (
    <button data-variant={variant} {...props}>
      <span>{icon}</span>
      {children}
    </button>
  );
}

// Ваш код здесь
