import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { edit } from '../redux/action';
import { useNavigate } from 'react-router-dom';

function Update() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const item = useSelector(state => state.data.find(item => item.id === parseInt(id)));

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: '',
    fees: '',
    additionalInfo: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (item) {
      setFormData(item);
    }
  }, [item]);

  const validate = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) errors.name = 'Name is required';
    if (!formData.mobile) errors.mobile = 'Mobile number is required';
    if (isNaN(formData.mobile)) errors.mobile = 'Mobile number must be numeric';
    if (formData.mobile.length !== 10) errors.mobile = 'Mobile number must be 10 digits';
    if (!formData.email) errors.email = 'Email is required';
    if (!emailPattern.test(formData.email)) errors.email = 'Invalid email format';
    if (!formData.course) errors.course = 'Course is required';
    if (!formData.fees) errors.fees = 'Fees are required';
    if (isNaN(formData.fees)) errors.fees = 'Fees must be numeric';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(edit(parseInt(id), formData));
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 shadow-md rounded h-auto">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-2 mt-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Mobile Number</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className={`w-full p-2 mt-2 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 mt-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Course</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className={`w-full p-2 mt-2 border ${errors.course ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Fees</label>
        <input
          type="number"
          name="fees"
          value={formData.fees}
          onChange={handleChange}
          className={`w-full p-2 mt-2 border ${errors.fees ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.fees && <p className="text-red-500 text-sm">{errors.fees}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Additional Information</label>
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          className="w-full p-2 mt-2 border border-gray-300 rounded"
        ></textarea>
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Update</button>
    </form>
  );
}

export default Update;
