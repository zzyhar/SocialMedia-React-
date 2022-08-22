import React, {useEffect,useState} from 'react'
import Share from "../share/Share"
import Post from "../post/Post"
import "./feed.css"
import axios from "axios"

export default function Feed({username}) {
  const [posts,setPosts] = useState([]);
  
  useEffect(()=>{
    const fetchPosts = async () => {
    const res = username 
      ? await axios.get("/posts/profile/"+username) 
      : await axios.get("posts/timeline/630098991db237870aaa7424");
    setPosts(res.data);
  };
    fetchPosts()
  },[username]);

  //console.log(posts)

  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {posts.map(p=>(
          <Post key={p._id} post={p}/>
        ))}
        
      </div>
    </div>
  )
}
  