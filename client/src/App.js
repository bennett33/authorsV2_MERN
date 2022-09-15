import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update.js';
function App() {
    return (
    <div className="App">
      <Routes>
            <Route path="/" element={<Navigate to="/authors" replace />} />
            <Route element={<Main/>} path="/authors/" />
            <Route element={<Detail/>} path="/authors/:id" />
        ... <Route element={<Update/>} path="/authors/:id/edit"/>
      </Routes>                         
    </div>
    );
}
export default App;

