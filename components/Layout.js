import React from "react";

import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
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
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
                <Footer/>
            </div>
        );
    }
}
