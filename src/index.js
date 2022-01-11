import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/useState/CounterApp';
// import { SingleForm } from './components/useEffect/SingleForm';
// import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook'; 
import { MultpleCustomHook } from './components/samples/MultpleCustomHook';

ReactDOM.render(
  <React.StrictMode>
    <MultpleCustomHook />
  </React.StrictMode>,
  document.getElementById('root')
);

