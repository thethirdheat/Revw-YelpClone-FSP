
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {fetchBusiness, deleteBizPicture} from '../../../actions/business_actions'
import { selectReviewsForBusiness} from '../../../reducers/selectors'

import DetailBusiness from './biz_show_component'


//const mapStateToProps = (state, { match }) => {
//  const benchId = parseInt(match.params.benchId);
//  const bench = selectBench(state.entities, benchId);
//  const reviews = selectReviewsForBench(state.entities, bench);
//  return {
//    benchId,
//    bench,
//    reviews
//  };
//};
//

//map state to props, from the params id get that slice of state

  //const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId]
const  mstp = (state,ownProps)=>{
    const businessId = parseInt(ownProps.match.params.bizId)
    //const business = state.entities.business[businessId]
    const business= state.entities.businesses[ownProps.match.params.bizId]
    const reviews = selectReviewsForBusiness(state.entities, business)
    return {
    business,
    reviews

}}

const mdtp = dispatch =>({
    fetchBusiness: (bizId)=> dispatch(fetchBusiness(bizId)),
    deleteBizPicture: (bizId)=> dispatch(deleteBizPicture(bizId))

})

export default withRouter(connect(mstp, mdtp)(DetailBusiness))