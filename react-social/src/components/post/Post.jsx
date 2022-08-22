import React, { useState, useEffect } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./post.css"
import axios from 'axios';
import {format} from "timeago.js"

export default function Post({post}) {
    const [like, setLike]= useState(post.likes.length);
    const [isLiked, setIsliked]= useState(false);
    const [user, setUser]= useState({});
    // public folder
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(()=>{
    const fetchUser = async () => {
    const res = await axios.get(`users/${post.userId}`);
    setUser(res.data);
     };
        fetchUser()
    },[post.userId]);

    const likeHandler = () =>{
        setLike(isLiked ? like -1  : like +1);
        setIsliked(!isLiked)

    }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={user.profilePicture || PF+"person/noAvatar.png"}  alt="" />
                    <span className='postUsername'>{user.username}</span>
                    <span className='postDate'>{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className='postText'>{post.desc}</span>
                <img className="postImg" src={PF+post.img} alt="" /> 
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src={`${PF}like.png`} onClick={likeHandler} alt="" />
                    <img className='likeIcon' src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people liked post</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
