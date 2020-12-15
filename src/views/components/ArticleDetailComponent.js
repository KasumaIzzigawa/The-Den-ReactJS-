import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

//Shows chosen article
const ArticleDetails = (props) => {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/articles'>Articles</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Article Title</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Article Title</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>Article Content</p>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetails;