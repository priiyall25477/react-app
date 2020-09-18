import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Setting(props) {
    return (<div className= "setting">

        <div className= "settingname">
          <p>{props.name}</p>  
        </div>

        <div className="arrow">
        <ArrowForwardIosIcon />
        </div>
       
        </div>
    )
}

export default Setting;
