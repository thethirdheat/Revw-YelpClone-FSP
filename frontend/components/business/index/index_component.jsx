import React from 'react'
import IndexItem from './index_item'

class Index extends React.Component {
    constructor(props){
        super(props)
        this.state={ biz: this.props.businesses}

    }
    componentDidMount(){
        console.log('thi sis componend did mount')
        console.log(this.props.businesses,'thsi is props?')
        this.props.getBusiness().then((res)=>this.setState({biz:this.props.businesses}))
        console.log("after",this.props.businesses,'thsi is props?')
        this.setState({wtf:this.props.businesses})
    }
    render(){
        console.log(this.props.businesses,'thsi is props?, this is in render wtf!!!!!!!!!!!')
        console.log(this.state,"this is state", "this is biz", this.state.biz)
        let show


        if(this.state.biz.length>0){
            show = this.state.biz.map(el=><IndexItem key={el.id}  business={el}/>) 
        }else{
            show=""
        }
        
        return (
            <div>
                {show}
            
            </div>)
        }
}
export default Index