import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/pages/Layout";
import Sass from "./components/pages/Sass";
import Components from "./components/pages/Components";
import Javascript from "./components/pages/Javascript";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
        <IndexRoute component={Sass}></IndexRoute>
        <Route path="components" component={Components}></Route>
        <Route path="javascript" component={Javascript}></Route>
        </Route>
    </Router>,
    app);
