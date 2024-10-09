import React from "react";
import "./FullPost.css";
import rct from '../assets/react.png';
import CreatePost from '../CreatePost/CreatePost';
import { useSearchParams } from "react-router-dom";

const FullPost = ({ blogPost }) => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    console.log(typeof(id));

    const post = blogPost.find(post => post.id.toString() === id);


    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div className="full-post">
            <div className="fullPost-left">
                <div>
                    <h1 className="fullPost-title">{post.title}</h1>
                    <p className="fullPost-subtitle">{post.subtitle}</p>
                    <div className="fullPost-image">
                        <img src={rct} alt="" />
                    </div>
                    <p className="fullPost-description">{post.description}</p>
                </div>
            </div>
            <div className="fullPost-right">
                <CreatePost />
            </div>
        </div>
    );
}

export default FullPost;
