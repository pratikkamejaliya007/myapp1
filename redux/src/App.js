import './App.css';
import Count from './Count';
import { increment, decrement } from './redux/actions';
import { useSelector ,useDispatch } from 'react-redux';

function App() {
  
  const count=useSelector(state => state.count)

  const disptatch=useDispatch()
  
  return (
    <>

    <Count/>

      <h1>Counter App</h1>

      <h2>Count : {count}</h2>

      <button onClick={()=>disptatch(increment())}>+</button>

      <button onClick={()=>disptatch(decrement())}>-</button>

    </>
  );
}

export default App;
