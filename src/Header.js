import React from 'react'
import logo from './play.png'

const navList =[
    {element:"Home"},
    {element:"Movies"},
    {element:"TV-Series"}
]

class Header extends React.Component {
    handleChange = (event) =>{
        this.setState({
          search:event.target.value
        })
      }
    render() {
        return (
            <header>
                <div className="logo-display">
                    <img src={logo} alt="logo-site" className="img-size"/>
                    <h1 className="website-title">PLAY IT</h1>
                </div>
                <ul className="nav-menu">
                    {navList.map( el =>
                        <li><span>{el.element}</span></li>
                        )}
                </ul>
                <div className="search-menu">
                    <input type="text" className="searchbox" value={this.props.search} onChange={this.handleChange} placeholder="Search"/>
                    <span className="styleIcon"><i class="fas fa-search"></i></span>
                </div>
            </header>
        )
    }
 
}

export default Header
