
import './App.css';
import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Home';
import Addpost from './Addpost';
import Update from './Update';
import { useState } from 'react';

function App() {

  const[posts,setPostes]=useState([])


  function addnewpost(title,content)
  {
     let newpost={
      id: new Date().getTime(),
      title:title,
      content:content

     }
     setPostes([...posts,newpost])

  }

  
  function Delete(id){
    setPostes(posts.filter((el)=> el.id != id))
  }

  function Update(id){
    
    const add=posts.find((el)=> el.id == id)

  }

  return (

    <>

    <Update />
      
    <Router>

<div className="App">

<Routes>


<Route path='/' element={<Home posts={posts} Delete={Delete} Update={Update}/>}></Route>
<Route path='/add' element={<Addpost addnewpost={addnewpost} />}></Route>
<Route path='/update' element={<Update />}></Route>

</Routes>      
 
</div>
</Router>
    </>

  );
}

export default App;