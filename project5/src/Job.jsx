import React,{useEffect, useState} from 'react'

function Job() {

  const [data,setData]=useState([ {
    Title:'',
    Type:''
  }])

  const [Title,setTitle]=useState('')

  const [Type,setType]=useState('')

  const submit= (e) =>{

    e.preventDefault()


    if(Title != '' && Type !='' ){
      setData(prevdata=>[
        ...prevdata,{
            Title:Title,
            Type:Type        
        }
      ])

      setTitle('')
      setType('')
  
    }

  }

  const Update = (index) => {
   
    const Title=prompt('Enter Title')
    console.log(Title)
    const updatedata=data.map((el,i)=>{
      if (i === index) {
        return {
          ...el,
          Title: Title,
        };
      }
      return el;
    })
    setData(updatedata)
    console.log(updatedata)
    
  }

  const Delete = (index) =>{

    console.log(index)
   
    const update=data.filter((el,i)=> i !== index)

    console.log(update)

    setData(update)
    
  }

  return (
    <>

      <center>
        
      <form action="" onSubmit={submit} className='w-[50%] h-[200px] border  p-4'>

        <label htmlFor="">JOB:</label> 
        <input type="text"   placeholder='Enter Job Title' className='outline-none border ps-1 ms-3 h-[30px]' value={Title}   onChange={(e)=>setTitle(e.target.value)} /> <br /><br /> 

        
        <label htmlFor="">Type:</label> 
        <input type="text"   placeholder='Enter Job type' className='outline-none border ps-1 ms-3 h-[30px]' value={Type} onChange={(e)=>setType(e.target.value)} /> <br /> 

        <button type='submit' className='px-5 py-2 bg-green-600 text-white mt-3'>add</button>

    </form>
      </center>

      <center className='mt-5'>
      <table className='border'>
        <tr className='border'>
          <td className='border px-4 py-2'>id</td>
          <td className='border px-4 py-2'>Title</td>
          <td className='border px-4 py-2'>Type</td>
          <td className='border px-4 py-2'>Update</td>
          <td className='border px-4 py-2'>Delete</td>
          </tr>
          {
            data && data.map((el,i)=>(
                <tr className='border'>
                  <td className='border px-4 py-2'>{i+1}</td>
                  <td className='border px-4 py-2'>{el.Title}</td>
                  <td className='border px-4 py-2'>{el.Type}</td>
                  <td className='border px-4 py-2 ' onClick={()=>Update(i)}><button><i className="ri-edit-fill px-5 text-white rounded-xl py-2 bg-blue-500"></i></button></td>
                  <td className='border px-4 py-2 flex items-center justify-center' onClick={()=>Delete(i)}><button><i className="ri-delete-bin-line px-5 text-white rounded-xl py-2 bg-red-500"></i></button></td>
                </tr>
            ))
          }
        
      </table>
      </center>

    </>
  )
}

export default Job