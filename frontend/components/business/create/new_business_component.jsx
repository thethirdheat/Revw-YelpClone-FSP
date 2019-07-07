
import React from 'react'
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
            updated_at:"",
            description:"",
            address:"",
            phone_number:"",
            business_type: "",
        }
    }
    handleSumbit(e){
        e.preventDefault();
        this.props.createBusiness({business: this.state}).then((res)=>this.props.history.push(`/biz/${res.id}`),()=>{
            if(this.props.errors){
                let prev=Object.assign({},this.state)
                prev.errors= this.props.errors 
                this.setState(prev)
            }
        })
    }

    render(){
        return(
        <div>
            This is the form to make a buisness
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state}/>

            </form>
        </div>)
    }

}

export default BusinessForm