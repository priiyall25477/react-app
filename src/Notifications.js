import React from 'react';
import Note from './Note.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Footer from "./Footer.js";
import { Link } from "react-router-dom";

function Notifications() {
    return (
         <div className = "notifications">

        <div className="titleNotifications">
        <Link to = "/home">
        <ArrowBackIosIcon />
        </Link>
           <h3>Notifications</h3> 
        </div>
        <div className="notesection">

        <div className="notes">
        <Note />
        </div>
        <div className="notes">
        <Note />
        </div><div className="notes">
        <Note />
        </div><div className="notes">
        <Note />
        </div>

        </div>
        <Footer />    
        </div>
    );
}

export default Notifications;
