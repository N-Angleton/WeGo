import React from 'react';
import ProfileAbout from "./profile_about";
import ProfileActivities from "./profile_activities";
import ProfilePhotos from "./profile_photos"



class ProfileFeed extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        feedstatus: "about"
      }
      this.handleInput = this.handleInput.bind(this);

    }

    handleInput(feedstatus) {
        return e => {
            this.setState({
                feedstatus: feedstatus
            })
        }
    }

    render() {
        let feedstatus= '';
        
        if(this.state.feedstatus === "about"){
            feedstatus= 
                <>
                    <div  className='profile__feedbar'> 
                        <div 
                            className='profile__feedbar--option active'
                            onClick={this.handleInput('about')}>
                                About
                        </div>
                        <div
                            className='profile__feedbar--option '
                            onClick={this.handleInput('photos')}>
                            Photos
                        </div>
                        <div 
                            className='profile__feedbar--option'
                            onClick={this.handleInput('activities')}>
                                Activities
                        </div>
                    </div> 
                    <ProfileAbout 
                        user={this.props.user}
                        currentUserId={this.props.currentUserId}
                        openModal={this.props.openModal}
                        />
                </> 
        } else if (this.state.feedstatus === "activities") {
            feedstatus= 
            <>
            <div  className='profile__feedbar'> 
                <div 
                    className='profile__feedbar--option '
                    onClick={this.handleInput('about')}>
                        About
                </div>
                <div 
                    className='profile__feedbar--option '
                    onClick={this.handleInput('photos')}>
                        Photos
                </div>
                <div 
                    className='profile__feedbar--option active'
                    onClick={this.handleInput('activities')}>
                        Activities
                </div> 
            </div> 
            <ProfileActivities />
        </> 
        } else if (this.state.feedstatus === "photos") {
            feedstatus= 
            <>
            <div  className='profile__feedbar'> 
                <div 
                    className='profile__feedbar--option '
                    onClick={this.handleInput('about')}>
                        About
                </div>
                <div 
                    className='profile__feedbar--option active'
                    onClick={this.handleInput('photos')}>
                        Photos
                </div>
                <div 
                    className='profile__feedbar--option'
                    onClick={this.handleInput('activities')}>
                        Activities
                </div> 
            </div> 
            <ProfilePhotos />
        </> 
        }
        return(
         <div className='profile__feed'>
            {feedstatus}                       
         </div>
        )
    }
}

export default ProfileFeed;