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
    const [likesCount, setLikesCount] = useState(1);  
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
                <img className='postInfoImg' src="https://aictcomputers.in/uploads/ourteam/5/Shalu%20Kumari_54536093_logo.jpg" alt="" />
                <div className="postInfoUsername">
                    Shalu Bharti
                </div>
                <div className="timing">
                    .1h
                </div>
                <div className="icon">
                    <MoreHorizIcon />
                </div>
            </div>
            <div className="postImg">
                <img className='postImage' src="https://res.cloudinary.com/teepublic/image/private/s--xXjTv9Cq--/c_crop,x_10,y_10/c_fit,h_1197/c_crop,g_north_west,h_1260,w_1260,x_-56,y_-31/co_rgb:000000,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_-56,y_-31/bo_0px_solid_white/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1610720833/production/designs/18527081_0.jpg" alt="" />
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
                    Shalu Bharti
                </div>
                <div className="infoComment">
                    Fun 😃🙂😆😅
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
