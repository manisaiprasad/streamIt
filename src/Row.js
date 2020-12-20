//rfce
import React, {useEffect, useState} from 'react';
import axios from './axios';
import './Row.css';

function Row({title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] = useState([]);
    const baseImgUrl = "https://image.tmdb.org/t/p/original";

    useEffect(()=> {
        // run once when the row loads
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // console.log(request);
            setMovies(request.data.results);
            return request;

        }
        fetchData();
    },[fetchUrl]);

    // console.log(movies)

    return (
        <div className="row"> 
            <h2>{title}</h2>
            <div className="row_posters">

                {movies.map(movie => (
                    <img
                    key= {movie.id}
                    className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                    src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name}/>
                ))}

            </div>


        </div>
    )
}

export default Row