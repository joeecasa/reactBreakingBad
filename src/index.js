import React from 'react';
import ReactDOM from 'react-dom/client';


import FetchWithCustomHooks from './components/FetchWithCustomHooks';
import FetchWithCustomHooksCharacters from './components/FetchWithCustomCharacters';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FetchWithCustomHooks />
    <FetchWithCustomHooksCharacters />
  </React.StrictMode>
);

