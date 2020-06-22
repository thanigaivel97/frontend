import React from 'react'
import {NavLink} from 'react-router-dom'

export default function nav() {
    return (
        <section>
        <nav className="navbar navbar-expand-md bg-danger navbar-dark  ">
                <a className="navbar-brand" href="/">Boing Boing</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item justify-content-center">
                        <NavLink to="/songs" className="nav-link" href="/">Songs</NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Login</a>
                    </li>    
                    </ul>
                </div>  
        </nav>
    </section>
    )
}

