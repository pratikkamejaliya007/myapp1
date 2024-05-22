
import './App.css';
import React from 'react';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Home';
import Addpost from './Addpost';
import Update from './Update';
import { useState } from 'react';

function App() {

  const[posts,setPostes]=useState([])
  
  const [ex,setEx]=useState([])


  function addnewpost(newpost){

    newpost.id=Date.now()

    setPostes([...posts,newpost])
  }

  console.log(posts)
  
  function Delete(id){
    setPostes(posts.filter((el)=> el.id != id))
  }

  function UP(id){
    
    setEx(posts.find((el)=> el.id == id))

  }

  function Change(id,title,content,image){

    setPostes(posts.map((el)=>(
      el.id == id ? {...el, title:title , content:content , image:image} : el
    )))

  }




  return (

    <>
      
    <Router>

<div className="App">

<Routes>


<Route path='/' element={<Home posts={posts} Delete={Delete} Up={UP}/>}></Route>
<Route path='/add' element={<Addpost addnewpost={addnewpost} />}></Route>
<Route path='/update' element={<Update Change={Change} ex={ex} />}></Route>

</Routes>      
 
</div>
</Router>
    </>

  );
}

export default App;

