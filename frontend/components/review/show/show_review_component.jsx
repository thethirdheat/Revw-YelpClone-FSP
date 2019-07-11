import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import ReviewItem from '../review_item/review_item'

class ReviewsList extends React.Component{
    constructor(props){
        super(props)
        //this.state=this.props.reviews? Object.values(this.props.reviews) : [{body:"Nne"}]
    }
    render(){
        console.log(this.props,"t------------------------------------------------his is teh first render of  showwwwwwww review component-------------------------")
        let revs=""
        if(this.props.reviews=="blank"){
            return null
        }else{
            console.log("this is what you are looking for ",this.props)
            revs=this.props.reviews.map(rev=><ReviewItem review={rev} key={rev.id}/>) 
        }



        return(
        <div>
            This should be showing up
            <button onClick={()=>console.log(this.props)}>Clic me for props</button>
            {revs}

        </div>)
    }

}
export default ReviewsList
        //{this.state.map(rev=><p>{rev.body}</p>)}