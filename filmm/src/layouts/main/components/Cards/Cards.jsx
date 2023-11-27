import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'


export default function Cards({ film }) {
    const imageUrl = "https://image.tmdb.org/t/p/w500"
    return (
        <div className='Cards'>
            <Link to={`/home/${film.id}`}>
            <img src={`${imageUrl}${film.poster_path}`} alt="" />
            </Link>
            <h1>{film.title}</h1>
            <p className='overview'>{film.overview}</p>
            <span>{film.original_language}</span>
            <p>relase data:{film.release_date}</p>
            <p>vote average:{film.vote_average}</p>
            <p>vote count:{film.vote_count}</p>
        </div>
    )
}
