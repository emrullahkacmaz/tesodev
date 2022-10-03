import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,

} from 'react-router-dom';
  
import '../node_modules/bootstrap/dist/css/bootstrap.css'
 
import MainPages from './Pages/MainPage';
import ShowMoreList from './Pages/ShowMoreList';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPages/>} />
        <Route path="/list" element={<ShowMoreList />} />
        

    </Routes>
  </BrowserRouter>
  );
}

export default App;
