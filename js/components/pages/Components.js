import React from "react";
import Article from  "./elements/Article";

export default class Components extends React.Component {
    constructor() {
        super();
        this.state = {
            title : "Components",
        };
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {
        // console.log(this.props);

        const { query } = this.props.location;
        const { date, filter } = query;

        const Articles = [
            "Hola 1",
            "Hola 2",
            "Hola 3",
            "Hola 4",
        ].map((title, i) => <Article key={i} title={title} /> );

        return (
            <div>
                <h1>components</h1>
                <div>{Articles}</div>

            </div>
        );
    }
}
