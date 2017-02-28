import React from "react";

import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";

export default class Javascript extends React.Component {
    constructor() {
        super();
        this.state = {
            title : "Javascript",
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {

        return (
            <div>
                <h1>javascript</h1>
            </div>
        );
    }
}
 // <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
