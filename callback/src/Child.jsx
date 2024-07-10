import React, { memo } from 'react';

function Child({ cou, handleInc }) {
  console.log('child');

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-4">
      <h3 className="text-2xl font-semibold mb-2">Count: {cou}</h3>
      <button
        onClick={handleInc}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Increment
      </button>
    </div>
  );
}

export default memo(Child);
