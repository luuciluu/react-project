import React from "react";

export default class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            title : "Article",
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        const { title } = this.props;

        return (
            <div>
                <h4>{title}</h4>
                <p>Lorem Ipsum Dolor</p>
            </div>
        );
    }
}
 // <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
