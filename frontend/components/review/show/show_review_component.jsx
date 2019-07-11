import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ReviewsList extends React.Component{
    constructor(props){
        super(props)
        this.state=this.props.reviews? Object.values(this.props.reviews) : [{body:"Nne"}]
    }
    render(){
        if(!this.props.reviews)return null
        console.log(this.props,"this is revies")
        return(
    <div>
        This should be showing up
        {this.state.map(rev=><p>{rev.body}</p>)}

    </div>)
    }

}
export default ReviewsList