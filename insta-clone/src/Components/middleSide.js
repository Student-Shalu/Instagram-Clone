import React from 'react';
import './middleSide.css';
import story from '../story.json';
import instagramLogo from '../assets/insta.png';

import Post from './post/post';
import Post2 from './post2/post';
import Post3 from './post3/post';
import Post4 from './post4/post';

const MiddleSide = () => {
    const storys=story.story;
  return (
    <div className="middleSide">
        <div className="mobileTopBar">
            <div className="instalogo">
                <img className='instaLogoMobile' src={instagramLogo} alt="" />
            </div>
        </div>
        <div className="storyBlock">
            {
                storys?.map((item,index)=>{
                    return (
                        <div className="storyProfile">
                        <div className="imgDiv">
                            <img className="story" src={item.img} alt="" />
                        </div>
                        <div className="profileName">
                            {item.name}
                        </div>
                    </div>
                    );
                })
            }
            
            
        </div>
        <div className="postSection">
           <Post />
           <Post2 />
           <Post3 />
           <Post4 />
        </div>
    </div>
  )
}

export default MiddleSide;
