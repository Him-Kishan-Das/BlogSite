import React from "react";
import './PostCard.css';
import Image from '../assets/react.png'

const PostCard = () =>{
    return(
        <>
            <div className="post-card">
                <h1 className="post-title">Create a simple react project</h1>
                <div className="react-image">
                    <img src={Image} alt="" />
                </div>
                <p className="post-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam architecto cum recusandae vel nesciunt sapiente similique dolorem eum? Aliquam omnis nemo magni sint fuga sequi facilis commodi veritatis ullam quos. 
                Non cupiditate inventore, doloribus tempore veniam reprehenderit nihil adipisci consequatur ipsa optio repellat culpa iusto beatae aliquid nemo at. Delectus et omnis maiores natus libero possimus aliquam est optio earum!
                <button className="post-card-view-more">
                    View More &gt; &gt;
                </button>
                </p>
                
            </div>
        </>
    )
}

export default PostCard;