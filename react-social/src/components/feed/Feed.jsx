import React, {useEffect,useState} from 'react'
import Share from "../share/Share"
import Post from "../post/Post"
import "./feed.css"
import axios from "axios"

export default function Feed() {
  const [posts,setPosts] = useState([]);
  
  useEffect(()=>{
    const fetchPosts = async () => {
    const res = await axios.get("posts/timeline/630098991db237870aaa7424");
    setPosts(res.data);
  };
    fetchPosts()
  },[]);

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
