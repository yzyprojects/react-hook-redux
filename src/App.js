// import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PageA from './pages/page-a/index.jsx';
import PageB from './pages/page-b/index.jsx';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index  path="/" element={ <PageA />  } />
            <Route  path="/page-a" element={ <PageA /> } />
            <Route  path="/page-b" element={ <PageB /> } />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
