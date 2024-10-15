import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Post = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(10); 
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [isSaved, setIsSaved] = useState(false);

    
    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
    };


    const handleSave = () => {
        setIsSaved(!isSaved);
    };


    const handleAddComment = (e) => {
        if (e.key === 'Enter' && newComment) {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };
    return (
        <div className="post">
            <div className="postInfo">
                <img className='postInfoImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8AuN9dYGB8VOvX7JyrH2C3ul3xPZrWCJWdA&s" alt="" />
                <div className="postInfoUsername">
                    Megha Bharti
                </div>
                <div className="timing">
                    .50 min
                </div>
                <div className="icon">
                    <MoreHorizIcon />
                </div>
            </div>
            <div className="postImg">
                <img className='postImage' src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220825163009/Front-End-Frameworks-and-Libraries1.png" alt="" />
            </div>
            <div className="iconsBlock">
                <div className="leftIcon">
                    <span onClick={handleLike}>
                        {isLiked ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
                    </span>
                    <ChatBubbleOutlineIcon />
                    <SendIcon />
                </div>
                <div className="rightIcon">
                    <span onClick={handleSave}>
                        {isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </span>
                </div>
            </div>

            <div className="likeSection">
            <div className="imageLike">
                    <img className="likeImg" src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" alt="" />
                    <img className="likeImg2" src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg" alt="" />
                </div>
                <div className="noOfLikes">
                    {likesCount.toLocaleString()} likes
                </div>
            </div>

            <div className="postAbout">
                <div className="postAboutName">
                    Megha Bharti
                </div>
                <div className="infoComment">
                    How to be a frontend developer?
                </div>
            </div>

            <div className="noOfComment">
                View all {comments.length} comments
            </div>

            
            <div className="commentsList">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <strong>User {index + 1}:</strong> {comment}
                    </div>
                ))}
            </div>

        
            <div className="addComment">
                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyDown={handleAddComment}
                />
            </div>
        </div>
    )
}

export default Post
