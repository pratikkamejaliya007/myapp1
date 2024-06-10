import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Display from './Display';
import AddForm from './Add';
import Show_data from './Show_data';
import Update from './Update';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  const [width, setWidth] = useState(true);

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <div className='flex'>
      
      <Sidebar width={width} setWidth={setWidth} />
      
        <Display width={width}>
          <Routes>
            
            <Route path="/" element={<Show_data />} />
            <Route path="/add" element={<AddForm />} />
            <Route path="/update/:id" element={<Update />} />

          </Routes>
        </Display>
      
    </div>
  );
}

export default Home;
