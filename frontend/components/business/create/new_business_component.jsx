import { withRouter } from 'react-router-dom';
import React from 'react'
import BizForm from './_business_from_component'
//t.string "business_name", null: false
//t.datetime "updated_at", null: false
//t.string "description"
//t.string "address"
//t.string "phone_number"
//t.string "business_type"


class BusinessForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            business_name:"",
            description:"",
            address:"",
            phone_number:"",
            business_type: "Restaurants",
        }
        this.handleSumbit = this.handleSumbit.bind(this)
        this.update=this.update.bind(this)
    }
    handleSumbit(e){
        e.preventDefault();
        console.log(this.state)
        //this.props.createBusiness({business: this.state}).then((res)=>this.props.history.push(`/biz/${res.id}`),()=>{
        this.props.createBusiness({business: this.state}).then((res)=>this.props.history.push(`/`)//,()=>{
//            if(this.props.errors){
//                let prev=Object.assign({},this.state)
//                prev.errors= this.props.errors 
//                this.setState(prev)
//            }
//            }
        )
    }

    update(field){
        return (e)=>{
            let prev=Object.assign({},this.state)
            prev[field]= e.target.value
            return this.setState(prev) 
        } 
    } 

    render(){
        return(
        <div>
            <BizForm change={this.update} send={this.handleSumbit} business={this.state}/>
        </div>)
    }

}

export default withRouter(BusinessForm)