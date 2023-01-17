import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import InitialState from './components/InitialState/InitialState';
import './App.css';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<InitialState />} />
      </Routes>
    </div>
  );
}

export default App;
