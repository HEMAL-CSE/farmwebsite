import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Farmar from './pages/Farmar/Farmar';
import { Cow } from './pages/Cow/cow';
import { Calf } from './pages/Calf/calf';
import { Milk } from './pages/Milk/milk';
import { Vermicompost } from './pages/VermiCompost/vermicompost';
import { Report } from './pages/Report/report';

import { Cowdetails } from './pages/Cow/cowdetails';

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { Calfdetails } from './pages/Calf/calfdetails';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { BeefFatteningLayout } from './pages/BeefFattening/beeffatteninglayout';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

    
    <BrowserRouter>

      <Routes>
        <Route element={<Home/>} exact path='/' />
        <Route element={<Farmar/>} exact path='/farmar'/>
        <Route element={<Cow/>} exact path='/cow'/>
        <Route element={<Calf/>} exact path='/calf'/>
        <Route element={<BeefFatteningLayout/>} exact path='/beeffatteninglayout'/>
        <Route element={<Milk/>} exact path='/milk'/>
        <Route element={<Vermicompost/>} exact path='/vermicompost'/>
        <Route element={<Report/>} exact path='/report'/>

        <Route element={<Cowdetails/>} exact path='/cowdetails'/>
        <Route element={<Calfdetails/>} exact path='/calfdetails'/>
        <Route element={<Login />} exact path='/login'/>
        <Route element={<Register />} exact path='/register' />

      
      </Routes>

    </BrowserRouter>

</LocalizationProvider>
  );
}

export default App;
