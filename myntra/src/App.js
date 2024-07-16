import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Bag from './component/Bag';
import Login from './component/Login';
import ADDTOBAG from './component/ADDTOBAG';
import Checkout from './checkout/Checkout';
import PrivateRoute from './component/PrivateRoute'; // Adjust the import path as needed
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Bag />} />
          <Route path='/Login' element={<Login />} />
          {/* <Route path='/bag' element={<PrivateRoute element={ADDTOBAG} />} /> */}
          <Route path='/bag' element={<ADDTOBAG/>} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
