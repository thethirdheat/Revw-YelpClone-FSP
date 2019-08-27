//import React from 'react'
//import IndexItem from './index_item'
//import {isEqual} from 'lodash'
//
//import {connect} from 'react-redux'
//import {fetchAllBusinesses, deleteBusiness} from '../../../actions/business_actions'
//import Index from './index_component'
//
//
//const mstp = (state, ownProp) =>{
//    console.log("look man this is map satew!!!!!!!!!!!!!!",state.entities.businesses)
//    return{
//    businesses: Object.keys(state.entities.businesses).map(idNum=>state.entities.businesses[idNum])||undefined
//
//
//}}
//const mdtp = dispatch =>({
//    getBusiness: ()=>dispatch(fetchAllBusinesses()),
//    removeBusiness: (bizId)=>dispatch(deleteBusiness(bizId))
//
//})
//
//
//
//
//
//const SearchIndex =(props)=> {
//
//        let show
//        console.log(props)
//        if(typeof props==='undefined'){
//            return 
//        }
//        if(props['businesses']===undefined){
//            return
//        }
//
//
//        if(props.businesses.length>0){
//            show = props.businesses.map((el,index)=><IndexItem index={index+1} key={el.id} remove={props.removeBusiness}  business={el}/>) 
//        }else{
//            show=""
//        }
//        
//        return (
//            <div className="IndexPage--MainContainer">
//                <div className="Index--Page__Top"><div className="IndexPage--Top__Sides"></div></div>
//                <div className="Index--Page__Left">
//                <div className="IndexPage--Top__Padding"> <div className="IndexPage--Top__Bar"></div></div>
//                <span className="Index--Page__TopText">All Results </span>
//                    {show} 
//                </div>
//                <div className="Index--Page__Right">
//                    <img  className="Index--Page__Map"src="https://i.imgur.com/sFvQN22.png"></img> 
//                </div>
//            
//            </div>)
//}
//export default connect(mstp,mdtp)(SearchIndex)
import React from 'react'
import IndexItem from './index_item'
import {isEqual} from 'lodash'

import {connect} from 'react-redux'
import {fetchAllBusinesses, deleteBusiness, searchForBusiness} from '../../../actions/business_actions'
import Index from './index_component'


const mstp = (state, ownProp) =>{
    console.log("look man this is map satew!!!!!!!!!!!!!!",state.entities.businesses)
    return{
    businesses: Object.keys(state.entities.businesses).map(idNum=>state.entities.businesses[idNum])||undefined


}}
const mdtp = dispatch =>({
//searchForBusiness
    searchBusiness: (query)=>dispatch(searchForBusiness(query)),
    removeBusiness: (bizId)=>dispatch(deleteBusiness(bizId))

})

class SearchIndex extends React.Component {
    constructor(props){
        super(props)
        //this.state={ biz: this.props.businesses}
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.location.search!== this.props.location.search){
            const params= new URLSearchParams(this.props.location.search)
            const query=params.get('search_string')
            this.props.searchBusiness(query)//.then((res)=>this.setState({biz:this.props.businesses}))
        }


    }
    componentDidMount(){
        //console.log(isEqual)
        //if(!isEqual(this.state.biz,this.props.business)){
        //if(this.state.biz!==this.props.business){
        //console.log('this is trigggering a AJAX  call???')
        //console.log(this.props.businesses,'thsi is props?')
        const params= new URLSearchParams(this.props.location.search)
        const query=params.get('search_string')

            this.props.searchBusiness(query)//.then((res)=>this.setState({biz:this.props.businesses}))
            //this.setState({wtf:this.props.businesses})

        //}
    }

    render(){
        if(!this.props.businesses.length){
            return ""
        }
        console.log('this is props????',this.props)
        let show

        console.log(this.props.location.search,'-------------mi music----------------')
        const params= new URLSearchParams(this.props.location.search)
        const query=params.get('search_string')
        console.log(query)


        if(this.props.businesses.length>0){
            console.log(this.props.businesses)
            //debugger
            show=""
            show = this.props.businesses.map((el,index)=><IndexItem index={index+1} key={el.id} remove={this.props.removeBusiness}  business={el}/>) 
        }else{
            show=(<div>wtf??</div>)
        }
        
        return (

            <div className="IndexPage--MainContainer">
                <div className="Index--Page__Top"><div className="IndexPage--Top__Sides"></div></div>
                <div className="Index--Page__Left">
                <div className="IndexPage--Top__Padding"> <div className="IndexPage--Top__Bar"></div></div>
                <span className="Index--Page__TopText">All Results </span>
                    {show} 
                </div>
                <div className="Index--Page__Right">
                    <img  className="Index--Page__Map"src="https://i.imgur.com/sFvQN22.png"></img> 
                </div>
            
            </div>
            )
        }
}
export default connect(mstp,mdtp)(SearchIndex)