import './App.css';

import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';

import Add_contact from './Add_contact';
import Display from './redux/Display';
import Show_Contact from './Show_Contact';
import Edit from './Edit';

function App() {
  return (
    <>

    <Router>
      <Routes>

          <Route path='/' element={<Display/>} />
          <Route path='/add' element={<Add_contact/>} />
          <Route path='show/:id' element={<Show_Contact/>} />
          <Route path='edit/:id' element={<Edit/>} />

      </Routes>
    </Router>

    </>
  );
}

export default App;
