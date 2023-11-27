import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleFilm } from '../../../Services/Film'
import './Details.css'


export default function Details() {
    const [films, setFilms] = useState({})
    const imageUrl = "https://image.tmdb.org/t/p/w500"
    const { original_title, overview, vote_average, release_date, poster_path, backdrop_path, production_countries } = films;

    let { id } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getSingleFilm(id);
                setFilms(res);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData()
    }, [id])
    console.log(films)

    return (
        <div className='Details'>
            <img className='img' src={`${imageUrl}${films.poster_path}`} alt="" />
            <h1 className='overvieww'> {overview}</h1>
        </div>
    )
}
