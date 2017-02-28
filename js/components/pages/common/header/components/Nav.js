import React from "react";
import { Link } from "react-router";

export default class Nav extends React.Component {
    render() {
        return (
           <nav>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="javascript" activeClassName="test">Javascript</Link></li>
                        <li><Link to="components" activeClassName="test">components</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
