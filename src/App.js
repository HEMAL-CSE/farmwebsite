import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Farmar from './pages/Farmar/Farmar';
import { Cow } from './pages/Cow/cow';
import { Calf } from './pages/Calf/calf_birth';
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
import Calf_feed from './pages/Calf/calf_feef';
import CalfLabour from './pages/Calf/calf_labour';
import { Calf_selling } from './pages/Calf/Calf_selling';
import { Calf_customer } from './pages/Calf/calf_customer';
import { Calf_report } from './pages/Calf/calf_report';
import Calf_doctors from './pages/Calf/calf_doctors';
import CalfTreatment from './pages/Calf/calf_treatment';
import { Earthworm } from './pages/VermiCompost/earthworm';
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

    
    <BrowserRouter>

      <Routes>
        <Route element={<Home/>} exact path='/' />
        <Route element={<Farmar/>} exact path='/farmar'/>
        <Route element={<Cow/>} exact path='/cow'/>
        {/* <Route element={<CowLayout/>} exact path='/cow'/> */}
        <Route element={<BeefFatteningLayout/>} exact path='/beeffatteninglayout'/>
        <Route element={<Calf/>} exact path='/calf/birth_info'/>
        <Route element={<Calf_feed />} exact path='/calf/feed' />
        <Route element={<CalfLabour />} exact path='/calf/labour' />
        <Route element={<CalfLabour />} exact path='/calf/labour' />
        <Route element={<Calf_selling />} exact path='/calf/selling' />
        <Route element={<Calf_customer />} exact path='/calf/customer' />
        <Route element={<Calf_report />} exact path='/calf/report' />
        <Route element={<Calf_doctors />} exact path='/calf/doctors' />
        <Route element={<CalfTreatment />} exact path='/calf/treatment' />


        {/* <Route element={<BeefFattening/>} exact path='/beeffattening'/>n */}
        <Route element={<Milk/>} exact path='/milk'/>
        {/* <Route element={<Vermicompost/>} exact path='/vermicompost'/> */}
        <Route element={<Earthworm/>} exact path='/vermicompost/earthworm'/>
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
