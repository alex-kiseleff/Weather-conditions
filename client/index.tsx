/**
 * @component - корневой компонент приложения.
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import './styles/index.scss';

const container = document.querySelector('#root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);
