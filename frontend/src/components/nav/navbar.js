import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

import Avatar from '@mui/material/Avatar';

class NavBar extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
        return (
          <div className='nav'>
              <div>
                  <span style={{ color: "#0071bc", fontSize: 'x-large', fontWeight: '700'}}>
                     W   
                  </span>
                  <span style={{ color: "#42b2fc"}}>
                     e  
                  </span>
                  <span style={{ color: "#3f89bb", fontSize: 'x-large', fontWeight: '700'}}>
                     G 
                  </span>
                  <span style={{ color: "#08c3fc"}}>
                     o  
                  </span>
              </div>
             
          
               <div className='nav__right'>

                 
               <div className="header__info--user"> 

<div className="header__info--userimg">
     <Avatar  /> 
</div>

<div className="header__info--username">Demo User</div>                                
</div>

                <ul class="list nav__list">
                  <li class="nav__item"><Link to={'/signup'} >Signup</Link></li>
                  <li class="nav__item"><Link to={'/login'}>Login</Link></li>
                </ul>
                
              </div>
                
          </div>
        )
    }
}

export default NavBar;