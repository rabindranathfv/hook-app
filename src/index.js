import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/useState/CounterApp';
// import { SingleForm } from './components/useEffect/SingleForm';
// import { FormWithCustomHook } from './components/useEffect/FormWithCustomHook'; 
// import { MultpleCustomHook } from './components/samples/MultpleCustomHook';
// import { FocusScreen } from './components/useRef/FocusScreen';
// import { Layout } from './components/useLayaout/Layout';
// import { MemoHook } from './components/memo/MemoHook';
// import { UseCallback } from './components/useCallback/UseCallback';
// import { TodoApp } from './components/useReducer/TodoApp';
import { MainApp } from './components/useContext/MainApp';

ReactDOM.render(
    <MainApp />,
  document.getElementById('root')
);

