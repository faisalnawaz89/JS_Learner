import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import ModalBox from './ModalBox/ModalBox';
import Bill from './Bill';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ModalBox title="Modal Box 1"/>
    <ModalBox title="Modal Box 2"/>
    <ModalBox title="Modal Box 3"/>
    <ModalBox title="Modal Box 3"/> */}
    <Bill/>
  </React.StrictMode>
);

