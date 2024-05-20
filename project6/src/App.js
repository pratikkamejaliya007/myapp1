import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
// import { UserContextProvider } from './contexts/UserContext';

// import { RouterProvider , createBrowserRouter } from 'react-router-dom';

import Navbar from './pages/Navbar';

import Doctor from './pages/Doctor';
import Patient from './pages/Patient';
import Staff from './pages/Staff';
import Add from './pages/Add';
import Update from './pages/Update';

import Add_doctor from './pages/Add_doctor';
import  Add_staff from './pages/Add_staff'
import Add_paient from './pages/Add_paient';

function App() {

  // const router = createBrowserRouter([
  //   { path: "/", element: <Doctor /> },
  //   { path: "/patient", element: <Patient /> },
  //   { path: "/staff", element: <Staff /> },
  //   {
  //     path: "/add",
  //     element: <Add />,
  //     children: [
  //       { path: "adddoctor", element: <Add_doctor /> },
  //       { path: "addstaff", element: <Add_staff /> },
  //       { path: "addpatient", element: <Add_paient /> },
  //     ],
  //   },
  // ]);

  return (
    <>
      {/* <Navbar/>
      <h1>dsnj</h1>

       <UserContextProvider>
      <Navbar />
      <RouterProvider router={router} />
    </UserContextProvider> */}

    <Router>

      <Navbar />

      <Routes>
        <Route path='/' element={<Doctor/>} />
        <Route path='Staff' element={<Staff/>} />
        <Route path='Patient' element={<Patient/>} />
        <Route path='Add' element={<Add/>} >
            <Route path='Add_doctor' element={<Add_doctor/>} />
            <Route path='Add_staff' element={<Add_staff/>} />
            <Route path='Add_paient' element={<Add_paient/>} />
        </Route>
      </Routes>

    </Router>

    </>
  );
}

export default App;
