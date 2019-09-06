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
            business_type: "Restaurant",
            photoFile: null,
            price:"",
            long:"",
            lat:''

        }
        this.handleSumbit = this.handleSumbit.bind(this)
        this.update=this.update.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }
    handleSumbit(e){
        e.preventDefault();
        const formData = new FormData()
        if(this.state.photoFile){
            formData.append('business[photo]', this.state.photoFile) 
        }
        formData.append('business[business_name]',this.state.business_name)
        formData.append('business[description]',this.state.description)
        formData.append('business[address]',this.state.address)
        formData.append('business[phone_number]',this.state.phone_number)
        formData.append('business[business_type]',this.state.business_type)
        formData.append('business[price]',this.state.price)
        formData.append('business[long]',this.state.long)
        formData.append('business[lat]',this.state.lat)
        this.props.createBusiness(formData).then(
            ((res)=>this.props.history.push('/'))
        )

//        this.props.createBusiness({business: this.state}).then((res)=>this.props.history.push(`/biz/${res.id}`),()=>{
//        this.props.createBusiness({business: this.state}).then((res)=>this.props.history.push(`/`)//,()=>{
//            if(this.props.errors){
//                let prev=Object.assign({},this.state)
//                prev.errors= this.props.errors 
//                this.setState(prev)
//            }
//            }
//        )
    }
    handleFile(e){
        this.setState({photoFile: e.currentTarget.files[0]})

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
        <div className="BizForm">
            <BizForm dealWithFile ={this.handleFile} change={this.update} send={this.handleSumbit} business={this.state}/>
        </div>)
    }

}

export default withRouter(BusinessForm)