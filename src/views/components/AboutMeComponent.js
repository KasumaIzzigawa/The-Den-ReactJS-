import React from 'react';

const About = (props) => {
    return(
        <div className="container animate__animated animate__fadeIn" id="about">
            <div className="row">
                <div className="col-12">
                    <h3 id="aboutTitle">About Me</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-4">
                    <img src="images/foxlogo.jpg" alt="fox" id="ImgPre" className="img-fluid" />
                </div>
                <div className="col-12 col-md-8">
                    <p>Hello and welcome. My name is Tony "Kasuma" Proeung and I'm a junior web developer.</p>
                    <p>I have several hobbies and plan on traveling quite a bit, so I've made this blogsite to share
                        all my experiences, hobbies, and anything else that sounds fun. Enjoy!</p>
                </div>
            </div>
        </div>
    )
}

export default About;