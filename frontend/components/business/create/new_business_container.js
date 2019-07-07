import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import BusinessForm from './new_business_component'


const mdtp = dispatch=>({
    createBusindess: (business)=>dispatch(makeBusiness(business))

})

export default connect(null,mdtp)(BusinessForm)