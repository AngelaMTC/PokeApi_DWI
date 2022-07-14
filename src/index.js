import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Componentes:
import App from './App';
import Home from './components/Home';
import About from './components/About';

//Routes:
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// GlobalProvider:
// import { GlobalProvider } from './context/global/global.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    {/* <App /> */}
    <Routes>
      {/* <GlobalProvider> */}
    <Route path="/" element={<Home />}></Route>
    <Route path="/Pokemones" element={<App />}></Route>
    <Route path="/About" element={<About />}></Route>
    {/* </GlobalProvider> */}
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
