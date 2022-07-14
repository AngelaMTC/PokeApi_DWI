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
import { I18nextProvider } from 'react-i18next';
import i18n from './config/localization/i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
        {/* <App /> */}
    <I18nextProvider i18n={i18n}>
        <Routes>
          {/* <GlobalProvider> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/Pokemones" element={<App />}></Route>
          <Route path="/191243" element={<About />}></Route>
          {/* </GlobalProvider> */}
        </Routes>
    </I18nextProvider>
      </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
