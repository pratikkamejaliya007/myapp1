import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import ProductCard from '../ProductCard';
import Loader from './Loader';
import { addbag } from '../redux/bagslice';

function Bag() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch()

  // const bag = useSelector(state => state.bag);
  // console.log(bag)

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get('http://localhost:8000/products');
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  
  const log = useSelector((state) => state.log);

  if (loading) {
    return <Loader />;
  }

  function addbagdata(id){
    const bagdata = data.filter((el) => el.id == id);
    if (bagdata.length > 0) {
      const firstObject = bagdata[0];
      console.log(firstObject);
      dispatch(addbag(firstObject));
    } else {
      console.log("No matching object found");
    }
    // dispatch(addbag(id))
  }

  return (
    <div className='flex flex-wrap my-10'>
      {data.length > 0 ? (
        data.map((el) => <ProductCard key={el.id} data={el} addbagdata={addbagdata}/>)
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default Bag;
