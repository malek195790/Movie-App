import React from 'react'
import Stars from './Stars'

export default function Movie(props) {
    return (
        <ul>
            <li className='img-container'><img src={props.shows.movieImg} className="movie-cover"/></li>
            <li><h3>{props.shows.movieTitle}</h3></li>
            <li><Stars rating={props.shows.movieRate}  search={false} /></li>
        </ul>
    )
}