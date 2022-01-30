import React from 'react';
import './Blog.css'
import blogimg from '../../assets/blogimg.png'

const Blog = () => {
    return (
        <div className="text-center section-blog ">
            <div className="blog pt-5 mt-5">
                <h4>BLOG</h4>
                <h2 className="text-center container">Discover our products technogies and clients</h2>
                <a className="btn btn-lg mt-4 " href="#" role="button">Read all</a>
            </div>
            <div className="text-center container">
                <div className="row mt-4 pt-3">
                    <div className="col-md-4 ">
                        <div class=" custom-blog-card-shadow card custom-blog-card-height">
                            <img src={blogimg} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 className="card-title custom-blog-card-title ">[Interview]Game-Changing Hands-on Services for MaaS Providers</h5>
                                <p className="card-text custom-blog-card-text mt-4"> 23 January</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div class=" custom-blog-card-shadow card custom-blog-card-height">
                            <img src={blogimg} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 className="card-title custom-blog-card-title ">[Interview]Game-Changing Hands-on Services for MaaS Providers</h5>
                                <p className="card-text custom-blog-card-text mt-4"> 23 January</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div class="custom-blog-card-shadow card custom-blog-card-height">
                            <img src={blogimg} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 className="card-title custom-blog-card-title ">[Interview]Game-Changing Hands-on Services for MaaS Providers</h5>
                                <p className="card-text custom-blog-card-text mt-4"> 23 January</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </div>
    );
};

export default Blog;