
import React from 'react'


function Card(props) {
    return (
        <div className="card">
        <img className = "image" src={props.img} alt="avatar_img" />
        <h4 className ="appName">{props.name}</h4>  
        </div>
    )
}

export default Card;
