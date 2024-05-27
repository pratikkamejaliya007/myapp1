import React, { useContext } from 'react'
import Theme from './Context';

function Aside() {

    const {width,toggle}=useContext(Theme);


  return (
    <>

    <div 
    style={{
        height:"100vh",
        width:'100%',
        display:'flex'
    }}
    >

        <aside style={{
            width: width === 'full' ? '0%' : '20%',
            height:'100%',
            backgroundColor:"#979a9a",
            transition:'0.5s'
        }}>

        </aside>

        <section
        style={{
            width: width === 'full' ? '100%' : '80%',
            height:'100%',
            backgroundColor:" #34495e ",
            transition:'0.5s'
        }}
        >

        </section>
        
    </div>
    
    </>
  )
}

export default Aside