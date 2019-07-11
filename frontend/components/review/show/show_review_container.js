import {connect} from 'react-redux'
import ReviewsList from './show_review_component'

const mstp=(state, ownPros)=>{
    //const business= state.entities.businesses[ownProps.match.params.bizId]
    //const reviews = selectReviewsForBusiness(state.entities, business)

    return{
        //reviews
    }
}

const mdtp =(dispatch)=>({
    //func : ()=>dispatch(someaAction())
})
export default connect(mstp,mdtp)(ReviewsList)
