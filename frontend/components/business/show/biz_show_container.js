
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import DetailBusiness from './biz_show_component'

//map state to props, from the params id get that slice of state

const  mstp = state,ownProps=({
    business: state.entitites.businesses[ownProps.match.params.bizId]

})

const mdtp = dispatch =>({

})

export default withRouter(connect(mstp, mdtp)(DetailBusiness))