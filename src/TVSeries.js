import React from 'react'
import Stars from './Stars'

export default function TVSeries(props) {
    return (
        <ul>
            <li className='img-container'><img src={props.TVS.TVSImg} className="movie-cover"/></li>
            <li><h3>{props.TVS.TVSTitle}</h3></li>
            <li><Stars rating={props.TVS.TVSRate} search={false} /></li>
        </ul>
    )
}