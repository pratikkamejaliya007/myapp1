import './App.css';
import Email_signup from './Email_signup';
import Home from './Home';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { useState } from 'react';

function App() {

  const [val,setVal]=useState(false)

  return (
    <>      

      <Router>

        <Routes>

            {val ? <Route path='/' element={<Home/>} /> 
            :
            <Route path='/' element={<div>
              hello
            </div>} /> }

            <Route path='/login' element={<Email_signup/>} />

        </Routes>

      </Router>

    </>
  );
}

export default App;
