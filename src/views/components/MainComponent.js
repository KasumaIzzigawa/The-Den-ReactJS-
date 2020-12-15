import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Articles from './ArticleListComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutMeComponent';

class Main extends Component {
    

    render() {
        const HomePage = () => {
            return(
                <Home />
            )
    }
        return(
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={HomePage}/>
                        <Route exact path="/articles" component={() => <Articles category="All Articles"/>} />
                        <Route path="/articles/life" component={() => <Articles category="Life Articles"/>} />
                        <Route path="/articles/food" component={() => <Articles category="Food Articles"/>} />
                        <Route path="/articles/games" component={() => <Articles category="Game Articles"/>} />
                        <Route path="/aboutme" component={() => <About />} />
                        <Redirect to="/home" />
                    </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;