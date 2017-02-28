import React from "react";
import { Link } from "react-router";

import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "Holi",
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {

        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

