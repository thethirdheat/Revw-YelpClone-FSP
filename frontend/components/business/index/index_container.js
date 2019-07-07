import {connect} from 'react-redux'
import {fetchAllBusinesses} from '../../../actions/business_actions'
import Index from './index_component'

const mstp = (state, ownProp) =>({
    businesses: Object.keys(state.entities.businesses).map(idNum=>state.entities.businesses[idNum])


})
const mdtp = dispatch =>({
    getBusiness: ()=>dispatch(fetchAllBusinesses())
})


export default connect(mstp,mdtp)(Index)