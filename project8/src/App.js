import './App.css';
import { add ,decrement } from './redux/action';
import { useSelector,useDispatch } from 'react-redux';

function App() {

  const count=useSelector(state => state.count)

  const dispath=useDispatch()


  return (
    <>

    <h1>Counter App</h1>

    <h2>Count: {count}</h2>

    <button onClick={()=>{dispath(add())}}>plus</button>
    <button onClick={()=>{dispath(decrement())}}>minus</button>

    </>
  );
}

export default App;
