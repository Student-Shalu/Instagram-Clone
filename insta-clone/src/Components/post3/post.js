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
    const [likesCount, setLikesCount] = useState(10000);  
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
                <img className='postInfoImg' src="https://aictcomputers.in/uploads/aboutus/1/Homepage_23769889.jpg" alt="" />
                <div className="postInfoUsername">
                    Digvijay Aditya
                </div>
                <div className="timing">
                    .10 min
                </div>
                <div className="icon">
                    <MoreHorizIcon />
                </div>
            </div>
            <div className="postImg">
                <img className='postImage' src="https://media.licdn.com/dms/image/D4D12AQE0Jc6BcnfYJw/article-cover_image-shrink_600_2000/0/1695628683404?e=2147483647&v=beta&t=PRMBvhUiQw4azT0-y7kOmECzUTIFEf_WT5xee7XyIOs" alt="" />
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
                    Digvijay Aditya
                </div>
                <div className="infoComment">
                    Types of function in JavaScript...
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
