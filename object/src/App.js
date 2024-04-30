import './App.css';
import Object from './Object';

function App() {

  const array = 
    [
    {
      id : 1,
      name : "akshay",
      position : "full stack",
      salary : 15000
    },

    {
      id : 2,
      name : "pratik",
      position : "full stack",
      salary : 17000
    },
    {
      id : 3,
      name : "vivek",
      position : "full stack",
      salary : 15500
    },
    {
      id : 4,
      name : "nikul",
      position : "graphic desin",
      salary : 15000
    }
  ]


  return (
<>
    <Object array={array}/>
</>
  );
}

export default App;
