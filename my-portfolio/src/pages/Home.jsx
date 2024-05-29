import React from 'react'
import profile from '../img/profile.jpeg'

function Home() {
  return (
    <div className='w-full h-[100vh] bg-red-300 flex'>

        <aside className='w-[20%] h-full p-2 bg-slate-300'>
            
            <div className='w-[250px] h-[250px] border mx-auto flex flex-col items-center justify-around'>

                <img src={profile} alt="" className='w-[90%] h-[80%] rounded-[100%]' />

                <h1 className='text-2xl text-gray-500'>Full stack Devloper</h1>

            </div>

            <div className='w-[70%] h-[60%] border border-black mx-auto mt-5'>

                <ul>
                    <li></li>
                </ul>

            </div>
            
        </aside>

        <section className='w-[80%] h-full bg-white'>

        </section>
        
    </div>
  )
}

export default Home