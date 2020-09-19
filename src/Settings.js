import React from 'react';
import Setting from './setting.js';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Footer from './Footer.js';


function Settings() {
    return (
        <div className = "settings">
        <div className="titleSettings">
        
          <ArrowBackIosIcon />
        
           <h3>Settings</h3> 
        </div>
        <div className="settingsection">

        <Setting name = "Edit Profile" />
        <Setting name = "Account Settings" />
        <Setting name = "Notification Settings" />
        <Setting name = "Privacy" />
        </div>
        <Footer />
        </div>
    );
}

export default Settings;
