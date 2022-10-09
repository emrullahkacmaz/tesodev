import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,

} from 'react-router-dom';
  
import '../node_modules/bootstrap/dist/css/bootstrap.css'
 
 
 
import HomePages from './Pages/homePage';
import FilteredList from './Pages/filteredList';
import FormAdd from './Pages/formAdd';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePages/>} />
        <Route path="/lists" element={<FilteredList />} />
        <Route path="/forms" element={<FormAdd />} />
        

    </Routes>
  </BrowserRouter>
  );
}

export default App;
