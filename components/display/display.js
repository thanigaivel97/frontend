import React from 'react'
import './display.css'
import {NavLink} from 'react-router-dom'

export default function display(props) {
    return (
        
            <div className="card col-md-4 col-sm-12">
                <img src={props.image} alt="Denim Jeans" style={{width:'100%'}}/>
                <h5>{props.title}</h5>
                <p className="price">{props.price}</p>
    <p>Artist - {props.artist}</p>
                <p><button><NavLink to={'/songs/' +props.id} >View Details</NavLink></button></p>
                </div>
        )
}
