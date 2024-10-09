import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { Farmar } from './pages/Farmar/Farmar';

function App() {
  return (
    
    <BrowserRouter>

      <Routes>
        <Route element={<Home/>} exact path='/' />
        <Route element={<Farmar/>} exact path='/farmar'/>

        
      </Routes>

    </BrowserRouter>


  );
}

export default App;
