import React from 'react'
import { useState,useEffect ,useRef} from 'react'
import imdb from './imdb.png'

function Movie() {

    const [movies, setMovies] = useState([]);

    const [copy,setCopy]=useState([])

    const [fil,setFil]=useState([])

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

        console.log(data)

    },[])

    const BOOK = (index) => {

        let arr=[]

        const filteredMovies = movies.filter((el,i) => i === index);
        arr.push(filteredMovies)
        setFil(arr)

        console.log(index)
        

        console.log(fil);
        
    };

    
  return (
    <>
    <div className='main'>

        {

        movies &&movies.map((el,i)=>(
                <div className='data'>
                    <img src={el.image} alt="" />
                    <h3>{el.title} ({el.year})</h3>
                    
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        
                        <p> <b>Category:</b> <br />{el.genre[0]} &nbsp; {el.genre[1]} &nbsp; {el.genre[2]}</p>
                        <h5 style={{display:'flex', alignItems:'center',justifyContent:'space-around'}}> {el.rating}    <img src={imdb} alt="" style={{width:'35px'}} /></h5>

                    </div>

                    <button onClick={() => BOOK(i)} id='btn-1'>BOOK</button>

                </div>
            ))

        }

    </div>
    </>
  )
}

export default Movie
