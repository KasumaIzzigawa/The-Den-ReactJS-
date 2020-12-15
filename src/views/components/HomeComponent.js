import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TwitterFeed from './TwitterFeed';

//Contains code for article previews
function ArticlePrev({id, date}) {
    return(
        <div className="row row-preview">
            <div className="col-4 m-auto">
                <a href="/"><img src="images/foxlogo.jpg" alt="fox" id="ImgPre" className="img-fluid" /></a>
            </div>
            <div className="col-8">
                <h3>Article {id}</h3>
                <p>Here's a preview of the article.</p>
                <div className="artprev-footer">
                    <p id="artdate">{date}</p>
                    <a id="read-more" href="/">
                        READ MORE <span className="fas fa-caret-right"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

//Component for HomePage. Latest articles/Twitter
class Home extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="list-group animate__animated animate__fadeIn" id="homeList">
                            <ArticlePrev id="1" date="Dec 03, 2020"/>
                            <ArticlePrev id="2" date="Dec 03, 2020"/>
                            <ArticlePrev id="3" date="Dec 03, 2020"/>
                            <ArticlePrev id="4" date="Dec 03, 2020"/>
                            <div className="row justify-content-end">
                                <Link to="/articles">See All Articles</Link>
                            </div>
                        </div>
                    </div>                   
                    <TwitterFeed />
                </div>
            </div>
        )
    }
}

export default Home;