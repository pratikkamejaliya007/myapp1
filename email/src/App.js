import './App.css';
import Email_signup from './Email_signup';
import Home from './Home';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Public from './public/public'

function App() {


  const selector = useSelector((state) => state.privet.value)

  return (
    <>      

      <Router>

        <Routes>

          {selector ? <Route path='/' element={<Home/>} /> 
            :
            <Route path='/' element={<Public />} /> }

            <Route path='/login' element={<Email_signup/>} />

        </Routes>

      </Router>

    </>
  );
}

export default App;
