import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Settings from './Settings.js';
import Recents from './Recents.js';
import Notifications from './Notifications.js';
import  Home  from './Home.js';

function App() {
  return (
    
    
 
    

    <Switch>
    <Route exact path = "/home" component = {Home} />
    <Route exact path = "/settings" component = {Settings} />
    <Route path = "/notifications" component={Notifications} />
     <Route path = "/recents" component={Recents} />
    </Switch>   
 
    
  
  );
}

export default App;
