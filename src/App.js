import React, { Component } from 'react'
import './App.css';

import logo from './play.png'
import Movie from './Movie';
import TVSeries from './TVSeries';
import AddMovie from './AddMovie';
import AddTVSeries from './AddTVSeries'
import Stars from './Stars';

const navList =[
  {element:"Home"},
  {element:"Movies"},
  {element:"TV-Series"}
]


export default class App extends Component {
  state={
    searchedValue:'',
    starsFilter :0,
    showsList:[
      {
          movieImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmKt9Hme3UWvmxdQxtd1iDCpR-rv94H7zrRsRr1hB1CNgdF2MAw",
          movieTitle: 'JHON WICK 3',
          movieRate:4
      },
      {
          movieImg:"https://i.pinimg.com/originals/a4/ef/6e/a4ef6e7b1d33b8135ef1d86ab3031365.jpg",
          movieTitle: 'MORTAL ENGINES',
          movieRate:5
      },
      {
          movieImg:"https://m.media-amazon.com/images/M/MV5BNTI0ZjljMzMtNDFlZi00YTM1LTgxY2EtN2Q1ZjNiZTNkMzQ3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
          movieTitle: 'NORTHMAN',
          movieRate:1
      },
      {
          movieImg:"https://m.media-amazon.com/images/M/MV5BMTc5NzAyOTQyNF5BMl5BanBnXkFtZTcwNzQ1MDc4OQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          movieTitle: 'THE MORTAL INSTRUMENTS',
          movieRate:4 
      },
      {
          movieImg:"https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_.jpg",
          movieTitle: 'THE NUN',
          movieRate:2
      },
      {
          movieImg:"https://m.media-amazon.com/images/M/MV5BNTlkOWYzZDYtNzQ1MS00YTNkLTkyYTItMjBmNjgyMDBlMjI4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
          movieTitle: 'THE DICTATOR',
          movieRate:4
      },
      {
          movieImg:"https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          movieTitle: 'DEADPOOL',
          movieRate:5
      },],
      TVSList:[{
          TVSImg:"https://boutique.motomag.com/2748/dvd-fiction-moto-sons-of-anarchy-coffret-saison-5.jpg",
          TVSTitle: 'SONS OF ANARCHY',
          TVSRate:5
      },
      {
          TVSImg:"http://fr.web.img6.acsta.net/pictures/18/10/02/11/22/2710220.jpg",
          TVSTitle: 'RIVERDALE',
          TVSRate:4
      },
      {
          TVSImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLcNZjg2k2m2JkC7uRCdHPVwY-Ccw6HRo_KOgbHNSftMmlohHz3A",
          TVSTitle: 'THE ORIGINALS',
          TVSRate:4
      },
      {
          TVSImg:"https://vignette.wikia.nocookie.net/vikings/images/b/b6/Poster_Saison_5.png/revision/latest?cb=20171023190750&path-prefix=fr",
          TVSTitle: 'VIKINGS',
          TVSRate:3 
      },
      {
          TVSImg:"https://64832c89dac4ae3f2c9a-cbc0e5c64c4e0e6a0ca4e8696c6ef08e.ssl.cf3.rackcdn.com/5030305514822.jpg",
          TVSTitle: 'THE WALKING DEAD',
          TVSRate:4
      },
      {
          TVSImg:"https://marvelll.fr/wp-content/uploads/2011/06/Le-Trone-de-fer-Game-of-Thrones-Saison-1-poster.jpg",
          TVSTitle: 'GAME OF THRONES',
          TVSRate:5
      },
      {
          TVSImg:"https://s1.thcdn.com/productimg/960/960/11233664-1114500914772849.jpg",
          TVSTitle: 'BLACK SAILS',
          TVSRate:3
      },]
  }

  handleClick = (s)=>{
    this.setState({
      starsFilter : s
    })
  }
  handleChange = (event) =>{
    this.setState({
      searchedValue:event.target.value
    })
  }

  addNewMovie = (image,info,rate) =>{
    this.setState({
        showsList:this.state.showsList.concat({movieImg:image,movieTitle:info,movieRate:rate})
    })
  }

  addNewTVSeries = (timage,tinfo,trate) =>{
    this.setState({
        TVSList:this.state.TVSList.concat({TVSImg:timage,TVSTitle:tinfo,TVSRate:trate})
    })
  }

  render() {
    return (
      <div>
          <header className='header'>
                <div className="logodisplay">
                    <img src={logo} alt="logo-site" className="imgsize"/>
                    <h1 className="websitetitle">PLAY IT</h1>
                </div>
                <ul className="navmenu">
                    {navList.map( el =>
                        <li><span>{el.element}</span></li>
                        )}
                    <li className="rateSearch"><label>Search by Rate: </label><Stars rating={this.state.starsFilter} handleClick={this.handleClick} search={true}/></li>
                </ul>
                <div className="searchmenu">
                    <input type="text" className="searchbox"  onChange={this.handleChange} placeholder="Search"/>
                    <span className="styleIcon"><i class="fas fa-search"></i></span>
                </div>
          </header>
          <section className="movies-container">
                <h1>MOVIES</h1>
                <div className="movie-list">
                  <div className="movie-box">
                  {this.state.showsList
                    .filter(el => el.movieTitle.toUpperCase().includes(this.state.searchedValue.toUpperCase().trim()) && el.movieRate >= this.state.starsFilter )
                    .map( el => <Movie shows={el}/>)}
                  </div>
                </div>
          </section>
          <AddMovie addMovie={this.addNewMovie}/>
          <section className="movies-container">
                <h1>TV-SERIES</h1>
                <div className="movie-list">
                  <div className="movie-box">
                  {this.state.TVSList
                    .filter(el => el.TVSTitle.toUpperCase().includes(this.state.searchedValue.toUpperCase().trim()) && el.TVSRate >= this.state.starsFilter )
                    .map( el => <TVSeries TVS={el}/>)}
                  </div>
                </div>
          </section>
          <AddTVSeries addTVSeries={this.addNewTVSeries}/>
      </div>
    )
  }
}


