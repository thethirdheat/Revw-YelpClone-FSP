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
            //console.log(prev)
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
        //console.log(this.props,'this is props',this.state)
        return (
        <div>

            <nav className ="login--header">
                <div className ="login--header__container">
                    <div className="login--header__biz"  ><Link to ="/">SignUp as Business</Link> </div>
                    <br></br>
                    <div className="login--header__logo"><Link to ="/">🆁🅴🆅🆆</Link></div>
                </div>
            </nav>
            <aside className="login--left-addbar"></aside>

            {/*
            <div>
                <Link to="/"> THIS SHOULD BE THE LOGO</Link>
                <div>this will be teh user profile pic</div>
            </div>
            <br/>

            This will be the review form!*/}




            <div className="FormContainer BusnessForm">
                    <div className="InnerForm">
                    <label>
                        Rating
                    </label>
                    <form>
                        <input type="radio" value={1} onChange={this.update("rating")} />
                        <input type="radio" value={2} onChange={this.update("rating")} />
                        <input type="radio" value={3} onChange={this.update("rating")} />
                        <input type="radio" value={4} onChange={this.update("rating")} />
                        <input type="radio" value={5} onChange={this.update("rating")} />
                    </form>



                    <textarea onChange={ this.update("body")} value={this.state.body}></textarea>

                    <div className="ShowLinks--Review" onClick={()=>this.sendMakeReview(this.state).then(()=>this.props.history.push(`/biz/${this.state.review.business_id}`))}>Post Review</div>
                    </div>

            </div>

        </div>
        )






    }
}

export default withRouter(connect(mstp,mdtp)(ReviewForm))