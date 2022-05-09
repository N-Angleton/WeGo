import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

import Avatar from '@mui/material/Avatar';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

class NavBar extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
        let navbarLinks = this.props.loggedIn ? (
          <div>
            <ul className="list nav__list">
              <li className="nav__item" onClick={()=>this.props.logout()}>Log Out</li>
            </ul>
          </div>
        ) : (
          <div>
             <ul className="list nav__list">
              <li className="nav__item" onClick={()=>this.props.openModal('signup')}>Signup</li>
              <li className="nav__item"  onClick={()=>this.props.openModal('login')}>Login</li>
            </ul>
          </div>
        )

        return (
          <div className='nav'>
              <div className='nav_left'>
                <div>
                  <div className='nav__logo'>
                      <span style={{ color: "#0071bc", fontSize: 'x-large', fontWeight: '700'}}>
                        W   
                      </span>
                      <span style={{ color: "#42b2fc", fontSize: 'large', fontWeight: '600'}}>
                        e  
                      </span>
                      <span style={{ color: "#3f89bb", fontSize: 'x-large', fontWeight: '700'}}>
                        G 
                      </span>
                      <span style={{ color: "#08c3fc", fontSize: 'x-large',fontWeight: '600'}}>
                        o  
                      </span>
                      <span>
                        {/* <SendRoundedIcon /> */}
                      </span>

                  </div>
                  {/* <div className='nav__slogan'>
                    Who's In?
                  </div> */}
                </div>
                {/* <div className='nav__search'>
                  <input 
                  className='input nav__search--input'
                  type="text" placeholder='Search Activity...' disabled/>
              </div> */}

              </div>

              
             
          
               <div className='nav__right'>
                 
               <div className="nav__user"> 
            
                <div className="nav__user--username"> 
                    {/* <Avatar /> */}
                </div>                                
                </div>
                {navbarLinks}
              </div>
                
              
          </div>
        )
    }
}

export default NavBar;