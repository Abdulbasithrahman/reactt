import React from 'react';

import img1 from './images/download.png'

export default function Navbar(){
    return(
       <div className='nav-bar'>
       <div className='nav'>
           <img className="img1-logo"src={img1}/>
           </div>
           <div className='nav-container'>
           <div className='nav-body'>
              <li className='nav-menu'>Anywhere</li>
              <li className='nav-menu'>Any week</li>
              <li className='nav-search'><span className='guest'>Add guests</span><img className='nav-sbutton' src="./search.png"/></li>
           </div>
           </div>
           <div className='nav-host'>
            <div className='nav-letter'>
               <p>Become a host</p>
            </div>
            <div className='nav-internet'>
                 <img className='nav-world' src='./internet.png'/>
            </div>
            <div className='nav-menubar'>
                 <li><img className='menuu' src='./menu.png'/></li>
                 <li><img className='profilebutton' src='./profilee.png'/></li>
            </div>
           </div>
       </div>
    )
}