import React from 'react'
import { useState ,useRef ,useEffect } from 'react'

function Fragment() {

  const [url,seturl]=useState('')

  const [title,settitle]=useState('')

  const [data,setdata]=useState([])

  const count=useRef(0)


  let add = (e) =>{

    e.preventDefault()

    count.current = count.current + 1

    data.push(
      {
        URL:url,
        TITLE:title
      }
    )

    localStorage.setItem("show",JSON.stringify(data))

    seturl('')
    settitle('')

  }
  
  useEffect(()=>{
    
    let storedata=JSON.parse(localStorage.getItem("show"))


    setdata(storedata)

  },[])

  return (
    <>

    <form action="" onSubmit={add}>

      <input type="url" name="" id="" onChange={(e)=> seturl(e.target.value)} placeholder='Enter Url' required/>

      <input type="text" name="" id="" onChange={(e)=> settitle(e.target.value)} placeholder='Enter Title' required/>

      <button type='add'>ADD</button>

    </form>
    
    {/* <p>{count.current}</p> */}

    <section>
      {
        data && data.map((el)=>(
          <div className='main'>
          <img src={el.URL} alt="" />
          <h1>{el.TITLE}</h1>
          </div>
        ))
      }
    </section>

    </>
  )
}

export default Fragment