import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem,
     UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

//Includes navigation and jumbotron
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" tag={Link} to="/home">
                            <img src="images/foxlogo.jpg" height="40" width="40" alt="Fox" /> The Den
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link ml-md-5 mr-md-5" to="/home">
                                        <span className="fas fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>                          
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                    <span className="fas fa-book-open fa-lg"></span> Articles
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem tag={Link} to="/articles">All Articles</DropdownItem>
                                        <DropdownItem tag={Link} to="/articles/life">Life</DropdownItem>
                                        <DropdownItem tag={Link} to="/articles/food">Food</DropdownItem>
                                        <DropdownItem tag={Link} to="/articles/games">Games</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink className="nav-link ml-md-5 mr-md-5" to="/aboutme">
                                        <span className="fas fa-info fa-lg"></span> About Me
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header animate__animated animate__fadeIn" id="jumboContent">
                            <h1>Welcome to The Den!</h1>
                            <p>Hello and welcome to my WIP blogsite using ReactJS, Bootstrap, and PHP/MySQL!
                                Currently, everything shown is just front-end coding (Aside from the Twitter feed), with the article previews as placeholders.
                                I'll be working on the back-end afterwards. This jumbotron will most likely be replaced by a
                                banner of sorts.</p>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}

export default Header;