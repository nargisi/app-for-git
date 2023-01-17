import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './App.css';
import EmptyState from './components/EmptyState/EmptyState';
import InitialPage from './components/InitialPage/InitialPage';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/not" element={<EmptyState />} />
      </Routes>
    </div>
  );
}

export default App;
