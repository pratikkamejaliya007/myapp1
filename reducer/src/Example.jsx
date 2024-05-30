import React, { useReducer } from 'react';
import initialstate from './action';
import { increment, decrement } from './action';
import reducer from './reducer';

function Example() {
  const [state, dispatch] = useReducer(reducer, initialstate);

  function handleIncrement(id) {
    dispatch(increment(id));
  }

  function handleDecrement(id) {
    dispatch(decrement(id));
  }

  const total = state.prices.reduce((sum, item) => sum + item.value, 0);

  const styles = {
    container: {
      margin: '20px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      width: '300px'
    },
    item: {
      marginBottom: '10px',
    },
    button: {
      margin: '0 5px',
    },
    total: {
      fontWeight: 'bold',
      fontSize: '1.2em',
    },
  };

  return (
    <>
      {state.prices.map(item => (
        <div key={item.id} style={styles.container}>
          <div style={styles.item}>
            <h1>Price: ${item.prices}</h1>
            <h1>Amount: {item.value}</h1>
            <button style={styles.button} onClick={() => handleIncrement(item.id)}>+</button>
            <button style={styles.button} onClick={() => handleDecrement(item.id)}>-</button>
          </div>
        </div>
      ))}
      <h1 style={styles.total}>Total: {total}</h1>
    </>
  );
}

export default Example;
