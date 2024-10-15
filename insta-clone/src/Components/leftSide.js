import './leftSide.css';
import React from 'react';
import profileImg from '../assets/profile.png'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import instagramLogo from '../assets/insta.png';
import ExploreIcon from '@mui/icons-material/Explore';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import GestureIcon from '@mui/icons-material/Gesture';
import MenuIcon from '@mui/icons-material/Menu';
import { responsiveFontSizes } from '@mui/material';

const LeftSide=()=>{
    return (
        <div className="leftSidePart">
            <div className="logoPart">
                <img className='logo' src={instagramLogo} alt='Instagram'/>

            </div>
            <div className="navLinkPart">
                <div className="navLink">
                    <HomeIcon />
                    <div className="navName">
                        Home
                    </div>
                </div>
                <div className="navLink">
                    <SearchIcon />
                    <div className="navName">
                        Search
                    </div>
                </div>
                <div className="navLink">
                    <ExploreIcon />
                    <div className="navName">
                        Explore
                    </div>
                </div>
                <div className="navLink">
                    <OndemandVideoIcon />
                    <div className="navName">
                        Reels
                    </div>
                </div>
                <div className="navLink">
                    <MessageIcon />
                    <div className="navName">
                        Messages
                    </div>
                </div>
                <div className="navLink">
                    <FavoriteBorderIcon />
                    <div className="navName">
                        Notification
                    </div>
                </div>
                <div className="navLink">
                    <AddBoxOutlinedIcon />
                    <div className="navName">
                        Create
                    </div>
                </div>
                <div className="navLink">
                <img className='profile' src={profileImg} alt='Profile'/>
                    <div className="navName">
                        Profile
                    </div>
                </div>
               
            </div>
            <div className="navLink">
                    <GestureIcon />
                    <div className="navName">
                        Threads
                    </div>
                </div>
                <div className="navLink">
                    <MenuIcon />
                    <div className="navName">
                        More
                    </div>
                </div>
        </div>
    )
}

export default LeftSide;