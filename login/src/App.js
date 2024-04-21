import './App.css';
import Sign from './Sign';

import Login from './Login';

// import Add from './Add';


function App() {

  
  const orgData = [

    {
    
    id: 101,
    
    name: 'Abacavir',
    
    quantity: 25,
    
    price: 150,
    
    expiry: 2022
    
    },
    
    {
    
    id: 102,
    
    name: 'Eltrombopag',
    
    quantity: 90,
    
    price: 550,
    
    expiry: 2021
    
    },
    
    {
    
    id: 103,
    
    name: 'Meloxicam',
    
    quantity: 85,
    
    price: 450,
    
    expiry: 2025
    
    },
    
    {
    
    id: 104,
    
    name: 'Allopurinol',
    
    quantity: 50,
    
    price: 600,
    
    expiry: 2023
    
    },
    
    {
    
    id: 105,
    
    name: 'Phenytoin',
    
    quantity: 63,
    
    price: 250,
    
    expiry: 2021
    
    },
    
    ]    


  return (
    <div className="App">
      
    <Login data={orgData}/>

    <Sign/>

    {/* <Add /> */}

    </div>
  );
}

export default App;
