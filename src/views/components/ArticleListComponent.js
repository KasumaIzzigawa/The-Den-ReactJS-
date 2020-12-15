import React, { Component } from 'react';

function RenderArticlePreview({id, date}) {
    return(
        <div className="row row-preview">
            <div className="col-3 mt-1">
                <a href="/"><img src="images/foxlogo.jpg" alt="fox" id="ImgPre" className="img-fluid" /></a>
            </div>
            <div className="col-9">
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

const Articles = (props) => {
    return(
        <div className="container animate__animated animate__fadeIn" id="artList">
            <div className="row">
                <div className="col-12">
                    <h3 id="artListTitle">{props.category}</h3>
                    <hr />
                </div>
            </div>
            <RenderArticlePreview id="1" date="Dec 03, 2020" />
            <RenderArticlePreview id="2" date="Dec 03, 2020" />
            <RenderArticlePreview id="3" date="Dec 03, 2020" />
            <RenderArticlePreview id="4" date="Dec 03, 2020" />
        </div>
    )
}

export default Articles;