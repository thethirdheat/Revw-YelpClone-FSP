
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import {fetchBusiness, deleteBizPicture} from '../../../actions/business_actions'

import DetailBusiness from './biz_show_component'

//map state to props, from the params id get that slice of state

  //const pokemon = state.entities.pokemon[ownProps.match.params.pokemonId]
const  mstp = (state,ownProps)=>{
    return {
    business: state.entities.businesses[ownProps.match.params.bizId]

}}

const mdtp = dispatch =>({
    fetchBusiness: (bizId)=> dispatch(fetchBusiness(bizId)),
    deleteBizPicture: (bizId)=> dispatch(deleteBizPicture(bizId))

})

export default withRouter(connect(mstp, mdtp)(DetailBusiness))