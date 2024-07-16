import React, { useState } from 'react';

const Addresh = () => {
  const [addressType, setAddressType] = useState('Home');
  const [isDefault, setIsDefault] = useState(false);

  const handleAddressTypeChange = (type) => {
    setAddressType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white border border-gray-200 rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-4">CONTACT DETAILS</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="mobile">Mobile No*</label>
          <input
            type="text"
            id="mobile"
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <h2 className="text-lg font-semibold mb-4">ADDRESS</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="pinCode">Pin Code*</label>
          <input
            type="text"
            id="pinCode"
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="address">Address (House No, Building, Street, Area)*</label>
          <input
            type="text"
            id="address"
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="locality">Locality / Town*</label>
          <input
            type="text"
            id="locality"
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <label className="block text-gray-700 mb-1" htmlFor="city">City / District*</label>
            <input
              type="text"
              id="city"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 mb-1" htmlFor="state">State*</label>
            <input
              type="text"
              id="state"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-4">SAVE ADDRESS AS</h2>
        <div className="flex items-center space-x-4 mb-4">
          <button
            type="button"
            className={`px-4 py-2 rounded-md font-semibold ${addressType === 'Home' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500 border border-pink-500'}`}
            onClick={() => handleAddressTypeChange('Home')}
          >
            Home
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md font-semibold ${addressType === 'Work' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500 border border-pink-500'}`}
            onClick={() => handleAddressTypeChange('Work')}
          >
            Work
          </button>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={isDefault}
              onChange={(e) => setIsDefault(e.target.checked)}
            />
            <span className="ml-2 text-gray-700">Make this my default address</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600"
        >
          ADD ADDRESS
        </button>
      </form>
    </div>
  );
};

export default Addresh;