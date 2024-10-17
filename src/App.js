import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Farmar from './pages/Farmar/Farmar';
import { Cow } from './pages/Cow/cow';
import { Calf } from './pages/Calf/calf';
import { Milk } from './pages/Milk/milk';
import { BeefFattening } from './pages/BeefFattening/beeffattening';
import { Vermicompost } from './pages/VermiCompost/vermicompost';
import { Report } from './pages/Report/report';

function App() {
  return (
    
    <BrowserRouter>

      <Routes>
        <Route element={<Home/>} exact path='/' />
        <Route element={<Farmar/>} exact path='/farmar'/>
        <Route element={<Cow/>} exact path='/cow'/>
        <Route element={<Calf/>} exact path='/calf'/>
        <Route element={<BeefFattening/>} exact path='/beeffattening'/>
        <Route element={<Milk/>} exact path='/milk'/>
        <Route element={<Vermicompost/>} exact path='/vermicompost'/>
        <Route element={<Report/>} exact path='/report'/>
      
      </Routes>

    </BrowserRouter>


  );
}

export default App;
