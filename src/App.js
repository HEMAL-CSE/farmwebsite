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
import { Calf_labour_payment } from './pages/Calf/calf_labour_payment';
import CowDelivery from './pages/Cow/CowDelivery';
import CowFeed from './pages/Cow/CowFeed';
import CowLabour from './pages/Cow/CowLabour';
import CowLabourPayment from './pages/Cow/CowLabourPayment';
import CowDoctors from './pages/Cow/CowDoctors';
import CowTreatment from './pages/Cow/CowTreatment';
import CowSelling from './pages/Cow/CowSelling';
import CowVaccines from './pages/Cow/CowVaccines';
import CowMedicines from './pages/Cow/CowMedicines';
import CowFeeding from './pages/Cow/CowFeeding';
import EarthwormProd from './pages/VermiCompost/EarthwormProd';
import CowdungSeller from './pages/VermiCompost/CowdungSeller';
import CowdungBuyer from './pages/VermiCompost/CowdungBuyer';
import CowdungLabour from './pages/VermiCompost/CowdungLabour';
import CowdungLabourPayment from './pages/VermiCompost/CowdungLabourPayment';
import CowdungOthers from './pages/VermiCompost/CowdungOthers';
import CowdungOthersPayment from './pages/VermiCompost/CowdungOthersPayment';
import EarthwormSelling from './pages/VermiCompost/EarthwormSelling';
import EarthwormSellers from './pages/VermiCompost/EarthwormSellers';
import EarthwormPurchase from './pages/VermiCompost/EarthwormPurchase';
import EarthwormLabour from './pages/VermiCompost/EarthwormLabour';
import EarthwormLabourPayment from './pages/VermiCompost/EarthwormLabourPayment';
import EarthwormOthers from './pages/VermiCompost/EarthwormOthers';
import EarthwomOthersPayment from './pages/VermiCompost/EarthwomOthersPayment';
import VermicompostCustomers from './pages/VermiCompost/VermicompostCustomers';
import VermicompostSellingInfo from './pages/VermiCompost/VermicompostSellingInfo';
import VermicompostProduction from './pages/VermiCompost/VermicompostProduction';
import MilkPurchase from './pages/Milk/MilkPurchase';
import MilkProduction from './pages/Milk/MilkProduction';
import MilkFeed from './pages/Milk/MilkFeed';
import MilkLabour from './pages/Milk/MilkLabour';
import MilkLabourPayment from './pages/Milk/MilkLabourPayment';
import MilkOthers from './pages/Milk/MilkOthers';
import MilkOthersPayment from './pages/Milk/MilkOthersPayment';
import MilkDoctors from './pages/Milk/MilkDoctors';
import MilkTreatment from './pages/Milk/MilkTreatment';
import MilkVaccines from './pages/Milk/MilkVaccines';
import MilkMedicines from './pages/Milk/MilkMedicines';
import MilkFeeding from './pages/Milk/MilkFeeding';
import MilkCustomer from './pages/Milk/MilkCustomer';
import BeefPurchasse from './pages/BeefFattening/BeefPurchasse';
import BeefFeed from './pages/BeefFattening/BeefFeed';
import BeefLabour from './pages/BeefFattening/BeefLabour';
import BeefLabourPayment from './pages/BeefFattening/BeefLabourPayment';
import BeefSlaughter from './pages/BeefFattening/BeefSlaughter';
import BeefCustomers from './pages/BeefFattening/BeefCustomers';
import BeefMedicines from './pages/BeefFattening/BeefMedicines';
import BeefFeeding from './pages/BeefFattening/BeefFeeding';
import BeefOthers from './pages/BeefFattening/BeefOthers';
import BeefOthersPayment from './pages/BeefFattening/BeefOthersPayment';
import BeefDoctors from './pages/BeefFattening/BeefDoctors';
import BeefTreatment from './pages/BeefFattening/BeefTreatment';
import BeefVaccines from './pages/BeefFattening/BeefVaccines';
import Doctor from './pages/Doctor/Doctor';
import DoctorCow from './pages/Doctor/Cow/DoctorCow';
import 'react-toastify/dist/ReactToastify.css';
import DoctorBeef from './pages/Doctor/DoctorBeef';
import DoctorDairy from './pages/Doctor/DoctorDairy';
import DoctorCalf from './pages/Doctor/DoctorCalf';
import CowOthers from './pages/Cow/CowOthers';
import CowOthersPayment from './pages/Cow/CowOthersPayment';
import CalfOthers from './pages/Calf/CalfOthers';
import CalfOthersPayment from './pages/Calf/CalfOthersPayment';
import { BioGas, BioGasCustomer } from './pages/Biogas/BioGasCustomer';
import BiogasLabour from './pages/Biogas/BiogasLabour';
import BiogasLabourPayment from './pages/Biogas/BiogasLabourPayment';
import BiogasOthers from './pages/Biogas/BiogasOthers';
import BiogasOthersPayment from './pages/Biogas/BiogasOthersPayment';
import BiogasSelling from './pages/Biogas/BiogasSelling';
import BiogasEnvironmentInfo from './pages/Biogas/BiogasEnvironmentInfo';
import BioGasLayout from './pages/Biogas/BiogasLayout';


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

    <BrowserRouter>

      <Routes>
        <Route element={<Home/>} exact path='/' />
        <Route element={<Farmar/>} exact path='/farmar'/>
        <Route element={<Cow/>} exact path='/cow'/>
        {/* <Route element={<CowLayout/>} exact path='/cow'/> */}
        <Route element={<Calf/>} exact path='/calf/birth_info'/>
        <Route element={<Calf_feed />} exact path='/calf/feed' />
        <Route element={<CalfLabour />} exact path='/calf/labour' />
        <Route element={<CalfLabour />} exact path='/calf/labour' />
        <Route element={<Calf_labour_payment />} exact path='/calf/labour_payment' />
        <Route element={<Calf_selling />} exact path='/calf/selling' />
        <Route element={<Calf_customer />} exact path='/calf/customer' />
        <Route element={<Calf_report />} exact path='/calf/report' />
        <Route element={<Calf_doctors />} exact path='/calf/doctors' />
        <Route element={<CalfTreatment />} exact path='/calf/treatment' />
        <Route element={<CalfOthers />} exact path='/calf/others' />
        <Route element={<CalfOthersPayment />} exact path='/calf/others_payment' />
        <Route element={<CalfLabour />} exact path='/calf/labour' />



        {/* <Route element={<BeefFattening/>} exact path='/beeffattening'/>n */}
        <Route element={<Milk/>} exact path='/milk'/>
        <Route element={<MilkPurchase />} exact path='/milk/purchase' />
        <Route element={<MilkProduction />} exact path='/milk/production' />
        <Route element={<MilkFeed />} exact path='/milk/feed' />
        <Route element={<MilkLabour />} exact path='/milk/labour' />
        <Route element={<MilkLabourPayment />} exact path='/milk/labour_payment' />
        <Route element={<MilkOthers />} exact path='/milk/others' />
        <Route element={<MilkOthersPayment />} exact path='/milk/others_payment' />
        <Route element={<MilkDoctors />} exact path='/milk/doctors' />
        <Route element={<MilkTreatment />} exact path='/milk/treatment' />
        <Route element={<MilkVaccines />} exact path='/milk/vaccines' />
        <Route element={<MilkMedicines />} exact path='/milk/medicines' />
        <Route element={<MilkFeeding />} exact path='/milk/feeding' />
        <Route element={<MilkCustomer />} exact path='/milk/customers' />
        
        {/* <Route element={<Vermicompost/>} exact path='/vermicompost'/> */}
        
        <Route element={<VermicompostCustomers/>} exact path='/vermicompost/customers'/>
        <Route element={<VermicompostSellingInfo/>} exact path='/vermicompost/selling_info'/>
        <Route element={<VermicompostProduction/>} exact path='/vermicompost/prod/:id'/>
        
        <Route element={<EarthwormProd/>} exact path='/vermicompost/earthworm_prod'/>
        <Route element={<EarthwormSelling/>} exact path='/vermicompost/earthworm_selling'/>
        <Route element={<EarthwormSellers/>} exact path='/vermicompost/earthworm_seller'/>
        <Route element={<EarthwormPurchase/>} exact path='/vermicompost/earthworm_purchase'/>
        <Route element={<EarthwormLabour/>} exact path='/vermicompost/earthworm_labour'/>
        <Route element={<EarthwormLabourPayment/>} exact path='/vermicompost/earthworm_labour_payment'/>
        <Route element={<EarthwormOthers/>} exact path='/vermicompost/earthworm_others'/>
        <Route element={<EarthwomOthersPayment/>} exact path='/vermicompost/earthworm_others_payment'/>
        
        <Route element={<CowdungSeller/>} exact path='/vermicompost/cowdung_seller'/>
        <Route element={<CowdungBuyer/>} exact path='/vermicompost/cowdung_buyer'/>
        <Route element={<CowdungLabour/>} exact path='/vermicompost/labour'/>
        <Route element={<CowdungLabourPayment/>} exact path='/vermicompost/labour_payment'/>
        <Route element={<CowdungOthers/>} exact path='/vermicompost/others'/>
        <Route element={<CowdungOthersPayment/>} exact path='/vermicompost/others_payment'/>
        
      
        <Route element={<Report/>} exact path='/report'/>

        <Route element={<Cowdetails/>} exact path='/cowdetails'/>
        <Route element={<CowDelivery/>} exact path='/cow/delivery'/>
        <Route element={<CowFeed/>} exact path='/cow/feed'/>
        <Route element={<CowLabour/>} exact path='/cow/labour'/>
        <Route element={<CowLabourPayment/>} exact path='/cow/labour_payment'/>
        <Route element={<CowDoctors/>} exact path='/cow/doctors'/>
        <Route element={<CowTreatment/>} exact path='/cow/treatment'/>
        <Route element={<CowSelling/>} exact path='/cow/selling'/>
        <Route element={<CowVaccines/>} exact path='/cow/vaccines'/>
        <Route element={<CowMedicines/>} exact path='/cow/medicine'/>
        <Route element={<CowFeeding/>} exact path='/cow/feeding'/>
        <Route element={<CowOthers/>} exact path='/cow/others'/>
        <Route element={<CowOthersPayment/>} exact path='/cow/others_payment'/>

        <Route element={<BeefPurchasse />} exact path='/beef/purchase' />
        <Route element={<BeefVaccines />} exact path='/beef/vaccines' />
        <Route element={<BeefFeed />} exact path='/beef/feed' />
        <Route element={<BeefLabour />} exact path='/beef/labour' />
        <Route element={<BeefLabourPayment />} exact path='/beef/labour_payment' />
        <Route element={<BeefOthers />} exact path='/beef/others' />
        <Route element={<BeefOthersPayment />} exact path='/beef/others_payment' />
        <Route element={<BeefDoctors />} exact path='/beef/doctors' />
        <Route element={<BeefTreatment />} exact path='/beef/treatment' />
        <Route element={<BeefSlaughter />} exact path='/beef/slaughter' />
        <Route element={<BeefCustomers />} exact path='/beef/customer' />
        <Route element={<BeefMedicines />} exact path='/beef/medicine' />
        <Route element={<BeefFeeding />} exact path='/beef/feeding' />
        
        <Route element={<Calfdetails/>} exact path='/calfdetails'/>
        <Route element={<Login />} exact path='/login'/>
        <Route element={<Register />} exact path='/register' />

        <Route element={<Doctor />} exact path='/doctor' />
        <Route element={<DoctorCow />} exact path='/doctor/cow' />
        <Route element={<DoctorBeef />} exact path='/doctor/beef' />
        <Route element={<DoctorDairy />} exact path='/doctor/milk' />
        <Route element={<DoctorCalf />} exact path='/doctor/calf' />

        {/* BioGas Section Start */}
        <Route element={<BioGasLayout />} exact path='/biogas/'>
        <Route element={<BioGasCustomer/>} exact path='/biogas/biogas_customer'/>
        <Route element={<BiogasLabour />} exact path='/biogas/labour' />
        <Route element={<BiogasLabourPayment />} exact path='/biogas/labour_payment' />
        <Route element={<BiogasOthers />} exact path='/biogas/others' />
        <Route element={<BiogasOthersPayment />} exact path='/biogas/others_payment' />
        <Route element={<BiogasSelling />} exact path='/biogas/income' />
        <Route element={<BiogasEnvironmentInfo />} exact path='/biogas/environmental_info' />
        </Route>
        


      
      </Routes>

    </BrowserRouter>

</LocalizationProvider>
  );
}

export default App;
