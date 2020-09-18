import React from 'react';
import List from './List.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FolderIcon from '@material-ui/icons/Folder';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import VideocamIcon from '@material-ui/icons/Videocam';

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Footer from "./Footer.js";

function Recents() {
    return (
        <div className = "recents">

        <div className="titleRecents">
            <ArrowBackIosIcon />
           <h3>Recents</h3> 
        </div>

        <div className="recentsection">
        <div className="recentsName">
        <List name = "Music" icon = {<MusicNoteIcon />}  />
        </div>
         <div className="recentsName">
        <List name = "Videos" icon = {<VideocamIcon />} />
        </div> 
        <div className="recentsName">
        <List name = "Images" icon = {<PhotoSizeSelectActualIcon />} />
        </div> 
        <div className="recentsName">
        <List name = "Documents" icon = {<FolderIcon />} />
        </div> 
        <div className="recentsName">
        <List name = "Files" icon = {<InsertDriveFileIcon />} />
        </div> 
        <div className="recentsName">
        <List name = "Tasks" icon = {<AssignmentIndIcon />} />
        </div>
        </div>
        <Footer />
        </div>
    );
}

export default Recents;