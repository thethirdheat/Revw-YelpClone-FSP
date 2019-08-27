import {connect} from 'react-redux'
import SearchBox from './search_component'
import {searchForBusiness} from '../../../actions/business_actions'

import { withRouter } from 'react-router-dom';

const mstp = (state, ownProps)=>({

})

const mdtp  = dispatch =>({
    dispatchSearch: (queryType,query_desc)=>dispatch(searchForBusiness(queryType,query_desc))

})
export default withRouter(connect(mstp,mdtp)(SearchBox))