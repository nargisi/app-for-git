import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './App.css';
import EmptyState from './components/EmptyState/EmptyState';
import InitialPage from './components/InitialPage/InitialPage';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<InitialPage />} />
        {/* <Route path="/not" element={<EmptyState />} /> */}
        <Route path="/repos" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
