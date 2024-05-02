import React from 'react'
import { useState,useEffect,useRef } from 'react'
import imdb from './imdb.png'
import Movie from './Movie'

function History(props) {

    const [pre,setPre]=useState(false)

    const [bookdata,setBookdata]=useState([])

    function home(){
        setPre(true)
    }

    let hyy=props.Data

    useEffect(()=>{

            setBookdata(props.Data);
        
    },[])

    const delate = (index) =>{
        const select=[...bookdata]
        const upadte=select.filter(i=>{
            return i == index
        })
        console.log(upadte)
        setBookdata(upadte)
    }

  return (
    <>

    <button onClick={home}>Home</button>
        
        { pre ?
            (
                <>
                    <Movie show={pre}/>
                    {
                        console.log(pre)
                    }
                </>
            ) :
            (
                <>
                
        <div className='main'>

{ props.Data &&props.Data.map((el,i)=>(
        <div className='data' key={i}>
            <img src={el.image} alt="" />
            <h3>{el.title} ({el.year})</h3>
            
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                
                <p> <b>Category:</b> <br />{el.genre[0]} &nbsp; {el.genre[1]} &nbsp; {el.genre[2]}</p>
                <h5 style={{display:'flex', alignItems:'center',justifyContent:'space-around'}}> {el.rating}    <img src={imdb} alt="" style={{width:'35px'}} /></h5>

            </div>

            <div className='mt-2 flex items-center justify-between'>
                <p className='text-lg'>Time:{el.Time}</p>
                <p className='text-lg'>Ticket:{el.Ticket}</p>
            </div>

            <button onClick={()=>delate(i)}  id='btn-1'>Delete</button>

        </div>
    ))}

    </div>
                </>
            )
        }

    </>
  )
}

export default History
