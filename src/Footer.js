import React from 'react'
import './App.css'
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import HistoryIcon from '@material-ui/icons/History';
import { NavLink } from 'react-router-dom';

function Footer() {
 

    return (
        
       
    <div className="footer">
    <div className="icons">

    <NavLink id = "current" activeStyle={{color: "#1e74fd"}} className = "link" to = "/home" >
    <div className="apps">
      <AppsIcon />
      <h6>Applications</h6>
    </div>
    </NavLink>
  
   
<NavLink id = "current" activeStyle={{color: "#1e74fd"}} className = "link" to = "/recents">
    <div className="history">
    
  
      <HistoryIcon />
      <h6 className="recent">Recents</h6>
      </div>
</NavLink>

<NavLink id = "current" activeStyle={{color: "#1e74fd"}} className = "link" to = "/notifications">
    <div className="notifications">
      <NotificationsIcon />
      <h6>Notifications</h6>
    </div>
</NavLink>     
 
<NavLink id = "current" activeStyle={{color: "#1e74fd"}} className = "link" to = "/settings">
    <div className="settings"> 
    <SettingsIcon />
    <h6>Settings</h6>
    </div>
</NavLink>    
   
    
    </div> 
    </div>
   
    )
}

export default Footer;
