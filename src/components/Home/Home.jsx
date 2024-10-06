import React from "react";
import './Home.css';
import PostCard from "../PostCard/PostCard";
import CreatePost from "../CreatePost/CreatePost";

const Home = () =>{
    return(
        <>

            <div className="home-container">
                <div className="left-side">
                    <h1>React </h1>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
                <div className="right-side">
                    <CreatePost />
                </div>
            </div>
        </>
    );
}

export default Home;