import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Wiki from './pages/Wiki';
import Gallery from './pages/Gallery';
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/wiki/*"
        element={<Wiki />}
      />
      <Route
        path="/gallery/*"
        element={<Gallery />}
      />
      <Route
        path="/login/"
        element={<Login />}
      />
    </Routes>
  );
};

export default App;
