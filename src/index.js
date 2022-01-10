import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/useState/CounterApp';
// import { SingleForm } from './components/useEffect/SingleForm';
import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook'; 

ReactDOM.render(
  <React.StrictMode>
    <FormWithCustomHook />
  </React.StrictMode>,
  document.getElementById('root')
);

