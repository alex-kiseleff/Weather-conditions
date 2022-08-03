/**
 * @component - корневой компонент приложения, с подключением
 * файлов с глобальными стилями, шрифтами и переменными.
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import './styles/index.scss';

const container = document.querySelector('#root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);
