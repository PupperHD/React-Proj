import React, {Component} from 'react';
import About from "../about";
import Home from "../home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="App">
                <div className="nav">
                    <Router>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>

                            <hr />

                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default Header;
