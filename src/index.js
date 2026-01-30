import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './main.css';

import NavBar from './NavBar';
import Plans from './Plans';
import About from './About';
import Contact from './Contect';
import Home from './Home';
import ProductDetail from './ProductDetail';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TeamProvider } from "./TeamContext";
import Team from './Team';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <TeamProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Plans" element={<Plans />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/team" element={<Team />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </TeamProvider>

  </React.StrictMode>
);

reportWebVitals();
