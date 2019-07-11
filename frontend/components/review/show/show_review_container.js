import {connect} from 'react-redux'
import ReviewsList from './show_review_component'
import { withRouter } from 'react-router-dom'

const mstp=(state, ownProps)=>{
    //const business= state.entities.businesses[ownProps.match.params.bizId]
    //const reviews = selectReviewsForBusiness(state.entities, business)
    /*
    const business= state.entities.businesses[ownProps.match.params.bizId]
    let reviews={}
    if(business.reviewIds!=undefined){
      if(business.reviewIds.length){
        console.log(state,business,business.reviewIds,"this shoudl have reviess")
        let ids= business.reviewIds
        reviews=ids.map(id=>state.entities.reviews[id])

      }
    }
    */

    return{

        reviews: ownProps.reviews
    }
}

const mdtp =(dispatch)=>({
    //func : ()=>dispatch(someaAction())
})
export default withRouter(connect(mstp,mdtp)(ReviewsList))
