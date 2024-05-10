import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navbar from './pages/Navbar';

import Doctor from './pages/Doctor';
import Patient from './pages/Patient';
import Staff from './pages/Staff';
import Add from './pages/Add';

import Add_doctor from './pages/Add_doctor';
import Add_ataff from './pages/Add_ataff';
import Add_paient from './pages/Add_paient';

function App() {
  return (
    <>
    
<Router>
    
    <Navbar />

  <Routes>
    
    <Route path='/' element={<Doctor/>}/>
    <Route path='/patient' element={<Patient/>}/>
    <Route path='/staff' element={<Staff/>}/>
    <Route path='/add' element={<Add/>}>

      <Route path='doctor' element={<Add_doctor/>} />
      <Route path='staff' element={<Add_ataff/>} />
      <Route path='painet' element={<Add_paient/>} />

    </Route>

  </Routes>
</Router>
   
    
{/* <Add_doctor/> */}

    <Add_ataff/>

    </>
  );
}

export default App;
