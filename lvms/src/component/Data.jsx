import React, { useState, useEffect } from 'react';

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyapi.online/api/movies');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>

     <section className='main d-flex ' style={{height:'100vh',}}>

            {

                 data.map((el)=>(
                    
                    <div className='sub_main' key={el.id}>
                        <h4>ID:{el.id}</h4>

                        <h5>Name:{el.movie}</h5>

                        <h6>Rating:{el.rating}</h6>

                    </div>

                 ))

            }

     </section> 


    </>
  );
}

export default Data;
