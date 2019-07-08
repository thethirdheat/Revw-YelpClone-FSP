import {connect} from 'react-redux'
import {fetchAllBusinesses, deleteBusiness} from '../../../actions/business_actions'
import Index from './index_component'


const mstp = (state, ownProp) =>{
    console.log("look man this is map satew!!!!!!!!!!!!!!")
    return{
    businesses: Object.keys(state.entities.businesses).map(idNum=>state.entities.businesses[idNum])


}}
const mdtp = dispatch =>({
    getBusiness: ()=>dispatch(fetchAllBusinesses()),
    removeBusiness: (bizId)=>dispatch(deleteBusiness(bizId))

})


export default connect(mstp,mdtp)(Index)