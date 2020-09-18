import React from 'react';
import Note from './Note.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Footer from "./Footer.js";

function Notifications() {
    return (
         <div className = "notifications">

        <div className="titleNotifications">
        <ArrowBackIosIcon />
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
