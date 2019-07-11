import React from 'react'
import {Link} from 'react-router-dom';
import {  withRouter } from 'react-router-dom';
import {connect} from 'react-redux'

import {createReview} from '../../../actions/review_actions'
const mstp = (state, ownProps) =>{
    const user_id=state.session.id
    const business_id = ownProps.match.params.bizId
    const rating=1
    const body=""

    return {
        form: {user_id, business_id , rating, body}

    }
}
const mdtp = dispatch =>{

    return {
        makeReview: (reviewData)=>dispatch(createReview(reviewData))
    }
}

//    t.integer "user_id", null: false
//    t.integer "business_id", null: false
//    t.integer "rating", null: false
//    t.string "body", null: false

class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state={ review:this.props.form}


        this.sendMakeReview = this.props.makeReview.bind(this)
    }

    update(field){
        return (e)=>{
            let prev=Object.assign({},this.state)
            prev.review[field]= e.target.value
            return this.setState(prev) 
        }

    }

    handleSumbit(e){
        e.preventDefault();
        this.props.processSignUp({user: this.state.user}).then(()=>this.props.history.push('/'), ()=>{
            if(this.props.errors){
                let prev=Object.assign({},this.state)
                prev.errors= this.props.errors 
                this.setState(prev)
            }
        })
    }

    
    render(){
        console.log(this.props,'this is props',this.state)
        return (
        <div>
            <div>
                <Link to="/"> THIS SHOULD BE THE LOGO</Link>
                <div>this will be teh user profile pic</div>
            </div>
            <br/>

            This will be the review form!
            <div>
                this will be the radiou buttsons for now its input
                <input type="text" value={this.state.rating} onChange={this.update("rating")} />
            </div>
            <div>***this should be stars ***</div>


            <textarea onChange={ this.update("body")} value={this.state.body}></textarea>

            <div onClick={()=>this.sendMakeReview(this.state)}>Post Review</div>

        </div>
        )
    }
}

export default withRouter(connect(mstp,mdtp)(ReviewForm))