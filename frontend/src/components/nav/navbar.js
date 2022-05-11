import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import LogoutIcon from '@mui/icons-material/Logout';

class NavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: this.props.loggedIn,
        scroll : ''
      };
    }
    componentDidMount() {
      if (this.props.currentUser) this.props.fetchUser(this.props.currentUser)
   }

    render() {
      let addIcon = this.props.loggedIn ? (
        <div className="nav__right--option" onClick={() => this.props.openModal("createActivity")}>
          <AddIcon sx={{ fontSize: 30 }} />
        </div>
      ) : null;


      const username = (this.props.user) ? this.props.user.fname + ' ' + this.props.user.lname : '';
        let navbarLinks = (this.props.loggedIn) ? (
          <div className='nav__right'>   
            {addIcon}         
            <div  className="nav__right--option">
              <ChatRoundedIcon sx={{fontSize: 25 }}/>
            </div>
            <div  className="nav__right--option nav__menu--more">
              <ArrowDropDownRoundedIcon sx={{fontSize: 40 }}/>
              <div className='nav__menu'>
                  <div className='nav__menu--option'>
                        
                        <img src={(this.props.user) ? this.props.user.profilePhotoPath : ""}  className="menu__avatar" />
                        <Link to={`/profile/${this.props.currentUser}`}> Profile </Link> 
                  </div>
                  <div className='nav__menu--option'>
                      <LogoutIcon  sx={{fontSize: 30 }}/>
                      <Link to={'/'} onClick={this.props.logout}>   Logout</Link>
                  </div>
              </div>
            </div>
                      
          </div>
          
        ) : (
          <div>
             <ul className="list nav__list">
              <li className="nav__item singup"  onClick={()=>this.props.openModal('signup')}>Signup</li>
              <li className="nav__item"  onClick={()=>this.props.openModal('login')}>Login</li>
            </ul>
          </div>
        )
        return (
          <div className='nav'>
              <div className='nav_left'>
                <div>
                  <div className='nav__logo'>
                    <Link to="/">
                        <span style={{ color: "#2596be", fontSize: 'xx-large', fontWeight: '800',  fontFamily: 'Cursive'}}>
                          W   
                        </span>
                        <span style={{ color: "#3596be", fontSize: 'x-large', fontWeight: '700',  fontFamily: 'Cursive'}}>
                          e  
                        </span>
                        <span style={{ color: "#1e81b0", fontSize: 'x-large', fontWeight: '900',  fontFamily: 'Cursive'}}>
                          G 
                        </span>
                        <span style={{ color: "#0e81b0", fontSize: 'x-large',fontWeight: '600',  fontFamily: 'Cursive'}}>
                          o  
                        </span>
                        <span>          
                        </span>
                    </Link>
                  </div>
                </div>
              </div>
     
                 
               <div className='nav__right'>                       
                {navbarLinks}
              </div>   
          </div>
        )
    }
}

export default NavBar;