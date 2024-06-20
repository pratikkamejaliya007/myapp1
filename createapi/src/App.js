import './App.css';
import Add_post from './Add_post';
import Display from './Display';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Navbar from './Navbar';

function App() {
  return (
      
    <>

      <Router>

        <Navbar/>

        <Routes>

        <Route path='/' element={<Display/>} />

        <Route path='/add' element={<Add_post />} />

        </Routes>

      </Router>
    
      {/* <Add_post/>
      <Display/> */}

    </>
      
  );
}

export default App;
