import React, { useCallback, useState } from 'react';
import Child from './Child';
import Child_2 from './Child_2';

function Parents() {
  const [count, setCount] = useState(0);
  const [cou, setCou] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  const handleInc = useCallback(() => {
    setCou(cou + 1);
  }, [cou]);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Count: {count}</h1>
      <div className="mb-6">
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mx-2"
        >
          +
        </button>
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mx-2"
        >
          -
        </button>
      </div>
      <Child cou={cou} handleInc={handleInc} />
      <Child_2 />
    </div>
  );
}

export default Parents;
