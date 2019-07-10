import React from 'react'
import IndexItem from './index_item'
import {isEqual} from 'lodash'

class Index extends React.Component {
    constructor(props){
        super(props)
        this.state={ biz: this.props.businesses}
    }
    componentDidMount(){
        console.log(isEqual)
        if(!isEqual(this.state.biz,this.props.business)){
        //if(this.state.biz!==this.props.business){
        console.log('this is trigggering a AJAX  call???')
        console.log(this.props.businesses,'thsi is props?')
            this.props.getBusiness().then((res)=>this.setState({biz:this.props.businesses}))
            this.setState({wtf:this.props.businesses})

        }
    }

    render(){
        let show


        if(this.state.biz.length>0){
            show = this.state.biz.map((el,index)=><IndexItem index={index+1} key={el.id} remove={this.props.removeBusiness}  business={el}/>) 
        }else{
            show=""
        }
        
        return (
            <div className="IndexPage--MainContainer">
                <div className="Index--Page__Left">
                    {show} 
                </div>
            
            </div>)
        }
}
export default Index