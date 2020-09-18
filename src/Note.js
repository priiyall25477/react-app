import React from 'react';
import Button from '@material-ui/core/Button';

function Note() {
    return (
        <div className="notesrow">
        <p>Hi Maria! This is the notification.

        This is the notification. 
        This is the notification.
        This is the notification.</p>
        <div className="buttons">
        <div className="yes">
        <Button className = "" variant="contained" style = {{ backgroundColor :"green" }}>
            yes
        </Button>
        </div>
        <div className="no">
        <Button variant="contained"  style = {{backgroundColor:"red"}}>
            no
        </Button>
        </div>
        
        </div>
        </div>
    )
}

export default Note
