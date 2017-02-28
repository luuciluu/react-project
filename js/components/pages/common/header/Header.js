import React from "react";
import { Link } from "react-router";

import Nav from "./components/Nav";
import Profile from "./components/Profile";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    navigate() {
        this.props.history.pushState(null, "/");
    }

    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    render() {
        return (
            <header>
                <Profile />
                <Nav />
            </header>
        );
    }
}

