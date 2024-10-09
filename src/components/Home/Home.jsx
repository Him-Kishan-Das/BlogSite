import React from "react";
import './Home.css';
import PostCard from "../PostCard/PostCard";
import CreatePost from "../CreatePost/CreatePost";

const Home = ({ blog }) =>{
    return(
        <>

            <div className="home-container">
                <div className="left-side">
                    <h1>Blog Post </h1>
                    <PostCard blog={blog}  />
                </div>
                <div className="right-side">
                    <CreatePost />
                </div>
            </div>
        </>
    );
}

export default Home;