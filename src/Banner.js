import { useState, useEffect } from "react"
import React from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'

function Banner() {
    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)]
                );

            return request;
        }
        fetchData();
        console.log(movie)
    }, []);
    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backdropPosition: "center center",
          }}>
            <div className="banner_contents">
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="bannerbuttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                    <h1 className="bannerdesc">{movie?.overview}</h1>
                </div>

            </div>
        </header>
    )
}

export default Banner
