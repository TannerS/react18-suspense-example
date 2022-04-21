import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
// import App from './App';
import SuspenseApp from "./SuspenseApp";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/*<App />*/}
    <SuspenseApp />
  </React.StrictMode>
);
