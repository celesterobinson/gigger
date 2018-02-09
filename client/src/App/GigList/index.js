import React, { Component } from "react";
import { connect } from "react-redux";
import { getGig } from "../redux/gig";
import Gig from "./Gig";
import "../styles/GigList.css";

class GigList extends Component {
    render() {
        const { data } = this.props;
        const dataMap = data.sort((gig1, gig2)=>{
            let date1 = Date.parse(gig1.date);
            let date2 = Date.parse(gig2.date);
            return date1 - date2;
        }).map((gig, i) => {
            return <Gig key={i} {...gig} ></Gig>
        })
        return (
            <div className="gig-list">
                {dataMap}
            </div>
        )
    }
}

export default connect(state => state.gig, { getGig })(GigList);
