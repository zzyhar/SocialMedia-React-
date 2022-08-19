import React from 'react'
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className='profile'>
      <Sidebar/>
        <div className="profileRight">
            <div className="profileCover">
                 <div className="profileRightTop">
                    <img className="profileCoverImg" src="assets/post/3.jpeg" alt=""/>
                    <img className="profileUserImg" src="assets/person/7.jpeg" alt=""/>
                </div>
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>Zakhar Zyhar</h4>
                <span className='profileInfoDesc'>lol</span>

            </div>
            <div className="profileRightBottom">
              <Feed/>
              <Rightbar profile/>
            </div>
        </div>
    </div>
    </>
  )
}
