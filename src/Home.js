import React,{useState} from 'react';
import Footer from './Footer.js';
import SearchIcon from '@material-ui/icons/Search';
import icon1 from './static/2.jpg';
import icon2 from './static/3.png';
import icon3 from './static/4.png';
import icon4 from './static/5.png';
import icon5 from './static/6.png';
import icon6 from './static/7.png';
import Card from './Card.js';


function Home() {

    const comps = [ {name:"IT Asset Tracker",img:icon4},
    {name:"Stock Keeping",img: icon1},
    {name:"Help Desk",img:icon2},
    {name:"Price List",img:icon5},
    {name:"Product Analysis",img:icon3},
    {name:"Bundle Offers",img:icon6}
    ];

    const [filter,setFilter] = useState('');
   
    
    
    
    return (
       
           <div className="App">
      <h1 className ="title">My Apps</h1>


    <div className="search_bar">
    <SearchIcon />
    <input type="text" placeholder="Search by App Name or Owner"  id = "searchLength" value = {filter} onChange={ e => {let div = document.getElementById("card_div");
    let string = document.getElementById("searchLength").value;
    if(string.length>0) 
    div.style.visibility = "hidden";
    else

    div.style.visibility = "visible";
     setFilter(e.target.value)}} />
    
  
    </div>
     <div className="searchCard">
    {comps.map((comp) => {
        if(filter.length !== 0){
            if((comp.name).toLowerCase().startsWith(filter.toLowerCase())){
                return <Card name = {comp.name} img = {comp.img} />
               
            }else{
                return null;
            }
          
            
        }
       
    })}
    </div>


   <div id = "card_div" className="card_section">
   <div className="card"> 
      <Card name = "IT Asset Tracker" img = {icon4} />
      
    </div>
    <div className="card"> 
      <Card name = "Stock Keeping" img = {icon1} />
      
    </div>
    <div className="card"> 
      <Card name = "Help Desk" img = {icon2} />
      
    </div>
    <div className="card"> 
      <Card name = "Product Analysis" img = {icon3} />
      
    </div>
    <div className="card"> 
      <Card name = "Price List" img = {icon5} />
      
    </div>
    <div className="card"> 
      <Card name = "Bundle Offers" img = {icon6} />
    </div>
   
    </div>
    <Footer />
    </div>
    )
}

export default Home;
