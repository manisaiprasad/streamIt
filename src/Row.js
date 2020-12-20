//rfce
import React, {useEffect, useState} from 'react';
import axios from './axios';
import './Row.css';
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer'

function Row({title, fetchUrl, isLargeRow}) {
    
    const [trailerUrl, setTrailerUrl] = useState("");

    const [movies, setMovies] = useState([]);
    const baseImgUrl = "https://image.tmdb.org/t/p/original";
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };
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

    const handleClick = async (movie)=>{
        if (trailerUrl){
            setTrailerUrl('');
        }else{
            // movieTrailer(movie?.name || "")
            // .then((url)=>{
            //     const urlParams = new URLSearchParams(new URL(url).search);
            //     setTrailerUrl(urlParams.get('v'));
            // }).catch((error)=>console.log(error));
            let trailerurl = await axios.get(
                `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
              );
              setTrailerUrl(trailerurl.data.results[0]?.key);
        }

    };

    return (
        <div className="row"> 
            <h2>{title}</h2>
            <div className="row_posters">

                {movies.map(movie => (
                    <img
                    key= {movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                    src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name}/>
                ))}

            </div>

            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

        </div>
    )
}

export default Row