import React from 'react'
import "./BlogPosts.css"

const BlogPosts = () => {
    return (
        <>
            <div className="blogPosts__wrapper">
                <div className="container">
                    <div className="row">
                        <div className='blogPosts-text'>
                            <div style={{ width: "50%", textAlign: "center", margin: "0 auto", padding: "50px" }}>
                                <h2 style={{ fontSize: "3em" }}>Blog Posts</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
                            </div>
                        </div>
                        <div className='blogPosts-cards'>
                            <div className="blogPosts-card__left"></div>
                            <div className="blogPosts-card__right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPosts
