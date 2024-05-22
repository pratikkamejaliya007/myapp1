import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import Display from './pages/Display';
import Navbar from './pages/Navbar';
import { useState } from 'react';
import Update from './pages/Update';

function App() {

  const [data,setData]=useState([])

  function add(title, price, rating, description ,img ){

    const newdata={
      id:Date.now(),
      title:title,
      price: price,
      rating : rating,
      description : description ,
      img : img 
    }

    setData([...data,newdata])

  }

  function Delete(id){
    setData(data.filter((el)=> el.id !== id))
  }

  function editblog(id,title, price, rating, description ){

    let updatedPost=data.map((post)=>(

      post.id===id ? {...post , title:title, price:price , rating:rating , description:description } : post

     ))

     console.log(updatedPost)

    setData(updatedPost)

  }

  return (
    <>
    <Router>

    <Navbar/>

      <Routes>

        <Route path='/' element={<Display data={data} Delete={Delete}/>} />
        <Route path='/add' element={<ProductPage  add={add}  />} />
        <Route path='/edit/:id' element={<Update editblog={editblog} data={data}/>}></Route>

      </Routes>
    </Router>
    </>
  );
}

export default App;
