import React from 'react'
import { useState,useEffect } from 'react'
import imdb from './imdb.png'

function Movie() {

    const [movies, setMovies] = useState([]);

    const [copy,setCopy]=useState([])

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

  return (
    <div className='main'>

        {

        movies &&movies.map((el)=>(
                <div className='data'>
                    <img src={el.image} alt="" />
                    <h3>{el.title} ({el.year})</h3>
                    <p>{el.genre}</p>
                    <h5 style={{display:'flex', alignItems:'center',justifyContent:'space-around'}}>IMDB : {el.rating} <img src={imdb} alt="" style={{width:'35px'}} /></h5>
                    {/* <img src={el.thumbnail} alt="" /> */}
                </div>
            ))

        }

    </div>
  )
}

export default Movie
