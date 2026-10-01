import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router';

import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from './App.jsx';
import Contact from './components/Contact/Contact.jsx';
import MainBlogs from './components/MainBlogs/MainBlogs.jsx';
import MainAbout from './components/About/MainAbout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<MainBlogs />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-2xl">404 - Page not found</div>} />
      </Routes>
    </HashRouter>
  </StrictMode>
);