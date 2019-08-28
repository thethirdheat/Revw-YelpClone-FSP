import React from 'react'
import {Link} from 'react-router-dom';
import {  withRouter } from 'react-router-dom';
import {connect} from 'react-redux'

import {createReview} from '../../../actions/review_actions'
const mstp = (state, ownProps) =>{
    const user_id=state.session.id
    const business_id = ownProps.match.params.bizId
    const rating=0
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
        this.state={ review:this.props.form,
            hoverRating:0
        }


        this.sendMakeReview = this.props.makeReview.bind(this)
        this.updateRating=this.updateRating.bind(this)
    }

    update(field,val){
        return (e)=>{
            let prev=Object.assign({},this.state)
            prev.review[field]=e.target.value
            //console.log(prev)
            console.log(this.state.review.rating)
            return this.setState(prev) 
        }

    }
    updateRating(field,val){
        return (e)=>{
            let prev=Object.assign({},this.state)
            prev.review[field]=val
            //console.log(prev)
            console.log(this.state.review.rating)
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
        console.log(this.state.hoverRating,this.state.review.rating)
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
                    <div className="InnerForm" >

                    <div onClick={this.updateRating("rating",1)} onMouseEnter={()=>this.setState({hoverRating:1})} onMouseLeave={()=>this.setState({hoverRating:this.state.review.rating})} ><i className={`fas fa-star reviewPageStar ${this.state.hoverRating>0?"red":""}`} aria-hidden="true"></i> </div>
                    <div onClick={this.updateRating("rating",2)} onMouseEnter={()=>this.setState({hoverRating:2})} onMouseLeave={()=>this.setState({hoverRating:this.state.review.rating})} ><i className={`fas fa-star ${this.state.hoverRating>=2?"red":""}`} aria-hidden="true"></i> </div>
                    <div onClick={this.updateRating("rating",3)} onMouseEnter={()=>this.setState({hoverRating:3})} onMouseLeave={()=>this.setState({hoverRating:this.state.review.rating})} ><i className={`fas fa-star ${this.state.hoverRating>=3?"red":""}`} aria-hidden="true"></i> </div>
                    <div onClick={this.updateRating("rating",4)} onMouseEnter={()=>this.setState({hoverRating:4})} onMouseLeave={()=>this.setState({hoverRating:this.state.review.rating})} ><i className={`fas fa-star ${this.state.hoverRating>=4?"red":""}`} aria-hidden="true"></i> </div>
                    <div onClick={this.updateRating("rating",5)} onMouseEnter={()=>this.setState({hoverRating:5})} onMouseLeave={()=>this.setState({hoverRating:this.state.review.rating})} ><i className={`fas fa-star ${this.state.hoverRating>=5?"red":""}`} aria-hidden="true"></i> </div>



                    <textarea onChange={ this.update("body")} value={this.state.body}></textarea>

                    <div className="ShowLinks--Review" onClick={()=>this.sendMakeReview(this.state).then(()=>this.props.history.push(`/biz/${this.state.review.business_id}`))}>Post Review</div>
                    </div>

            </div>

        </div>
        )






    }
}

export default withRouter(connect(mstp,mdtp)(ReviewForm))

//                    <form >
//                        {/* <input type="radio" value={1} onChange={this.update("rating")} onMouseEnter={this.updateRating} className={this.state.hoverRating>=1 ? "fas fa-star Rating--star__red":"fas fa-star Rating--star__white"}/> */}
//                        <input type="radio" value={2} onChange={this.update("rating")} onMouseEnter={this.updateRating}/>
//                        <input type="radio" value={3} onChange={this.update("rating")} onMouseEnter={this.updateRating}/>
//                        <input type="radio" value={4} onChange={this.update("rating")} onMouseEnter={this.updateRating}/>
//                        <input type="radio" value={5} onChange={this.update("rating")} onMouseEnter={this.updateRating}/>
//                    </form>



//                    <div onClick={this.updateRating("rating",3)} onMouseEnter={()=>this.setState({hoverRating:3})} onMouseLeave={()=>this.setState({hoverRating:this.state.review.rating})} className={`${this.state.hoverRating>=3? "red":"notred"}`}><i className="fas fa-star" aria-hidden="true"></i></div>
//                    <div onClick={this.updateRating("rating",4)} onMouseEnter={()=>this.setState({hoverRating:4})} onMouseLeave={()=>this.setState({hoverRating:this.state.review.rating})} className={`${this.state.hoverRating>=4? "red":"notred"}`}><i className="fas fa-star" aria-hidden="true"></i></div>
//                    <div onClick={this.updateRating("rating",5)} onMouseEnter={()=>this.setState({hoverRating:5})} onMouseLeave={()=>this.setState({hoverRating:this.state.review.rating})} className={`${this.state.hoverRating>=5? "red":"notred"}`}><i className="fas fa-star" aria-hidden="true"></i></div>