import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HookApp } from './HookApp';
import { CounterApp } from './components/useState/CounterApp'

ReactDOM.render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
  document.getElementById('root')
);

