import React from "react";
import './PostCard.css';
import Image from '../assets/react.png'
import { Link } from "react-router-dom";

const PostCard = ({ blog }) =>{
    const maxLength = 340;
    const truncateDescription = (description, maxLength) =>{
        if(description.length <= maxLength){
            return description;
        }
        return description.substring(0, maxLength) + '...';
    }
    return(
        <>

            {blog.map((blogPost, index) => (
                <div className="post-card" key={index}>
                    <h1 className="post-title">{blogPost.title}</h1>
                    <div className="react-image">
                        <img src={Image} alt="" />
                    </div>
                    <p className="post-description">{truncateDescription(blogPost.description, maxLength)}
                    <Link to={`/FullPost?id=${blogPost.id}`}>
                        <button className="post-card-view-more">
                            View More &gt; &gt;
                        </button>
                    </Link>
                    </p>
                    
                </div>
            ))}
        </>
    )
}

export default PostCard;