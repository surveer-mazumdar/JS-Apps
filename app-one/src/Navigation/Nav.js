import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";

const NavItem = props => {
    return (
        <li className="nav-item"><NavLink className="nav-link" to={props.href}>{props.linkName}</NavLink></li>
    )
}

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            links: [
                { href: "/stuff", linkName: "Stuff" },
                { href: "/contact", linkName: "Contact" },
                /*{ href: "/activities", linkName: "Activities" },*/
                { href: "/photos", linkName: "Photos" },
            ]
        }
    }


    render() {

        let { links } = this.state;
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark d-none d-sm-block">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>
                        {links.map((item, key) => (
                            <NavItem href={item.href} linkName={item.linkName} />
                        ))}
                    </ul>
                </nav>
                <nav className="navbar navbar-fixed-top bg-dark navbar-dark d-block d-sm-none">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="collapsingNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link">Home</NavLink>
                            </li>
                            {links.map((item, key )=> (
                                <NavItem key={key} href={item.href} linkName={item.linkName} />
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;