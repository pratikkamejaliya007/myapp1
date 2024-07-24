import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {

    const navigate=useNavigate()

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    brand: '',
    category: '',
    price: '',
    discountPrice: '',
    sizes: [],
    color: '',
    rating: '',
    productLikes: '',
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    let updatedSizes = [...formData.sizes];
    if (checked && !updatedSizes.includes(value)) {
      updatedSizes.push(value);
    } else {
      updatedSizes = updatedSizes.filter((size) => size !== value);
    }
    setFormData({
      ...formData,
      sizes: updatedSizes,
    });
  };

  const handleImageChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: [...formData[name], value],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        
        const res = await axios.post('http://localhost:8000/products', formData);

        navigate("/")
        
      } catch (error) {
        console.error('Error posting data', error);
      }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 m-[40px] bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Product Form</h2>
      <div className="grid gap-6 mb-6">
        <div>
          <label className="block text-gray-700">ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleInputChange} required className="w-full mt-2 p-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full mt-2 p-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700">Brand:</label>
          <input type="text" name="brand" value={formData.brand} onChange={handleInputChange} required className="w-full mt-2 p-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700">Category:</label>
          <input type="text" name="category" value={formData.category} onChange={handleInputChange} required className="w-full mt-2 p-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700">Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleInputChange} required className="w-full mt-2 p-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700">Discount Price:</label>
          <input type="number" name="discountPrice" value={formData.discountPrice} onChange={handleInputChange} required className="w-full mt-2 p-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700">Sizes:</label>
          <div className="mt-2">
            {['7', '8', '9', '10', '11'].map((size) => (
              <label key={size} className="inline-flex items-center mr-4">
                <input
                  type="checkbox"
                  name="sizes"
                  value={size}
                  checked={formData.sizes.includes(size)}
                  onChange={handleSizeChange}
                  className="form-checkbox"
                />
                <span className="ml-2">{size}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Color:</label>
          <input type="text" name="color" value={formData.color} onChange={handleInputChange} className="w-full mt-2 p-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700">Rating:</label>
          <input type="number" name="rating" value={formData.rating} onChange={handleInputChange} className="w-full mt-2 p-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700">Product Likes:</label>
          <input type="number" name="productLikes" value={formData.productLikes} onChange={handleInputChange} className="w-full mt-2 p-2 border rounded-lg" />
        </div>
        <div>
          <label className="block text-gray-700">Images:</label>
          {formData.images.map((image, index) => (
            <input
              key={index}
              type="text"
              name="images"
              value={image}
              onChange={handleImageChange}
              className="w-full mt-2 p-2 border rounded-lg"
            />
          ))}
          <button type="button" onClick={() => setFormData({ ...formData, images: [...formData.images, ''] })} className="mt-2 p-2 bg-blue-500 text-white rounded-lg">Add Image</button>
        </div>
      </div>
      <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Submit</button>
    </form>
  );
};

export default ProductForm;
