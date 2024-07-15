import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Bag from './component/Bag';
import Login from './component/Login';
import { useSelector } from 'react-redux';
import ADDTOBAG from './component/ADDTOBAG';

import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'

function App() {

    const log=useSelector(state => state.log)

  return (
    <>

    <Router>
      <Header/>
      {/* <ADDTOBAG/> */}
      
        <Routes>

          <Route path='/' element={<Bag />} />

          <Route path='/Login' element={<Login />} />

          <Route path='/bag' element={<ADDTOBAG/>} /> :            

        </Routes>

      <Footer/>      
    </Router>
    </>
  );
}

export default App;
