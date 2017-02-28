import React from "react";

import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";

export default class Sass extends React.Component {
    constructor() {
        super();
        this.state = {
            title : "Sass",
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {

        return (
            <div>
                <h1>Sass</h1>
            </div>
        );
    }
}
