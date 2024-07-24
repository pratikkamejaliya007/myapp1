import React,{useState} from 'react'
import { FaUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import logo from '../img/myntra.png'
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaRegUser } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

function Header() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate=useNavigate()

    const bag = useSelector(state => state.bag);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handlelogin = () =>{
    navigate('/login')
  }
  
  const handlebag = () =>{
    navigate('/bag')
  }

  function handlehome(){
    navigate('/')
  }

  function handleadd(){
    navigate('/add')
  }

  return (
    <header className='w-full h-[80px] flex items-center justify-between px-5 shadow-md sticky top-0 z-20 bg-white'>

        <div className="logo w-[15%]" onClick={handlehome}>
            <img src={logo} alt="" className='w-[80px]' />            
        </div>

        <nav className='w-[50%] 2xl:block xl:block lg:block hidden h-full'>
            <ul className='h-full w-full flex justify-between items-center font-semibold '>
                <li className='cursor-pointer'>MEN</li>
                <li className='cursor-pointer'>WOMEN</li>
                <li className='cursor-pointer'>KIDS</li>
                <li className='cursor-pointer'>HOME & LIVING</li>
                <li className='cursor-pointer'>BEAUTY</li>
                <li className='cursor-pointer'>STUDIO</li>
            </ul>
        </nav>

        <div className='2xl:flex xl:flex lg:flex hidden justify-between items-center
         w-[10%] h-full'>
            <div className=' flex flex-col items-center cursor-pointer'>
                <FaRegUser className='text-xl' onClick={handlelogin}/>
            </div>
            <div className=' flex flex-col items-center cursor-pointer' onClick={handleadd}>
                <IoIosAddCircle  className='text-2xl'/>
            </div>
            <div className=' flex flex-col cursor-pointer' onClick={handlebag}>
                
            <button type="button" class="relative inline-flex items-center p-1  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <IoBagHandleOutline className='text-xl' />
        <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{bag.length}</div>
        </button>                
            </div>
        </div>

        <button
          className="text-2xl 2xl:hidden xl:hidden lg:hidden block"
          type="button"
          onClick={toggleDrawer}
        >
         <RiMenu3Fill />
        </button>

        {/* offcenvas */}
        <div
        id="drawer-left-example"
        className={`fixed  top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'} bg-white w-80 dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-left-label"
      >
        <IoClose  className='absolute top-1 right-1 text-2xl opacity-50' onClick={toggleDrawer} />
        <nav className=''>
            <ul className=' font-semibold '>
                <li className='py-2 border-b cursor-pointer '>MEN</li>
                <li className='py-2 border-b cursor-pointer'>WOMEN</li>
                <li className='py-2 border-b cursor-pointer'>KIDS</li>
                <li className='py-2 border-b cursor-pointer'>HOME & LIVING</li>
                <li className='py-2 border-b cursor-pointer'>BEAUTY</li>
                <li className='py-2 border-b cursor-pointer'>STUDIO</li>
            </ul>
        </nav>

        <div className='flex flex-row p-2 mt-3 border-b justify-between items-center
         '>
            <div className=' flex flex-col items-center cursor-pointer'>
                <FaRegUser className='text-xl' onClick={handlelogin}/>
            </div>
            <div className=' flex flex-col items-center cursor-pointer'>
                <CiHeart className='text-2xl'/>
            </div>
            <div className=' flex flex-col cursor-pointer' onClick={handlebag}>
                
            <button type="button" class="relative inline-flex items-center p-1  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <IoBagHandleOutline className='text-xl' />
        <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{bag.length}</div>
        </button>                
            </div>
        </div>

      </div>

    </header>
  )
}

export default Header