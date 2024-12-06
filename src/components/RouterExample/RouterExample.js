import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';

const RouterExample = () => {
  return (
    <BrowserRouter>
      <div>
        <nav style={{ marginBottom: '20px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'inline', marginRight: '10px' }}>
              <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>
                Home
              </NavLink>
            </li>
            <li style={{ display: 'inline' }}>
              <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouterExample;
