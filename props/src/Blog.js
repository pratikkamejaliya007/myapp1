import React from 'react'

function Blog(props) {
  return (
    <>


 <div className='main'>
      {
      props.data &&  props.data.map((el) => (
          <div key={el.id}>
            <img src={el.images} alt="" />
            <h3>${el.price}</h3>
            <h3>{el.title}</h3>
          </div>
        ))
      }
    </div>
  

    </>
  )
}

export default Blog