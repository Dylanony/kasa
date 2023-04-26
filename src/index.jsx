import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Error from './pages/error'
import Propos from './pages/propos'
import Logement from './pages/logement'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/propos' element={<Propos />} />
        <Route path='/logement/:id' element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)