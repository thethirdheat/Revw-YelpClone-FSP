import {connect} from 'react-redux'
import NavBar from './nav_bar_component'
import {searchForBusiness} from '../../../actions/business_actions'

const mdtp = dipsatch =>({
    searchNav: (query)=>dipsatch(searchForBusiness(query))

})

export default connect(null,mdtp)(NavBar)