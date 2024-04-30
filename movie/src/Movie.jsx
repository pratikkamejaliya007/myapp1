import React from 'react'
import { useState,useEffect ,useRef} from 'react'
import imdb from './imdb.png'

import History from './History'

function Movie(props) {

    const [history,setHistory]=useState(false)

    const [movies, setMovies] = useState([]);

    const [copy,setCopy]=useState([])

    const [fil,setFil]=useState([])

    const [originalMovies, setOriginalMovies] = useState([]);

    // const fil=useRef([])

    // useEffect(() => {
    //     const fetchAndStoreMovies = async () => {
    //         const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 'X-RapidAPI-Key': '52d48b4ee2mshb59af31bf93946cp10d4edjsnce9bbdb44371',
    //                 'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    //             }
    //         };

    //         try {
    //             const response = await fetch(url, options);
    //             const result = await response.json();
                
    //             // Store the result in state
    //             setMovies(result);

    //             // Store the result in local storage
    //             localStorage.setItem("movieData", JSON.stringify(result));

    //             console.log(result);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchAndStoreMovies();
    // }, []);

    let data;

    useEffect(()=>{

        let data=JSON.parse(localStorage.getItem("movieData"))

        setCopy(data)

        setMovies(data)

        setOriginalMovies(data)

    },[])

    const BOOK = (index) => {

        const filteredMovies = movies.filter((el,i) => i === index);

        setFil(prevFil => [...prevFil,...filteredMovies])
        
    };
    

    function handelbook(){
        setHistory(true)
        
    }
    
    
    function Action(value) {
        if (value === "All") {
            setMovies(originalMovies); 
        } else {
            let show = originalMovies.filter((el) => value === el.genre[0] || value === el.genre[1] ||value === el.genre[2] );
            setMovies(show);
        }
    }
    
  return (
    <>

    <button onClick={handelbook}>Book Show</button>

    <header>

        <nav className=' w-full h-full bg-gray-500 rounded-2xl flex justify-around items-center text-white text-2xl '>
                    <a href="#" onClick={() => Action("All")}>All</a>
                    <a href="#" onClick={() => Action("Action")}>Action</a>
                    <a href="#" onClick={() => Action("Crime")}>Crime</a>
                    <a href="#" onClick={() => Action("Drama")}>Drama</a>
                    <a href="#" onClick={() => Action("Adventure")}>Adventure</a>
                    <a href="#" onClick={() => Action("Romance")}>Romance</a>
                    <a href="#" onClick={() => Action("Fantasy")}>Fantasy</a>
                    <a href="#" onClick={() => Action("Sci-Fi")}>Sci-Fi</a>
                    <a href="#" onClick={() => Action("Thriller")}>Thriller</a>
                    <a href="#" onClick={() => Action("Mystery")}>Mystery</a>
                    <a href="#" onClick={() => Action("Horror")}>Horror</a>
        </nav>

    </header>
    
    
    {history ?
    (
        <>
            <History Data = {fil} />
        </>
    )
    :
    (
    <div className='main'>

        { movies &&movies.map((el,i)=>(
                <div className='data my-5' key={i}>
                    <img src={el.image} alt="" />
                    <h3>{el.title} ({el.year})</h3>
                    
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        
                        <p> <b>Category:</b> <br />{el.genre[0]} &nbsp; {el.genre[1]} &nbsp; {el.genre[2]}</p>
                        <h5 style={{display:'flex', alignItems:'center',justifyContent:'space-around'}}> {el.rating}    <img src={imdb} alt="" style={{width:'35px'}} /></h5>

                    </div>

                    <button onClick={() => BOOK(i)} id='btn-1'>BOOK</button>
                    
                    <select name="" id="" className='w-[200px] h-[40px] bg-gray-500 ms-[90px] mt-3'>
                        <option value="">12:00 PM TO 3:00 PM</option>
                        <option value="">3:30 PM TO 6:30 PM</option>
                        <option value="">3:30 PM TO 6:30 PM</option>
                    </select>

                </div>
            ))}

    </div>
)}
    </>
        )
   
}

export default Movie
