import React, { Component } from "react";
import { connect } from "react-redux";
import { getGig } from "../redux/gig";
import Gig from "./Gig";

class GigList extends Component {
    componentDidMount() {
        this.props.getGig();
    }
    render() {
        const { data } = this.props;
        const dataMap = data.map((gig, i) => {
            return <Gig key={i} {...gig} ></Gig>
        })
        return (
            <div>
                {dataMap}
            </div>
        )
    }
}

export default connect(state => state.gig, { getGig })(GigList);
