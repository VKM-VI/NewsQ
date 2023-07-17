import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {

    let {mode,toggleMode,HandleCountry} = this.props;
    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsQ</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                    </li>
                    <li  className="nav-item "><Link  className="nav-link " to="business">Business</Link></li>
                    <li className="nav-item"><Link  className="nav-link" to="entertainment">Entertainment</Link></li>
                    {/* <li className="nav-item"><Link className="nav-link" to="general">General</Link></li> */}
                    <li className="nav-item"><Link id='hea'  className="nav-link" to="health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="technology">Technology</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="global">Global</Link></li>

                    
                    <li className="nav-item dropdown">
                    <a id='desh' className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Country
                    </a>
                    <ul className={`dropdown-menu dropdown-menu-${mode==='light'?'light':'dark'}` }>
                      <li className='dropdown-item' ><Link onClick={()=>HandleCountry('in')} className="nav-link" to={`/`}>India</Link></li>
                      <li className='dropdown-item' ><Link onClick={()=>HandleCountry('us')} className="nav-link" to={`/`}>USA</Link></li>
                      <li className='dropdown-item'><Link onClick={()=>HandleCountry('cn')} className="nav-link" to={`/`}>China</Link></li>
                      <li className='dropdown-item'><Link onClick={()=>HandleCountry('kr')} className="nav-link" to={`/`}>Korea</Link></li>
                      <li className='dropdown-item'><Link onClick={()=>HandleCountry('sa')} className="nav-link" to={`/`}>Saudi Arabia</Link></li>
                      <li className='dropdown-item'><Link onClick={()=>HandleCountry('ae')} className="nav-link" to={`/`}>UAE</Link></li>
                      <li className='dropdown-item'><Link onClick={()=>HandleCountry('it')} className="nav-link" to={`/`}>Italy</Link></li>
                      <li className='dropdown-item'><Link onClick={()=>HandleCountry('ru')} className="nav-link" to={`/`}>Russia</Link></li>
                      <li className='dropdown-item'><Link onClick={()=>HandleCountry('ua')} className="nav-link" to={`/`}>Ukraine</Link></li>
                    </ul>
                  </li>
                </ul>
                
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}

                <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode==='light'?'dark':'light'}</label>
                </div>
                </div>
            </div>
            </nav>
      </div>
    )
  }
}
