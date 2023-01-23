import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './App.css';
import InitialPage from './components/InitialPage/InitialPage';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<InitialPage />} />
      </Routes>
    </div>
  );
}

export default App;
