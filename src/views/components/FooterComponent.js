import React from 'react';

//Component for social media links at bottom of all pages and scripts
function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <a className="btn btn-social-icon btn-linkedin mr-3" href="https://www.linkedin.com/in/tony-proeung-238016b1/"><i className="fab fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter mr-3" href="https://twitter.com/KasumaIzzigawa"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google mr-1" href="https://www.youtube.com/user/KasumaIzzigawa"><i className="fab fa-youtube"></i></a>
                        <a className="btn" href="https://www.twitch.tv/kasumaizzigawa"><i className="fab fa-twitch fa-2x"></i></a>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>Created by Tony Proeung | 2020</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;