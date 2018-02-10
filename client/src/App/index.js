import React, { Component } from 'react';
import Header from "./Header";
import GigList from "./GigList";
import * as Scroll from "react-scroll";
import "./styles/App.css";
import { connect } from "react-redux";
import { getGig } from "./redux/gig";
import Cal from "./Calendar";


let scroll = Scroll.animateScroll;


class App extends Component {
    constructor(props) {
        super(props);
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }
    componentDidMount() {
        this.props.getGig();
    }

    scrollToBottom() {
        scroll.scrollToBottom();
    }

    render() {
        return (
            <div className="app-wrapper">
                <Header />
                <Cal />
                <div className="arrow" onClick={this.scrollToBottom}>
                    <p>UPCOMING GIGS</p>
                    <p><i className="down"></i></p>
                </div>
                <GigList />
            </div>
        )
    }
}

export default connect(null, { getGig })(App);
