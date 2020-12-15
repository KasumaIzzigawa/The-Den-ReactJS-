import React, { useEffect } from 'react';

const TwitterFeed = () => {
    useEffect(() => {
        const anchor = document.createElement("a");
        anchor.setAttribute("class", "twitter-timeline");
        anchor.setAttribute("data-theme", "dark");
        anchor.setAttribute("data-height", "830");
        anchor.setAttribute("data-width", "500");
        anchor.setAttribute("href", "https://twitter.com/KasumaIzzigawa");
        document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);
    
        const script = document.createElement("script");
        script.setAttribute("src", "https://platform.twitter.com/widgets.js");
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);
  
    return (
      <div className="col-12 col-md-4 twitter-embed"></div>
    );
};


export default TwitterFeed;