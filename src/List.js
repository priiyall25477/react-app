import React from 'react';
import { Avatar } from '@material-ui/core';

function List(props) {
    return (
        <div className = "lists">
        <div className="avatar">
            <Avatar className = "avatar"  style = {{ backgroundColor:"#1e74fd" }}>{props.icon}</Avatar>
        </div>
        <div className="name">
        <h4 className ="listTitle">{props.name}</h4>  
        </div>
        </div>
    )
}

export default List;
